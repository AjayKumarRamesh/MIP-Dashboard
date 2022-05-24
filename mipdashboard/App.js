"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/search/20"));

var _2 = _interopRequireDefault(require("@carbon/icons-react/lib/notification/20"));

var _3 = _interopRequireDefault(require("@carbon/icons-react/lib/app-switcher/20"));

var _HeaderContainer = _interopRequireDefault(require("carbon-components-react/lib/components/UIShell/HeaderContainer"));

var _UIShell = require("carbon-components-react/lib/components/UIShell");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
const StoryContent = () => {
  const content = /*#__PURE__*/_react.default.createElement("div", {
    id: "divId",
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontWeight: "800",
      margin: "30px 0",
      fontSize: "20px"
    }
  }, "Purpose and function"), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      lineHeight: "20px"
    }
  }, "The shell is perhaps the most crucial piece of any UI built with Carbon. It contains the shared navigation framework for the entire design system and ties the products in IBM\u2019s portfolio together in a cohesive and elegant way. The shell is the home of the topmost navigation, where users can quickly and dependably gain their bearings and move between pages.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "The shell was designed with maximum flexibility built in, to serve the needs of a broad range of products and users. Adopting the shell ensures compliance with IBM design standards, simplifies development efforts, and provides great user experiences. All IBM products built with Carbon are required to use the shell\u2019s header.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "To better understand the purpose and function of the UI shell, consider the \u201Cshell\u201D of MacOS, which contains the Apple menu, top-level navigation, and universal, OS-level controls at the top of the screen, as well as a universal dock along the bottom or side of the screen. The Carbon UI shell is roughly analogous in function to these parts of the Mac UI. For example, the app switcher portion of the shell can be compared to the dock in MacOS."), /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontWeight: "800",
      margin: "30px 0",
      fontSize: "20px"
    }
  }, "Header responsive behavior"), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      lineHeight: "20px"
    }
  }, "As a header scales down to fit smaller screen sizes, headers with persistent side nav menus should have the side nav collapse into \u201Chamburger\u201D menu. See the example to better understand responsive behavior of the header."), /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontWeight: "800",
      margin: "30px 0",
      fontSize: "20px"
    }
  }, "Secondary navigation"), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      lineHeight: "20px"
    }
  }, "The side-nav contains secondary navigation and fits below the header. It can be configured to be either fixed-width or flexible, with only one level of nested items allowed. Both links and category lists can be used in the side-nav and may be mixed together. There are several configurations of the side-nav, but only one configuration should be used per product section. If tabs are needed on a page when using a side-nav, then the tabs are secondary in hierarchy to the side-nav."))));

  return /*#__PURE__*/_react.default.createElement(_UIShell.Content, {
    id: "main-content"
  }, content);
};

const Fade16 = () => /*#__PURE__*/_react.default.createElement("svg", {
  width: "16",
  height: "16",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32",
  "aria-hidden": "true"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z"
}));

const App = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "container"
}, /*#__PURE__*/_react.default.createElement(_HeaderContainer.default, {
  render: ({
    isSideNavExpanded,
    onClickSideNavExpand
  }) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_UIShell.Header, {
    "aria-label": "IBM Platform Name"
  }, /*#__PURE__*/_react.default.createElement(_UIShell.SkipToContent, null), /*#__PURE__*/_react.default.createElement(_UIShell.HeaderMenuButton, {
    "aria-label": "Open menu",
    onClick: onClickSideNavExpand,
    isActive: isSideNavExpanded
  }), /*#__PURE__*/_react.default.createElement(_UIShell.HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "DIAMOND"), /*#__PURE__*/_react.default.createElement(_UIShell.HeaderGlobalBar, null, /*#__PURE__*/_react.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "Search",
    onClick: () => {}
  }, /*#__PURE__*/_react.default.createElement(_.default, null)), /*#__PURE__*/_react.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "Notifications",
    onClick: () => {}
  }, /*#__PURE__*/_react.default.createElement(_2.default, null)), /*#__PURE__*/_react.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "App Switcher",
    onClick: () => {}
  }, /*#__PURE__*/_react.default.createElement(_3.default, null))), /*#__PURE__*/_react.default.createElement(_UIShell.SideNav, {
    "aria-label": "Side navigation",
    isFixedNav: true,
    expanded: isSideNavExpanded
  }, /*#__PURE__*/_react.default.createElement(_UIShell.SideNavItems, null, /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenu, {
    renderIcon: Fade16,
    title: "Dundas"
  }, /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    id: "operDash",
    onClick: () => loadDashboard('operDash', 'https://ibm.biz/E2E_Monitoring')
  }, "Operational Dashboard"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    href: "#"
  }, "Additional Dashboard"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    href: "#"
  }, "Other Dashboard")), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenu, {
    renderIcon: Fade16,
    title: "Grafana"
  }, /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    href: "#"
  }, "Operational Dashboard"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    href: "#"
  }, "Additional Dashboard"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    href: "#"
  }, "Other Dashboard")), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavLink, {
    renderIcon: Fade16,
    href: "#"
  }, "Some Other Dashboard"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavLink, {
    renderIcon: Fade16,
    href: "#"
  }, "Some Other Dashboard 2")))), /*#__PURE__*/_react.default.createElement(StoryContent, null))
}));

function loadDashboard(id, url) {
  document.getElementById("divId").innerHTML = '<iframe id="i_frame" src="https://ibm.biz/E2E_Monitoring" style="border: 0pt none; width: 100%; height: 100%;" scrolling="no"></iframe>';
  document.getElementById("divId").style.position = 'absolute';
  document.getElementById("divId").style.width = '100%';
  document.getElementById("divId").style.height = '100%';
  document.getElementById(id).ariaCurrent = 'page';
}

var _default = App;
exports.default = _default;