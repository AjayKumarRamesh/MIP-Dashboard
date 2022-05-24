/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'mipdashboard'),
		publicPath: '/mipdashboard',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react'],
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: true,
						},
					},
				],
			},
		],
	},
};
