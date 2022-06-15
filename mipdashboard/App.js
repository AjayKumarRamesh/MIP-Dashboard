"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

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
const image = {
  pathname: "\\src\\views\\operdashimg.jpg",
  src: "\\src\\views\\operdashimg.jpg",
  type: "jpeg",
  width: 1196,
  height: 959,
  aspectRatio: 1.247,
  heightToWidthRatio: 0.802
};

const StoryContent = () => {
  const content = /*#__PURE__*/_react.default.createElement("div", {
    id: "divId",
    className: "bx--grid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--row"
  }, /*#__PURE__*/_react.default.createElement("section", {
    style: {
      marginLeft: "1.5%",
      padding: "2rem"
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontWeight: "800",
      marginBottom: "30px",
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
    id: "main-content",
    style: {
      backgroundColor: 'lightgray',
      padding: '0rem'
    }
  }, content);
};

const QuickView = () => /*#__PURE__*/_react.default.createElement("div", {
  id: "app-hoverPanel",
  className: "app-hoverPanel",
  style: {
    display: 'none',
    top: '153.8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-lg-16"
}, /*#__PURE__*/_react.default.createElement("h2", null, "Operational Dashboard"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-hoverPanel__img-wrapper"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: image,
  alt: "Report Preview Image"
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, "Provides visibility into operational and monitoring performance.")), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-5"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "related-reports-label"
}, "Related reports:"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer"
}, "Paid Media")))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-3"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "app-button app-button--primary app-button--regular app-error__button",
  onClick: () => loadDashboard('operDash', 'https://ibm.biz/E2E_Monitoring')
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
    top: '186.8px'
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-lg-16"
}, /*#__PURE__*/_react.default.createElement("h2", null, "Additional Dashboard"))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-hoverPanel__img-wrapper"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: image,
  alt: "Report Preview Image"
}))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-4"
}, "Provides visibility into additional and monitoring performance.")), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-5"
}, /*#__PURE__*/_react.default.createElement("p", {
  className: "related-reports-label"
}, "Related reports:"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer"
}, "Paid Media")))), /*#__PURE__*/_react.default.createElement("div", {
  className: "bx--col-md-3"
}, /*#__PURE__*/_react.default.createElement("a", {
  className: "app-button app-button--primary app-button--regular app-error__button",
  onClick: () => loadDashboard('addiDash', 'https://ibm.biz/E2E_Monitoring')
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "app-button__inner"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "app-button__label"
}, "View report"))))));

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

const App = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "container"
}, /*#__PURE__*/_react.default.createElement(_HeaderContainer.default, {
  render: ({
    isSideNavExpanded,
    onClickSideNavExpand
  }) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_UIShell.Header, {
    "aria-label": "IBM Platform Name",
    style: {
      backgroundColor: '#009d9a'
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
  }, /*#__PURE__*/_react.default.createElement("svg", {
    focusable: "false",
    preserveAspectRatio: "xMidYMid meet",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "20",
    height: "20",
    viewBox: "0 0 32 32",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 4A5 5 0 117 9a5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0012 2zM22 30H20V25a5 5 0 00-5-5H9a5 5 0 00-5 5v5H2V25a7 7 0 017-7h6a7 7 0 017 7zM22 4H32V6H22zM22 9H32V11H22zM22 14H29V16H22z"
  })))), /*#__PURE__*/_react.default.createElement(_UIShell.SideNav, {
    "aria-label": "Side navigation",
    className: "app--side-nav app--side-nav--is-open",
    isFixedNav: true,
    expanded: isSideNavExpanded
  }, /*#__PURE__*/_react.default.createElement("div", {
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
  })), "reports")), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavItems, {
    className: "app--side-nav__sections-container"
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: '1.2rem',
      marginTop: '10px'
    }
  }, "MONITORING"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenu, {
    className: "app--side-nav__menu-item-btn",
    title: "Dundas"
  }, /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "operDash",
    onMouseOut: () => closeQuickView(),
    onMouseOver: () => openQuickView("app-hoverPanel"),
    onClick: () => loadDashboard('operDash', 'https://ibm.biz/E2E_Monitoring')
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "app--side-nav__item-title"
  }, "Operational Dashboard")), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "addiDash",
    onMouseOut: () => closeQuickView(),
    onMouseOver: () => openQuickView("app-hoverPanelAd"),
    onClick: () => loadDashboard('addiDash', 'https://ibm.biz/E2E_Monitoring')
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "app--side-nav__item-title"
  }, "Additinal Dashboard"))), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: '1.2rem',
      marginTop: '10px'
    }
  }, "DATABASE"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenu, {
    className: "app--side-nav__menu-item-btn",
    title: "Cloud"
  }, /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "dbDash"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "app--side-nav__item-title"
  }, "Cloud DB Dashboard"))), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: '1.2rem',
      marginTop: '10px'
    }
  }, "GRAFANA"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenu, {
    className: "app--side-nav__menu-item-btn",
    title: "Coming Soon"
  }, /*#__PURE__*/_react.default.createElement(_UIShell.SideNavMenuItem, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "grafDash"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "app--side-nav__item-title"
  }, "Grafana Dashboard")))))), /*#__PURE__*/_react.default.createElement(StoryContent, null), /*#__PURE__*/_react.default.createElement(QuickView, null), /*#__PURE__*/_react.default.createElement(QuickViewAD, null), /*#__PURE__*/_react.default.createElement(Iframe, null))
}));

function loadDashboard(id, url) {
  document.getElementById("i_frame").style.display = "block";
  document.getElementById("i_frame").src = url;
  hideAllContent();
  clearAllNavSelections();
  document.getElementById(id).className = "bx--side-nav__link bx--side-nav__link--current";
}

function hideAllContent() {
  document.getElementById("welcomeDiv").style.display = "none";
  document.getElementById("main-content").style.display = "none";
  document.getElementById("app-hoverPanel").style.display = "none";
  document.getElementById("app-hoverPanelAd").style.display = "none";
}

function clearAllNavSelections() {
  document.getElementById("operDash").className = "bx--side-nav__link";
  document.getElementById("addiDash").className = "bx--side-nav__link";
}

function openQuickView(id) {
  closeAllQuickView();
  document.getElementById(id).style.display = "block";
}

function closeAllQuickView() {
  document.getElementById("app-hoverPanel").style.display = "none";
  document.getElementById("app-hoverPanelAd").style.display = "none";
}

function closeQuickView() {
  var hovPanOper = document.getElementById("app-hoverPanel").style.display;
  var hovPanAddi = document.getElementById("app-hoverPanelAd").style.display;

  if (hovPanOper == "block" || hovPanAddi == "block") {
    setTimeout(closeAllQuickView, 5000);
  }
}

var _default = App;
exports.default = _default;