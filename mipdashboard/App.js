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
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--row"
  }, /*#__PURE__*/_react.default.createElement("section", {
    style: {
      marginLeft: "1.5%",
      padding: "2rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      lineHeight: "30px",
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      color: 'aliceblue'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--row",
    style: {
      marginLeft: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "app-hoverPanel__img-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: operationalImage,
    alt: "Report Preview Image",
    style: {
      width: '7rem',
      height: '7rem'
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontWeight: "800",
      marginBottom: "30px",
      fontSize: "20px"
    }
  }, "E2E Operational Dashboard")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, "Provides Insight into the real time status of ETL processes and data flowing through MIP including the Upstream & Downstream systems.")), /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      color: 'aliceblue'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--row",
    style: {
      marginLeft: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "app-hoverPanel__img-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: newsletterImage,
    alt: "Report Preview Image",
    style: {
      width: '7rem',
      height: '7rem'
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontWeight: "800",
      marginBottom: "30px",
      fontSize: "20px"
    }
  }, "Newsletter Subscriptions")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, "Gives visibility into the Subscriptions counts for each Newsletter to assess Permission vs Suppressions for IBMers & non-IBMers.")), /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      color: 'aliceblue'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--row",
    style: {
      marginLeft: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "app-hoverPanel__img-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: comingsoon,
    alt: "Report Preview Image",
    style: {
      width: '7rem',
      height: '7rem'
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontWeight: "800",
      marginBottom: "30px",
      fontSize: "20px"
    }
  }, "HRM Performance Dashboard")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, "Visual representation of the performance of HRMs flowing through MIP including overall counts and average processing times.")), /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      color: 'aliceblue'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--row",
    style: {
      marginLeft: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "app-hoverPanel__img-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: comingsoon,
    alt: "Report Preview Image",
    style: {
      width: '7rem',
      height: '7rem'
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontWeight: "800",
      marginBottom: "30px",
      fontSize: "20px"
    }
  }, "Data Quality Audit")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, "Gain insight into the volume of data flowing through each system and provide indicators / flags for any data quality issues identified.")), /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      color: 'aliceblue'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--row",
    style: {
      marginLeft: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "app-hoverPanel__img-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: comingsoon,
    alt: "Report Preview Image",
    style: {
      width: '7rem',
      height: '7rem'
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontWeight: "800",
      marginBottom: "30px",
      fontSize: "20px"
    }
  }, "Data Funnel Dashboard")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, "provides visibility into volume of data flowing through each system & provides users a tool to identify any gaps or issues with data processing.")), /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      color: 'aliceblue'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--row",
    style: {
      marginLeft: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "app-hoverPanel__img-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: comingsoon,
    alt: "Report Preview Image",
    style: {
      width: '7rem',
      height: '7rem'
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontWeight: "800",
      marginBottom: "30px",
      fontSize: "20px"
    }
  }, "E2E Data Story")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, "High level overview of the variety & volume of data being processed by MIP and help users better understand the scope of MIP.")), /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      color: 'aliceblue'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--row",
    style: {
      marginLeft: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "app-hoverPanel__img-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: comingsoon,
    alt: "Report Preview Image",
    style: {
      width: '7rem',
      height: '7rem'
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontWeight: "800",
      marginBottom: "30px",
      fontSize: "20px"
    }
  }, "Grafana Dashboard")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bx--col-lg-11",
    style: {
      fontStyle: 'italic'
    }
  }, "Enables to query, visualize, alert on, explore metrics, logs and Provides tools to turn time-series data into insightful graphs and visualizations.")), /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      color: 'aliceblue'
    }
  })))));

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
  src: comingsoon,
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
  className: "app-button app-button--primary app-button--regular app-error__button"
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
  className: "app-button app-button--primary app-button--regular app-error__button"
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
}, /*#__PURE__*/_react.default.createElement("h2", null, "Grafana Dashboard"))), /*#__PURE__*/_react.default.createElement("div", {
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
  })), "DASHBOARDS")), /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      color: 'aliceblue',
      width: '87%'
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
    onClick: () => loadDashboard('operDash', 'https://ibm.biz/E2E_Monitoring')
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
  }, "Grafana Dashboard"))), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      fontSize: '1.2rem',
      marginTop: '10px'
    }
  }, "PLATFORM METRICS (STATS)"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavLink, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "addiDash",
    onMouseOver: () => openQuickView("app-hoverPanelAd")
  }, "HRM Performance"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavLink, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "newsDash",
    onMouseOver: () => openQuickView("app-hoverPanelNews")
  }, "Newsletter Subscriptions"), /*#__PURE__*/_react.default.createElement(_UIShell.SideNavLink, {
    className: "app--side-nav__menu-item",
    style: {
      cursor: 'pointer'
    },
    id: "dsDash",
    onMouseOver: () => openQuickView("app-hoverPanelDataS")
  }, "E2E Data Story")), /*#__PURE__*/_react.default.createElement(HoverStates, null))), /*#__PURE__*/_react.default.createElement(StoryContent, null), /*#__PURE__*/_react.default.createElement(QuickView, null), /*#__PURE__*/_react.default.createElement(QuickViewAD, null), /*#__PURE__*/_react.default.createElement(QuickViewND, null), /*#__PURE__*/_react.default.createElement(QuickViewDQ, null), /*#__PURE__*/_react.default.createElement(QuickViewDF, null), /*#__PURE__*/_react.default.createElement(QuickViewDS, null), /*#__PURE__*/_react.default.createElement(QuickViewGrafana, null), /*#__PURE__*/_react.default.createElement(Iframe, null))
}));

function loadDashboard(id, url) {
  document.getElementById("i_frame").style.display = "block";
  document.getElementById("i_frame").src = url;
  hideAllContent();
  clearAllNavSelections();
  document.getElementById(id).className = "bx--side-nav__link bx--side-nav__link--current";
  document.getElementsByClassName("bx--header__menu-toggle")[0].click();
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
}

function openQuickView(id) {
  var timeoutId = null;
  closeAllQuickView();

  if (hoverStates()) {
    if (sideNavSubMenuStates()) {
      setReSetTopValuesForPlatformMetricsHighlights(32);
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

var _default = App;
exports.default = _default;