"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HeaderContainer = _interopRequireDefault(require("carbon-components-react/lib/components/UIShell/HeaderContainer"));

var _UIShell = require("carbon-components-react/lib/components/UIShell");

var _Toggle = _interopRequireDefault(require("carbon-components-react/lib/components/Toggle"));

var _OverflowMenu = _interopRequireDefault(require("carbon-components-react/lib/components/OverflowMenu"));

var _OverflowMenuItem = _interopRequireDefault(require("carbon-components-react/lib/components/OverflowMenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
const operationalImage = {
  pathname: "\\src\\views\\e2e_operational_dashboard_preview.png",
  src: "\\src\\views\\e2e_operational_dashboard_preview.png",
  type: "png",
  width: 1154,
  height: 920,
  aspectRatio: 1.254,
  heightToWidthRatio: 0.797
};
const newsletterImage = {
  pathname: "\\src\\views\\newletter_subs_preview.png",
  src: "\\src\\views\\newletter_subs_preview.png",
  type: "png",
  width: 909,
  height: 680,
  aspectRatio: 1.337,
  heightToWidthRatio: 0.748
};
const hrmperfImage = {
  pathname: "\\src\\views\\hrmperfdash.png",
  src: "\\src\\views\\hrmperfdash.png",
  type: "png",
  width: 999,
  height: 720,
  aspectRatio: 1.387,
  heightToWidthRatio: 0.721
};
const comingsoon = {
  pathname: "\\src\\views\\comingsoon.jpg",
  src: "\\src\\views\\comingsoon.jpg",
  type: "jpeg",
  width: 6001,
  height: 4001,
  aspectRatio: 1.5,
  heightToWidthRatio: 0.667
};

const StoryContent = () => {
  const content = /*#__PURE__*/_react.default.createElement("div", {
    id: "divId",
    className: "bx--grid"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(FrequentUsed, null)), /*#__PURE__*/_react.default.createElement(AdditionalResource, null), /*#__PURE__*/_react.default.createElement(Footer, null));

  return /*#__PURE__*/_react.default.createElement(_UIShell.Content, {
    id: "main-content",
    style: {
      padding: '1rem'
    }
  }, content);
};

const FrequentUsed = () => /*#__PURE__*/_react.default.createElement("section", {
  className: "app-frequentlyUsedReports bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-xlg-12"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row",
  style: {
    paddingLeft: '2rem',
    marginBottom: '8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-xlg-6"
}, /*#__PURE__*/_react.default.createElement("h2", {
  className: "app-frequentlyUsedReports__header"
}, "Spotlight"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row",
  style: {
    paddingLeft: '2rem',
    paddingRight: '2.2rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 app-frequentlyUsedReports__item"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "bx--link bx--tile bx--tile--clickable app-frequentlyUsedReport__item-tile",
  onClick: () => loadDashboard('addiDash', 'https://ibm.biz/HRM_Performance', false)
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-frequentlyUsedReports__item-img-wrap"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: hrmperfImage,
  className: "app-frequentlyUsedReports__item-img",
  alt: "",
  "aria-hidden": "true"
})), /*#__PURE__*/_react.default.createElement("div", {
  className: "app-frequentlyUsedReports__item-label"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "app-frequentlyUsedReports__item-title"
}, "HRM Performance Dashboard")))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 app-frequentlyUsedReports__item"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "bx--link bx--tile bx--tile--clickable app-frequentlyUsedReport__item-tile",
  onClick: () => loadDashboard('operDash', 'https://ibm.biz/E2E_Monitoring', false)
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-frequentlyUsedReports__item-img-wrap"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: operationalImage,
  className: "app-frequentlyUsedReports__item-img",
  alt: "",
  "aria-hidden": "true"
})), /*#__PURE__*/_react.default.createElement("div", {
  className: "app-frequentlyUsedReports__item-label"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "app-frequentlyUsedReports__item-title"
}, "E2E Operational Dashboard")))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 app-frequentlyUsedReports__item"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "bx--link bx--tile bx--tile--clickable app-frequentlyUsedReport__item-tile",
  onClick: () => loadDashboard('newsDash', 'https://ibm.biz/NewsletterSubs', false)
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-frequentlyUsedReports__item-img-wrap"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: newsletterImage,
  className: "app-frequentlyUsedReports__item-img",
  alt: "",
  "aria-hidden": "true"
})), /*#__PURE__*/_react.default.createElement("div", {
  className: "app-frequentlyUsedReports__item-label"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "app-frequentlyUsedReports__item-title"
}, "Newsletter Subscriptions Dashboard")))))));

const AdditionalResource = () => /*#__PURE__*/_react.default.createElement("section", {
  className: "app-assetList bx--row app-assetList--light",
  style: {
    paddingLeft: '3rem',
    marginLeft: '-0.8rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-xlg-12"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-xlg-6"
}, /*#__PURE__*/_react.default.createElement("h2", {
  className: "app-assetList__header"
}, "Additional Resources"))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 app-assetList__item"
}, /*#__PURE__*/_react.default.createElement("a", {
  href: "https://w3.ibm.com/w3publisher/marketing-automation-platform",
  target: "_blank",
  className: "bx--link bx--tile bx--tile--clickable"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "app-assetList__item-tag"
}, /*#__PURE__*/_react.default.createElement("svg", {
  focusable: "false",
  preserveAspectRatio: "xMidYMid meet",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  width: "20",
  height: "20",
  viewBox: "0 0 122.88 119.86",
  "aria-hidden": "true"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M20.72,72a3,3,0,0,1-2.84-3.1,3,3,0,0,1,2.84-3.1H57.47a3,3,0,0,1,2.84,3.1A3,3,0,0,1,57.47,72ZM83.08,95.75c-1-1.53-2.77-3.62-2.77-5.42a2.92,2.92,0,0,1,1.94-2.64c-.09-1.51-.15-3.06-.15-4.59,0-.9,0-1.82.05-2.72A6.52,6.52,0,0,1,82.46,79a9.7,9.7,0,0,1,4.32-5.48,12.28,12.28,0,0,1,2.34-1.12c1.48-.54.76-2.88,2.39-2.91,3.79-.1,10,3.22,12.47,5.86a8.84,8.84,0,0,1,2.49,5.93L106.32,88a2.17,2.17,0,0,1,1.59,1.37c.52,2.1-1.66,4.71-2.67,6.38s-4.5,5.74-4.51,5.78a1.39,1.39,0,0,0,.32.77c5.54,7.62,21.83,1.74,21.83,16.89H65.33c0-15.16,16.29-9.27,21.82-16.89a1.68,1.68,0,0,0,.4-.79c0-.1-4.1-5.12-4.47-5.71Zm8-76.89h10.18A7.16,7.16,0,0,1,106.39,21a7.26,7.26,0,0,1,2.13,5.13V61.9l-6.27-2.46V26.13a1,1,0,0,0-1-1H91V57.88l-6.24,2.46V7.27a1,1,0,0,0-1-1H7.24a1,1,0,0,0-1,1V93.72a1,1,0,0,0,1,1H64.42L62,101H23.66v11.6a1,1,0,0,0,1,1H56.37l-2.46,6.24H24.73a7.31,7.31,0,0,1-7.27-7.28V101H7.27A7.31,7.31,0,0,1,0,93.72V7.27A7.16,7.16,0,0,1,2.14,2.14,7.23,7.23,0,0,1,7.27,0H83.79a7.18,7.18,0,0,1,5.14,2.14,7.27,7.27,0,0,1,2.14,5.13V18.86Zm-70.38,10a3,3,0,0,1-2.85-3.1,3,3,0,0,1,2.85-3.1H69.77a3,3,0,0,1,2.84,3.1,3,3,0,0,1-2.84,3.1Zm0,21.57a3,3,0,0,1-2.85-3.1,3,3,0,0,1,2.85-3.1H69.77a3,3,0,0,1,2.84,3.1,3,3,0,0,1-2.84,3.1Z"
})), "MIP W3 Publisher Page"), /*#__PURE__*/_react.default.createElement("div", {
  className: "app-assetList__item-label"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "app-assetList__item-title"
}, "Want to know about Marketing Automation Platform?"), /*#__PURE__*/_react.default.createElement("p", {
  className: "app-assetList__item-description"
}, "Access publisher page to know more."), /*#__PURE__*/_react.default.createElement("span", {
  className: "app-assetList__item-link"
}, "Visit Page", /*#__PURE__*/_react.default.createElement("svg", {
  focusable: "false",
  preserveAspectRatio: "xMidYMid meet",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"
})))))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 app-assetList__item"
}, /*#__PURE__*/_react.default.createElement("a", {
  href: "https://app.gitbook.com/o/-MVrrE7oVdN01MNzhq3-/s/-MbCUFV_nKu1Qv9gzU04/",
  target: "_blank",
  className: "bx--link bx--tile bx--tile--clickable"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "app-assetList__item-tag"
}, /*#__PURE__*/_react.default.createElement("svg", {
  focusable: "false",
  preserveAspectRatio: "xMidYMid meet",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  width: "20",
  height: "20",
  viewBox: "0 0 103.19 122.88",
  "aria-hidden": "true"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M17.16 0h82.72a3.32 3.32 0 013.31 3.31v92.32c-.15 2.58-3.48 2.64-7.08 2.48H15.94c-4.98 0-9.05 4.07-9.05 9.05s4.07 9.05 9.05 9.05h80.17v-9.63h7.08v12.24c0 2.23-1.82 4.05-4.05 4.05H16.29C7.33 122.88 0 115.55 0 106.59V17.16C0 7.72 7.72 0 17.16 0zm3.19 13.4h2.86c1.46 0 2.66.97 2.66 2.15v67.47c0 1.18-1.2 2.15-2.66 2.15h-2.86c-1.46 0-2.66-.97-2.66-2.15V15.55c.01-1.19 1.2-2.15 2.66-2.15z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})), "MIP Gitbook"), /*#__PURE__*/_react.default.createElement("div", {
  className: "app-assetList__item-label"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "app-assetList__item-title"
}, "Marketing Interaction Platform (MIP)"), /*#__PURE__*/_react.default.createElement("p", {
  className: "app-assetList__item-description"
}, "Access Gitbook to know more."), /*#__PURE__*/_react.default.createElement("span", {
  className: "app-assetList__item-link"
}, "View Gitbook", /*#__PURE__*/_react.default.createElement("svg", {
  focusable: "false",
  preserveAspectRatio: "xMidYMid meet",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"
})))))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 app-assetList__item"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "bx--link bx--tile bx--tile--clickable",
  style: {
    cursor: 'default'
  }
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "app-assetList__item-tag"
}, /*#__PURE__*/_react.default.createElement("svg", {
  focusable: "false",
  preserveAspectRatio: "xMidYMid meet",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
})), "Slack Channels"), /*#__PURE__*/_react.default.createElement("div", {
  className: "app-assetList__item-label"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "app-assetList__item-title"
}, "Need help or support?"), /*#__PURE__*/_react.default.createElement("p", {
  className: "app-assetList__item-description"
}, "Contact through Slack."), /*#__PURE__*/_react.default.createElement("span", {
  className: "app-assetList__item-link",
  style: {
    marginLeft: '2rem'
  }
}, "#e2e-ce-map-triage"), /*#__PURE__*/_react.default.createElement("span", {
  className: "app-assetList__item-link",
  style: {
    marginLeft: '2rem'
  }
}, "#e2e-ce-map-support")))))));

const Footer = () => /*#__PURE__*/_react.default.createElement("section", {
  className: "app-footer"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-footer__children-container"
}), /*#__PURE__*/_react.default.createElement("footer", {
  className: "app-footer bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-xlg-12"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-footer__links"
})), /*#__PURE__*/_react.default.createElement("a", {
  href: "https://www.ibm.com",
  className: "app-footer__ibm-logo",
  "aria-labelledby": "footer-ibm-logo footer-ibm-logo-text",
  id: "footer-ibm-logo",
  style: {
    marginLeft: '0rem'
  }
}, /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "82",
  height: "32",
  viewBox: "0 0 82 32",
  className: "ibm-logo_svg__ibm-logo__SVG ibm-logo_svg__ds-mar-b-2",
  focusable: "false",
  preserveAspectRatio: "xMidYMid meet"
}, /*#__PURE__*/_react.default.createElement("g", {
  fill: "#231F20"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M17.053 24.371h23.501c-.033.491-.483 1.831-.695 2.144H17.053v-2.144zM17.053 4.062h22.844c.196.353.641 1.688.696 2.144h-23.54V4.062zM21.29 16.247h16.302c.531.372 1.516 1.595 1.909 2.144H21.29v-2.144zM34.002 22.454h6.795c.018-.561-.203-1.714-.371-2.144h-6.424v2.144zM21.29 14.33h16.327c.531-.373 1.507-1.595 1.9-2.144H21.29v2.144zM34.002 8.124h6.769c-.002.497-.186 1.713-.353 2.144h-6.416V8.124zM17.053 28.433h21.249c-1.883 1.596-3.546 2.144-6.463 2.144H17.053v-2.144zM17.053 2.144h21.249C36.419.548 34.756 0 31.839 0H17.053v2.144zM.104 0h14.83v2.144H.104zM.104 4.062h14.83v2.144H.104zM.104 24.371h14.83v2.144H.104zM4.341 20.309h6.356v2.144H4.341zM4.341 16.247h6.356v2.144H4.341zM4.341 12.185h6.356v2.144H4.341zM4.341 8.124h6.356v2.144H4.341zM21.29 20.309h6.355v2.144H21.29zM21.29 8.124h6.355v2.144H21.29zM56.485 22.454h5.879l.746-2.145h-7.371zM55.071 18.392h8.707l.746-2.145H54.325zM.104 28.433h14.83v2.144H.104zM59.314 30.577h.221l.747-2.144h-1.715zM46.713 20.309h6.356v2.144h-6.356zM46.713 16.247h6.356v2.144h-6.356zM42.477 28.433h10.592v2.144H42.477zM42.477 24.371h10.592v2.144H42.477zM57.9 26.515h3.05l.746-2.144h-4.543zM65.781 20.309h6.355v2.144h-6.355zM65.781 16.247h6.355v2.144h-6.355zM65.78 28.433h10.594v2.144H65.78zM65.781 24.371h10.593v2.144H65.781zM57.31 8.124H46.713v2.144H58.07zM60.101 12.185l-.676 1.925-.675-1.925H46.714v2.145h6.355v-1.689l.588 1.689h11.535l.588-1.689v.012l.001-.001v1.678h6.356v-2.145zM54.434 0H42.477v2.144h12.716zM55.872 4.062H42.477v2.144h14.155zM61.539 8.124h10.598v2.144H60.779zM64.416 0h11.958v2.144H63.657zM62.977 4.062h13.397v2.144H62.218z"
})), /*#__PURE__*/_react.default.createElement("path", {
  fill: "#231F20",
  d: "M78.686 28.981c0-.922.75-1.676 1.676-1.676.923 0 1.668.753 1.668 1.676 0 .931-.745 1.684-1.668 1.684a1.68 1.68 0 01-1.676-1.684zm3.08 0c0-.816-.592-1.454-1.403-1.454-.815 0-1.411.638-1.411 1.454 0 .824.596 1.462 1.411 1.462.811 0 1.403-.638 1.403-1.462zm-.57.939h-.273l-.534-.864h-.419v.864h-.23v-1.875h.816c.494 0 .662.186.662.497 0 .368-.256.505-.587.514l.565.864zm-.878-1.046c.265 0 .653.044.653-.337 0-.292-.238-.328-.468-.328h-.533v.665h.348z"
}), /*#__PURE__*/_react.default.createElement("path", {
  fill: "none",
  d: "M79.452 27.3h2.588v3.374h-2.588z"
})))));

const QuickView = () => /*#__PURE__*/_react.default.createElement("div", {
  id: "app-hoverPanel",
  className: "app-hoverPanel",
  style: {
    display: 'none',
    top: '138.8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-lg-16"
}, /*#__PURE__*/_react.default.createElement("h2", null, "E2E Operational Dashboard"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-hoverPanel__img-wrapper"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: operationalImage,
  alt: "Report Preview Image",
  style: {
    height: '12rem'
  }
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, "Provides Insight into the real time status of ETL processes and data flowing through MIP including the Upstream & Downstream systems")), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row",
  style: {
    float: 'right',
    marginTop: '3rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-8"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "app-button app-button--primary app-button--regular app-error__button",
  onClick: () => loadDashboard('operDash', 'https://ibm.biz/E2E_Monitoring', true)
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-button__inner"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "app-button__label"
}, "View report"))))));

const QuickViewAD = () => /*#__PURE__*/_react.default.createElement("div", {
  id: "app-hoverPanelAd",
  className: "app-hoverPanel",
  style: {
    display: 'none',
    top: '305.8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-lg-16"
}, /*#__PURE__*/_react.default.createElement("h2", null, "HRM Performance Dashboard"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-hoverPanel__img-wrapper"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: hrmperfImage,
  alt: "Report Preview Image",
  style: {
    height: '12rem'
  }
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, "Visual representation of the performance of HRMs flowing through MIP including overall counts and average processing times")), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row",
  style: {
    float: 'right',
    marginTop: '3rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-8"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "app-button app-button--primary app-button--regular app-error__button",
  onClick: () => loadDashboard('addiDash', 'https://ibm.biz/HRM_Performance', true)
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-button__inner"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "app-button__label"
}, "View report"))))));

const QuickViewND = () => /*#__PURE__*/_react.default.createElement("div", {
  id: "app-hoverPanelNews",
  className: "app-hoverPanel",
  style: {
    display: 'none',
    top: '337.8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-lg-16"
}, /*#__PURE__*/_react.default.createElement("h2", null, "Newsletter Subscriptions"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-hoverPanel__img-wrapper"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: newsletterImage,
  alt: "Report Preview Image",
  style: {
    height: '12rem'
  }
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, "Gives visibility into the Subscriptions counts for each Newsletter to assess Permission vs Suppressions for IBMers & non-IBMers")), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row",
  style: {
    float: 'right',
    marginTop: '3rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-8"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "app-button app-button--primary app-button--regular app-error__button",
  onClick: () => loadDashboard('newsDash', 'https://ibm.biz/NewsletterSubs', true)
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-button__inner"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "app-button__label"
}, "View report"))))));

const QuickViewDQ = () => /*#__PURE__*/_react.default.createElement("div", {
  id: "app-hoverPanelDataQ",
  className: "app-hoverPanel",
  style: {
    display: 'none',
    top: '170.8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-lg-16"
}, /*#__PURE__*/_react.default.createElement("h2", null, "Data Quality Audit"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-hoverPanel__img-wrapper"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: comingsoon,
  alt: "Report Preview Image",
  style: {
    height: '12rem'
  }
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, "Gain insight into the volume of data flowing through each system and provide indicators / flags for any data quality issues identified")), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row",
  style: {
    float: 'right',
    marginTop: '3rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-8"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "app-button app-button--primary app-button--regular app-error__button"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-button__inner"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "app-button__label"
}, "View report"))))));

const QuickViewDF = () => /*#__PURE__*/_react.default.createElement("div", {
  id: "app-hoverPanelDataF",
  className: "app-hoverPanel",
  style: {
    display: 'none',
    top: '202.8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-lg-16"
}, /*#__PURE__*/_react.default.createElement("h2", null, "Data Funnel Dashboard"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-hoverPanel__img-wrapper"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: comingsoon,
  alt: "Report Preview Image",
  style: {
    height: '12rem'
  }
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, "provides visibility into volume of data flowing through each system & provides users a tool to identify any gaps or issues with data processing")), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row",
  style: {
    float: 'right',
    marginTop: '3rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-8"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "app-button app-button--primary app-button--regular app-error__button"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-button__inner"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "app-button__label"
}, "View report"))))));

const QuickViewDS = () => /*#__PURE__*/_react.default.createElement("div", {
  id: "app-hoverPanelDataS",
  className: "app-hoverPanel",
  style: {
    display: 'none',
    top: '369.8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-lg-16"
}, /*#__PURE__*/_react.default.createElement("h2", null, "E2E Data Story"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-hoverPanel__img-wrapper"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: comingsoon,
  alt: "Report Preview Image",
  style: {
    height: '12rem'
  }
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, "High level overview of the variety & volume of data being processed by MIP and help users better understand the scope of MIP")), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row",
  style: {
    float: 'right',
    marginTop: '3rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-8"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "app-button app-button--primary app-button--regular app-error__button"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-button__inner"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "app-button__label"
}, "View report"))))));

const QuickViewGrafana = () => /*#__PURE__*/_react.default.createElement("div", {
  id: "app-hoverPanelGrafana",
  className: "app-hoverPanel",
  style: {
    display: 'none',
    top: '266.8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-lg-16"
}, /*#__PURE__*/_react.default.createElement("h2", null, "MIP System Status"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-hoverPanel__img-wrapper"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: comingsoon,
  alt: "Report Preview Image",
  style: {
    height: '12rem'
  }
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, "Enables to query, visualize, alert on, explore metrics, logs and Provides tools to turn time-series data into insightful graphs and visualizations")), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row",
  style: {
    float: 'right',
    marginTop: '3rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-8"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "app-button app-button--primary app-button--regular app-error__button"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-button__inner"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "app-button__label"
}, "View report"))))));

const QuickViewGrafanaKub = () => /*#__PURE__*/_react.default.createElement("div", {
  id: "app-hoverPanelGrafanaKub",
  className: "app-hoverPanel",
  style: {
    display: 'none',
    top: '298.8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-lg-16"
}, /*#__PURE__*/_react.default.createElement("h2", null, "Kubernetes Cluster Resources"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-hoverPanel__img-wrapper"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: comingsoon,
  alt: "Report Preview Image",
  style: {
    height: '12rem'
  }
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, "Enables to query, visualize, alert on, explore metrics, logs and Provides tools to turn time-series data into insightful graphs and visualizations")), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row",
  style: {
    float: 'right',
    marginTop: '3rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-8"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "app-button app-button--primary app-button--regular app-error__button"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-button__inner"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "app-button__label"
}, "View report"))))));

const QuickViewGrafanaAir = () => /*#__PURE__*/_react.default.createElement("div", {
  id: "app-hoverPanelGrafanaAir",
  className: "app-hoverPanel",
  style: {
    display: 'none',
    top: '330.8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-lg-16"
}, /*#__PURE__*/_react.default.createElement("h2", null, "Airflow Dashboard"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-hoverPanel__img-wrapper"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: comingsoon,
  alt: "Report Preview Image",
  style: {
    height: '12rem'
  }
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, "Enables to query, visualize, alert on, explore metrics, logs and Provides tools to turn time-series data into insightful graphs and visualizations")), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row",
  style: {
    float: 'right',
    marginTop: '3rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-8"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "app-button app-button--primary app-button--regular app-error__button"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-button__inner"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "app-button__label"
}, "View report"))))));

const QuickViewGrafanaDb = () => /*#__PURE__*/_react.default.createElement("div", {
  id: "app-hoverPanelGrafanaDb",
  className: "app-hoverPanel",
  style: {
    display: 'none',
    top: '362.8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-lg-16"
}, /*#__PURE__*/_react.default.createElement("h2", null, "DB2 Dashboard"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-hoverPanel__img-wrapper"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: comingsoon,
  alt: "Report Preview Image",
  style: {
    height: '12rem'
  }
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, "Enables to query, visualize, alert on, explore metrics, logs and Provides tools to turn time-series data into insightful graphs and visualizations")), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row",
  style: {
    float: 'right',
    marginTop: '3rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-8"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "app-button app-button--primary app-button--regular app-error__button"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-button__inner"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "app-button__label"
}, "View report"))))));

const Overlay = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--side-nav__overlay bx--side-nav__overlay-active",
  style: {
    marginLeft: '19rem'
  },
  onClick: () => closeSideNaOverlay()
}, /*#__PURE__*/_react.default.createElement(QuickView, null), /*#__PURE__*/_react.default.createElement(QuickViewAD, null), /*#__PURE__*/_react.default.createElement(QuickViewND, null), /*#__PURE__*/_react.default.createElement(QuickViewDQ, null), /*#__PURE__*/_react.default.createElement(QuickViewDF, null), /*#__PURE__*/_react.default.createElement(QuickViewDS, null), /*#__PURE__*/_react.default.createElement(QuickViewGrafana, null), /*#__PURE__*/_react.default.createElement(QuickViewGrafanaKub, null), /*#__PURE__*/_react.default.createElement(QuickViewGrafanaAir, null), /*#__PURE__*/_react.default.createElement(QuickViewGrafanaDb, null));

const Iframe = () => /*#__PURE__*/_react.default.createElement("iframe", {
  id: "i_frame",
  src: "",
  style: {
    border: '0pt none',
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'none',
    paddingTop: '3rem'
  },
  scrolling: "no"
});

const HoverStates = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "app--side-nav__hover-toggle",
  style: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1rem'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  style: {
    marginRight: '1rem'
  }
}, "Hover states"), /*#__PURE__*/_react.default.createElement(_Toggle.default, {
  id: "hover-toggle",
  size: "sm",
  labelA: "Off",
  labelB: "On",
  defaultToggled: true
}));

const ProfileIcon = () => /*#__PURE__*/_react.default.createElement("svg", {
  focusable: "false",
  preserveAspectRatio: "xMidYMid meet",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "white",
  width: "20",
  height: "20",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M12 4A5 5 0 117 9a5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0012 2zM22 30H20V25a5 5 0 00-5-5H9a5 5 0 00-5 5v5H2V25a7 7 0 017-7h6a7 7 0 017 7zM22 4H32V6H22zM22 9H32V11H22zM22 14H29V16H22z"
}));

const App = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "container"
}, /*#__PURE__*/_react.default.createElement(_HeaderContainer.default, {
  render: ({
    isSideNavExpanded,
    onClickSideNavExpand
  }) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_UIShell.Header, {
    "aria-label": "IBM Platform Name",
    style: {
      backgroundColor: '#009d9a',
      borderBottom: '#009d9a'
    }
  }, /*#__PURE__*/_react.default.createElement(_UIShell.SkipToContent, null), /*#__PURE__*/_react.default.createElement(_UIShell.HeaderMenuButton, {
    style: {
      backgroundColor: '#009d9a'
    },
    "aria-label": "Open menu",
    onClick: onClickSideNavExpand,
    isActive: isSideNavExpanded
  }), /*#__PURE__*/_react.default.createElement(_UIShell.HeaderName, {
    href: "/mipdashboard",
    prefix: "IBM"
  }, "DIAMOND"), /*#__PURE__*/_react.default.createElement(_UIShell.HeaderGlobalBar, null, /*#__PURE__*/_react.default.createElement(_UIShell.HeaderGlobalAction, {
    style: {
      backgroundColor: '#009d9a'
    },
    "aria-label": "Header Profile Button"
  }, /*#__PURE__*/_react.default.createElement(_OverflowMenu.default, {
    renderIcon: ProfileIcon,
    flipped: true,
    style: {
      background: '#009d9a',
      outline: '#009d9a'
    }
  }, /*#__PURE__*/_react.default.createElement(_OverflowMenuItem.default, {
    itemText: "Log Out",
    href: "/mipdashboard/logout"
  })))), /*#__PURE__*/_react.default.createElement(_UIShell.SideNav, {
    "aria-label": "Side navigation",
    className: "app--side-nav app--side-nav--is-open",
    isFixedNav: true,
    expanded: isSideNavExpanded
  }, /*#__PURE__*/_react.default.createElement(Overlay, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "app--side-nav__header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "app--side-nav__header-title"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    focusable: "false",
    preserveAspectRatio: "xMidYMid meet",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "20",
    height: "20",
    viewBox: "0 0 32 32",
    "aria-hidden": "true",
    className: "app--side-nav__header-title__icon"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M15 20H17V24H15zM20 18H22V24H20zM10 14H12V24H10z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"
  })), "DASHBOARDS")), /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      color: 'aliceblue',
      width: '87%',
      maxWidth: '239px',
      marginLeft: '18px'
    }
  }), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavItems, {
    className: "app--side-nav__sections-container"
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: '1.2rem',
      marginTop: '10px'
    }
  }, "MONITORING"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavLink, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "operDash",
    onMouseOver: () => openQuickView("app-hoverPanel"),
    onClick: () => loadDashboard('operDash', 'https://ibm.biz/E2E_Monitoring', true)
  }, "E2E Operational Dashboard"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavLink, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "dqaDash",
    onMouseOver: () => openQuickView("app-hoverPanelDataQ")
  }, "Data Quality Audit"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavLink, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "dfDash",
    onMouseOver: () => openQuickView("app-hoverPanelDataF")
  }, "Data Funnel Dashboard"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenu, {
    id: "grafDashMenuId",
    title: "Grafana"
  }, /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "grafDash",
    onMouseOver: () => openQuickView("app-hoverPanelGrafana")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "app--side-nav__item-title"
  }, "MIP System Status")), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "grafDashKub",
    onMouseOver: () => openQuickView("app-hoverPanelGrafanaKub")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "app--side-nav__item-title"
  }, "Kubernetes Cluster Resources")), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "grafDashAir",
    onMouseOver: () => openQuickView("app-hoverPanelGrafanaAir")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "app--side-nav__item-title"
  }, "Airflow Dashboard")), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "grafDashDb",
    onMouseOver: () => openQuickView("app-hoverPanelGrafanaDb")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "app--side-nav__item-title"
  }, "DB2 Dashboard"))), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: '1.2rem',
      marginTop: '10px'
    }
  }, "PLATFORM METRICS"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavLink, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "addiDash",
    onMouseOver: () => openQuickView("app-hoverPanelAd"),
    onClick: () => loadDashboard('addiDash', 'https://ibm.biz/HRM_Performance', true)
  }, "HRM Performance"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavLink, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "newsDash",
    onMouseOver: () => openQuickView("app-hoverPanelNews"),
    onClick: () => loadDashboard('newsDash', 'https://ibm.biz/NewsletterSubs', true)
  }, "Newsletter Subscriptions"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavLink, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "dsDash",
    onMouseOver: () => openQuickView("app-hoverPanelDataS")
  }, "E2E Data Story")), /*#__PURE__*/_react.default.createElement(HoverStates, null))), /*#__PURE__*/_react.default.createElement(StoryContent, null), /*#__PURE__*/_react.default.createElement(Iframe, null))
}));

function loadDashboard(id, url, flag) {
  document.getElementById("i_frame").style.display = "block";
  document.getElementById("i_frame").src = url;
  hideAllContent();
  clearAllNavSelections();
  document.getElementById(id).className = "bx--side-nav__link bx--side-nav__link--current";

  if (flag) {
    closeSideNaOverlay();
  }
}

function hideAllContent() {
  document.getElementById("welcomeDiv").style.display = "none";
  document.getElementById("main-content").style.display = "none";
  closeAllQuickView();
}

function clearAllNavSelections() {
  document.getElementById("operDash").className = "bx--side-nav__link";
  document.getElementById("addiDash").className = "bx--side-nav__link";
  document.getElementById("newsDash").className = "bx--side-nav__link";
  document.getElementById("dqaDash").className = "bx--side-nav__link";
  document.getElementById("dfDash").className = "bx--side-nav__link";
  document.getElementById("grafDash").className = "bx--side-nav__link";
  document.getElementById("dsDash").className = "bx--side-nav__link";
  document.getElementById("grafDashKub").className = "bx--side-nav__link";
  document.getElementById("grafDashAir").className = "bx--side-nav__link";
  document.getElementById("grafDashDb").className = "bx--side-nav__link";
}

function openQuickView(id) {
  var timeoutId = null;
  closeAllQuickView();

  if (hoverStates()) {
    if (sideNavSubMenuStates()) {
      setReSetTopValuesForPlatformMetricsHighlights(127);
    } else {
      setReSetTopValuesForPlatformMetricsHighlights(0);
    }

    document.getElementById(id).style.display = "block";
    timeoutId = setTimeout(closeAllQuickView, 5000);

    while (timeoutId--) {
      clearTimeout(timeoutId);
    }
  }
}

function closeAllQuickView() {
  document.getElementById("app-hoverPanel").style.display = "none";
  document.getElementById("app-hoverPanelAd").style.display = "none";
  document.getElementById("app-hoverPanelNews").style.display = "none";
  document.getElementById("app-hoverPanelDataQ").style.display = "none";
  document.getElementById("app-hoverPanelDataF").style.display = "none";
  document.getElementById("app-hoverPanelDataS").style.display = "none";
  document.getElementById("app-hoverPanelGrafana").style.display = "none";
  document.getElementById("app-hoverPanelGrafanaKub").style.display = "none";
  document.getElementById("app-hoverPanelGrafanaAir").style.display = "none";
  document.getElementById("app-hoverPanelGrafanaDb").style.display = "none";
}

function hoverStates() {
  return document.getElementById("hover-toggle").checked;
}

function sideNavSubMenuStates() {
  var expandedValue = document.getElementsByClassName("bx--side-nav__submenu")[0].getAttribute("aria-expanded");
  return expandedValue == "true" ? true : false;
}

function setReSetTopValuesForPlatformMetricsHighlights(resetValue) {
  document.getElementById("app-hoverPanelAd").style.top = 305.8 + resetValue + "px";
  document.getElementById("app-hoverPanelNews").style.top = 337.8 + resetValue + "px";
  document.getElementById("app-hoverPanelDataS").style.top = 369.8 + resetValue + "px";
}

function closeSideNaOverlay() {
  closeAllQuickView();
  document.getElementsByClassName("bx--header__menu-toggle")[0].click();
}

var _default = App;
exports.default = _default;