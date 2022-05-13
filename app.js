/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const express = require('express');

const session = require("express-session");
const passport = require("passport");
const appID = require("ibmcloud-appid");

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const React = require('react');
const ReactDOMServer = require('react-dom/server.js');
const { default: App } = require('./mipdashboard/App.js');

const app = express();
const compiler = webpack(require('./webpack.config'));

const WebAppStrategy = appID.WebAppStrategy;

const CALLBACK_URL = "/ibm/cloud/appid/callback";

app.use(session({
	secret: "123456",
	resave: true,
	saveUninitialized: true,
	proxy: true
}));

// Configure express application to use passportjs
app.use(passport.initialize());
app.use(passport.session());

let webAppStrategy = new WebAppStrategy(getAppIDConfig());
passport.use(webAppStrategy);

// Configure passportjs with user serialization/deserialization. This is required
// for authenticated session persistence accross HTTP requests. See passportjs docs
// for additional information http://passportjs.org/docs
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

// Callback to finish the authorization process. Will retrieve access and identity tokens/
// from AppID service and redirect to either (in below order)
// 1. the original URL of the request that triggered authentication, as persisted in HTTP session under WebAppStrategy.ORIGINAL_URL key.
// 2. successRedirect as specified in passport.authenticate(name, {successRedirect: "...."}) invocation
// 3. application root ("/")
app.get(CALLBACK_URL, passport.authenticate(WebAppStrategy.STRATEGY_NAME, {failureRedirect: '/error'}));

// Protect everything under /
app.use("/mipdashboard", passport.authenticate(WebAppStrategy.STRATEGY_NAME));

// This will statically serve pages:
//app.use(express.static("public"));

// // This will statically serve the protected page (after authentication, since /protected is a protected area):
//app.use('/views', express.static("App"));

app.use(webpackDevMiddleware(compiler, { index: false, serverSideRender: true }));

app.use('/mipdashboard', (req, res) => {
  const { devMiddleware } = res.locals.webpack;
  const { stats } = devMiddleware;
  const { assetsByChunkName } = stats.toJson();
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'public, max-age=0');
  res.send(
    `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <title>MIP Dashboard</title>
          <link id="external-css" rel="stylesheet" type="text/css" href="https://unpkg.com/carbon-components/css/carbon-components.min.css" media="all">
        </head>
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root">${ReactDOMServer.renderToString(React.createElement(App))}</div>
          <script src="${assetsByChunkName.main}"></script>
        </body>
      </html>
    `
  );
  res.end();
});

//Serves the identity token payload
app.get("/api/idPayload", (req, res) => {
	res.send(req.session[WebAppStrategy.AUTH_CONTEXT].identityTokenPayload);
});

app.get('/error', (req, res) => {
	res.send('Authentication Error');
});

function getAppIDConfig() {
	let config;
	
	try {
		// if running locally we'll have the local config file
		config = require('./localdev-config.json');
	} catch (e) {
		if (process.env.APPID_SERVICE_BINDING) { // if running on Kubernetes this env variable would be defined
			config = JSON.parse(process.env.APPID_SERVICE_BINDING);
			config.redirectUri = process.env.redirectUri;
		} else { // running on CF
			let vcapApplication = JSON.parse(process.env["VCAP_APPLICATION"]);
			return {"redirectUri" : "https://" + vcapApplication["application_uris"][0] + CALLBACK_URL};
		}
	}
	return config;
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`); // eslint-disable-line no-console
});
