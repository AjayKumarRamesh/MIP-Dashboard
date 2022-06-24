/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import {
	Content,
	Header,
	HeaderMenuButton,
	HeaderName,
	HeaderGlobalBar,
	HeaderGlobalAction,
	SkipToContent,
	SideNav,
	SideNavItems,
	SideNavMenu,
	SideNavMenuItem,
	SideNavLink
} from "carbon-components-react/lib/components/UIShell";

import Toggle from 'carbon-components-react/lib/components/Toggle';
import OverflowMenu from 'carbon-components-react/lib/components/OverflowMenu';
import OverflowMenuItem from 'carbon-components-react/lib/components/OverflowMenuItem';

import "./styles.css";
import operationalImage from "./e2e_operational_dashboard_preview.png";
import newsletterImage from "./newletter_subs_preview.png";
import comingsoon from "./comingsoon.jpg";

const StoryContent = () => {
	const content = (
		<div id="divId" className="bx--grid">
			<div className="bx--row">
				<section style={{ marginLeft: "1.5%", padding: "2rem" }}>
					<div style={{ lineHeight: "30px", display: 'flex' }}>
						<hr style={{ color: 'aliceblue' }} />
						<div className="bx--row" style={{ marginLeft: "1rem" }}>
							<div className="bx--col-lg-1">
								<div className="app-hoverPanel__img-wrapper">
									<img src={operationalImage} alt="Report Preview Image" style={{ width: '7rem', height: '7rem' }} />
								</div>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								<h2 style={{ fontWeight: "800", marginBottom: "30px", fontSize: "20px" }}>E2E Operational Dashboard</h2>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								Provides Insight into the real time status of ETL processes and data flowing through MIP including the Upstream & Downstream systems.
							</div>
						</div>
						<hr style={{ color: 'aliceblue' }} />
						<div className="bx--row" style={{ marginLeft: "1rem" }}>
							<div className="bx--col-lg-1">
								<div className="app-hoverPanel__img-wrapper">
									<img src={newsletterImage} alt="Report Preview Image" style={{ width: '7rem', height: '7rem' }} />
								</div>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								<h2 style={{ fontWeight: "800", marginBottom: "30px", fontSize: "20px" }}>Newsletter Subscriptions</h2>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								Gives visibility into the Subscriptions counts for each Newsletter to assess Permission vs Suppressions for IBMers & non-IBMers.
							</div>
						</div>
						<hr style={{ color: 'aliceblue' }} />
						<div className="bx--row" style={{ marginLeft: "1rem" }}>
							<div className="bx--col-lg-1">
								<div className="app-hoverPanel__img-wrapper">
									<img src={comingsoon} alt="Report Preview Image" style={{ width: '7rem', height: '7rem' }} />
								</div>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								<h2 style={{ fontWeight: "800", marginBottom: "30px", fontSize: "20px" }}>HRM Performance Dashboard</h2>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								Visual representation of the performance of HRMs flowing through MIP including overall counts and average processing times.
							</div>
						</div>
						<hr style={{ color: 'aliceblue' }} />
						<div className="bx--row" style={{ marginLeft: "1rem" }}>
							<div className="bx--col-lg-1">
								<div className="app-hoverPanel__img-wrapper">
									<img src={comingsoon} alt="Report Preview Image" style={{ width: '7rem', height: '7rem' }} />
								</div>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								<h2 style={{ fontWeight: "800", marginBottom: "30px", fontSize: "20px" }}>Data Quality Audit</h2>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								Gain insight into the volume of data flowing through each system and provide indicators / flags for any data quality issues identified.
							</div>
						</div>
						<hr style={{ color: 'aliceblue' }} />
						<div className="bx--row" style={{ marginLeft: "1rem" }}>
							<div className="bx--col-lg-1">
								<div className="app-hoverPanel__img-wrapper">
									<img src={comingsoon} alt="Report Preview Image" style={{ width: '7rem', height: '7rem' }} />
								</div>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								<h2 style={{ fontWeight: "800", marginBottom: "30px", fontSize: "20px" }}>Data Funnel Dashboard</h2>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								provides visibility into volume of data flowing through each system & provides users a tool to identify any gaps or issues with data processing.
							</div>
						</div>
						<hr style={{ color: 'aliceblue' }} />
						<div className="bx--row" style={{ marginLeft: "1rem" }}>
							<div className="bx--col-lg-1">
								<div className="app-hoverPanel__img-wrapper">
									<img src={comingsoon} alt="Report Preview Image" style={{ width: '7rem', height: '7rem' }} />
								</div>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								<h2 style={{ fontWeight: "800", marginBottom: "30px", fontSize: "20px" }}>E2E Data Story</h2>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								High level overview of the variety & volume of data being processed by MIP and help users better understand the scope of MIP.
							</div>
						</div>
						<hr style={{ color: 'aliceblue' }} />
						<div className="bx--row" style={{ marginLeft: "1rem" }}>
							<div className="bx--col-lg-1">
								<div className="app-hoverPanel__img-wrapper">
									<img src={comingsoon} alt="Report Preview Image" style={{ width: '7rem', height: '7rem' }} />
								</div>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								<h2 style={{ fontWeight: "800", marginBottom: "30px", fontSize: "20px" }}>Grafana Dashboard</h2>
							</div>
							<div className="bx--col-lg-11" style={{ fontStyle: 'italic' }}>
								Enables to query, visualize, alert on, explore metrics, logs and Provides tools to turn time-series data into insightful graphs and visualizations.
							</div>
						</div>
						<hr style={{ color: 'aliceblue' }} />
					</div>
				</section>
			</div>
		</div>
	);

	return <Content id="main-content" style={{ backgroundColor: 'lightgray', padding: '0rem' }}>{content}</Content>;
};

const QuickView = () => (
	<div id="app-hoverPanel" className="app-hoverPanel" style={{ display: 'none', top: '138.8px' }}>
		<div className="bx--row">
			<div className="bx--col-lg-16"><h2>E2E Operational Dashboard</h2></div>
		</div>
		<div className="bx--row">
			<div className="bx--col-md-4">
				<div className="app-hoverPanel__img-wrapper">
					<img src={operationalImage} alt="Report Preview Image" style={{ height: '12rem' }} />
				</div>
			</div>
			<div className="bx--col-md-4">Provides Insight into the real time status of ETL processes and data flowing through MIP including the Upstream & Downstream systems</div>
		</div>
		<div className="bx--row" style={{ float: 'right', marginTop: '3rem' }}>
			<div className="bx--col-md-8">
				<a className="app-button app-button--primary app-button--regular app-error__button" onClick={() => loadDashboard('operDash', 'https://ibm.biz/E2E_Monitoring')}>
					<div className="app-button__inner"><span className="app-button__label">View report</span></div>
				</a>
			</div>
		</div>
	</div>
);

const QuickViewAD = () => (
	<div id="app-hoverPanelAd" className="app-hoverPanel" style={{ display: 'none', top: '305.8px' }}>
		<div className="bx--row">
			<div className="bx--col-lg-16"><h2>HRM Performance Dashboard</h2></div>
		</div>
		<div className="bx--row">
			<div className="bx--col-md-4">
				<div className="app-hoverPanel__img-wrapper">
					<img src={comingsoon} alt="Report Preview Image" style={{ height: '12rem'  }} />
				</div>
			</div>
			<div className="bx--col-md-4">Visual representation of the performance of HRMs flowing through MIP including overall counts and average processing times</div>
		</div>
		<div className="bx--row" style={{ float: 'right', marginTop: '3rem' }}>
			<div className="bx--col-md-8">
				<a className="app-button app-button--primary app-button--regular app-error__button">
					<div className="app-button__inner"><span className="app-button__label">View report</span></div>
				</a>
			</div>
		</div>
	</div>
);

const QuickViewND = () => (
	<div id="app-hoverPanelNews" className="app-hoverPanel" style={{ display: 'none', top: '337.8px' }}>
		<div className="bx--row">
			<div className="bx--col-lg-16"><h2>Newsletter Subscriptions</h2></div>
		</div>
		<div className="bx--row">
			<div className="bx--col-md-4">
				<div className="app-hoverPanel__img-wrapper">
					<img src={newsletterImage} alt="Report Preview Image" style={{ height: '12rem' }} />
				</div>
			</div>
			<div className="bx--col-md-4">Gives visibility into the Subscriptions counts for each Newsletter to assess Permission vs Suppressions for IBMers & non-IBMers</div>
		</div>
		<div className="bx--row" style={{ float: 'right', marginTop: '3rem' }}>
			<div className="bx--col-md-8">
				<a className="app-button app-button--primary app-button--regular app-error__button">
					<div className="app-button__inner"><span className="app-button__label">View report</span></div>
				</a>
			</div>
		</div>
	</div>
);

const QuickViewDQ = () => (
	<div id="app-hoverPanelDataQ" className="app-hoverPanel" style={{ display: 'none', top: '170.8px' }}>
		<div className="bx--row">
			<div className="bx--col-lg-16"><h2>Data Quality Audit</h2></div>
		</div>
		<div className="bx--row">
			<div className="bx--col-md-4">
				<div className="app-hoverPanel__img-wrapper">
					<img src={comingsoon} alt="Report Preview Image" style={{ height: '12rem' }} />
				</div>
			</div>
			<div className="bx--col-md-4">Gain insight into the volume of data flowing through each system and provide indicators / flags for any data quality issues identified</div>
		</div>
		<div className="bx--row" style={{ float: 'right', marginTop: '3rem' }}>
			<div className="bx--col-md-8">
				<a className="app-button app-button--primary app-button--regular app-error__button">
					<div className="app-button__inner"><span className="app-button__label">View report</span></div>
				</a>
			</div>
		</div>
	</div>
);

const QuickViewDF = () => (
	<div id="app-hoverPanelDataF" className="app-hoverPanel" style={{ display: 'none', top: '202.8px' }}>
		<div className="bx--row">
			<div className="bx--col-lg-16"><h2>Data Funnel Dashboard</h2></div>
		</div>
		<div className="bx--row">
			<div className="bx--col-md-4">
				<div className="app-hoverPanel__img-wrapper">
					<img src={comingsoon} alt="Report Preview Image" style={{ height: '12rem' }} />
				</div>
			</div>
			<div className="bx--col-md-4">provides visibility into volume of data flowing through each system & provides users a tool to identify any gaps or issues with data processing</div>
		</div>
		<div className="bx--row" style={{ float: 'right', marginTop: '3rem' }}>
			<div className="bx--col-md-8">
				<a className="app-button app-button--primary app-button--regular app-error__button">
					<div className="app-button__inner"><span className="app-button__label">View report</span></div>
				</a>
			</div>
		</div>
	</div>
);

const QuickViewDS = () => (
	<div id="app-hoverPanelDataS" className="app-hoverPanel" style={{ display: 'none', top: '369.8px' }}>
		<div className="bx--row">
			<div className="bx--col-lg-16"><h2>E2E Data Story</h2></div>
		</div>
		<div className="bx--row">
			<div className="bx--col-md-4">
				<div className="app-hoverPanel__img-wrapper">
					<img src={comingsoon} alt="Report Preview Image" style={{ height: '12rem' }} />
				</div>
			</div>
			<div className="bx--col-md-4">High level overview of the variety & volume of data being processed by MIP and help users better understand the scope of MIP</div>
		</div>
		<div className="bx--row" style={{ float: 'right', marginTop: '3rem' }}>
			<div className="bx--col-md-8">
				<a className="app-button app-button--primary app-button--regular app-error__button">
					<div className="app-button__inner"><span className="app-button__label">View report</span></div>
				</a>
			</div>
		</div>
	</div>
);

const QuickViewGrafana = () => (
	<div id="app-hoverPanelGrafana" className="app-hoverPanel" style={{ display: 'none', top: '266.8px' }}>
		<div className="bx--row">
			<div className="bx--col-lg-16"><h2>Grafana Dashboard</h2></div>
		</div>
		<div className="bx--row">
			<div className="bx--col-md-4">
				<div className="app-hoverPanel__img-wrapper">
					<img src={comingsoon} alt="Report Preview Image" style={{ height: '12rem' }} />
				</div>
			</div>
			<div className="bx--col-md-4">Enables to query, visualize, alert on, explore metrics, logs and Provides tools to turn time-series data into insightful graphs and visualizations</div>
		</div>
		<div className="bx--row" style={{ float: 'right', marginTop: '3rem' }}>
			<div className="bx--col-md-8">
				<a className="app-button app-button--primary app-button--regular app-error__button">
					<div className="app-button__inner"><span className="app-button__label">View report</span></div>
				</a>
			</div>
		</div>
	</div>
);

const Iframe = () => (
	<iframe id="i_frame" src="" style={{ border: '0pt none', width: '100%', height: '100%', position: 'absolute', display: 'none', paddingTop: '3rem' }} scrolling="no"></iframe>
);

const HoverStates = () => (
	<div className="app--side-nav__hover-toggle" style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
		<div style={{ marginRight: '1rem' }} >Hover states</div>
		<Toggle id="hover-toggle" size="sm" labelA="Off" labelB="On" defaultToggled />
	</div>
);

const ProfileIcon = () => (
	<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="white" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
		<path d="M12 4A5 5 0 117 9a5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0012 2zM22 30H20V25a5 5 0 00-5-5H9a5 5 0 00-5 5v5H2V25a7 7 0 017-7h6a7 7 0 017 7zM22 4H32V6H22zM22 9H32V11H22zM22 14H29V16H22z"></path>
	</svg>
);

const App = () => (
	<div className="container">
		<HeaderContainer
			render={({ isSideNavExpanded, onClickSideNavExpand }) => (
				<>
					<Header aria-label="IBM Platform Name" style={{ backgroundColor: '#009d9a', borderBottom: '#009d9a' }}>
						<SkipToContent />
						<HeaderMenuButton style={{ backgroundColor: '#009d9a' }}
							aria-label="Open menu"
							onClick={onClickSideNavExpand}
							isActive={isSideNavExpanded}
						/>
						<HeaderName href="/mipdashboard" prefix="IBM">
							DIAMOND
						</HeaderName>
						<HeaderGlobalBar>
							<HeaderGlobalAction style={{ backgroundColor: '#009d9a' }} aria-label="Header Profile Button">
								<OverflowMenu renderIcon={ProfileIcon} flipped style={{ background: '#009d9a', outline: '#009d9a' }}>
									<OverflowMenuItem itemText="Log Out" href="/mipdashboard/logout" />
								</OverflowMenu>
							</HeaderGlobalAction>
						</HeaderGlobalBar>
						<SideNav aria-label="Side navigation" className="app--side-nav app--side-nav--is-open" isFixedNav={true} expanded={isSideNavExpanded}>
							<div className="app--side-nav__header">
								<div className="app--side-nav__header-title">
									<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true" className="app--side-nav__header-title__icon">
										<path d="M15 20H17V24H15zM20 18H22V24H20zM10 14H12V24H10z"></path>
										<path d="M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"></path>
									</svg>DASHBOARDS
								</div>
							</div>
							<hr style={{ color: 'aliceblue', width: '87%' }} />
							<SideNavItems className="app--side-nav__sections-container">
								<p style={{ fontSize: '1.2rem', marginTop: '10px' }}>MONITORING</p>
								<SideNavLink className="app--side-nav__menu-item" style={{ cursor: 'pointer' }} id="operDash"
									onMouseOver={() => openQuickView("app-hoverPanel")}
									onClick={() => loadDashboard('operDash', 'https://ibm.biz/E2E_Monitoring')}>
									E2E Operational Dashboard
								</SideNavLink>
								<SideNavLink className="app--side-nav__menu-item" style={{ cursor: 'pointer' }} id="dqaDash"
									onMouseOver={() => openQuickView("app-hoverPanelDataQ")}>
									Data Quality Audit
								</SideNavLink>
								<SideNavLink className="app--side-nav__menu-item" style={{ cursor: 'pointer' }} id="dfDash"
									onMouseOver={() => openQuickView("app-hoverPanelDataF")}>
									Data Funnel Dashboard
								</SideNavLink>
								<SideNavMenu id="grafDashMenuId" title="Grafana">
									<SideNavMenuItem className="app--side-nav__menu-item" style={{ cursor: 'pointer' }} id="grafDash"
										onMouseOver={() => openQuickView("app-hoverPanelGrafana")}>
										<span className="app--side-nav__item-title">Grafana Dashboard</span>
									</SideNavMenuItem>
								</SideNavMenu>
								<p style={{ fontSize: '1.2rem', marginTop: '10px' }}>PLATFORM METRICS (STATS)</p>
								<SideNavLink className="app--side-nav__menu-item" style={{ cursor: 'pointer' }} id="addiDash"
									onMouseOver={() => openQuickView("app-hoverPanelAd")}>
									HRM Performance
								</SideNavLink>
								<SideNavLink className="app--side-nav__menu-item" style={{ cursor: 'pointer' }} id="newsDash"
									onMouseOver={() => openQuickView("app-hoverPanelNews")}>
									Newsletter Subscriptions
								</SideNavLink>
								<SideNavLink className="app--side-nav__menu-item" style={{ cursor: 'pointer' }} id="dsDash"
									onMouseOver={() => openQuickView("app-hoverPanelDataS")}>
									E2E Data Story
								</SideNavLink>
							</SideNavItems>
							<HoverStates />
						</SideNav>
					</Header>
					<StoryContent />
					<QuickView />
					<QuickViewAD />
					<QuickViewND />
					<QuickViewDQ />
					<QuickViewDF />
					<QuickViewDS />
					<QuickViewGrafana />
					<Iframe />
				</>
			)}
		/>
	</div>
);

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
	return (expandedValue == "true") ? true : false;
}

function setReSetTopValuesForPlatformMetricsHighlights(resetValue) {
	document.getElementById("app-hoverPanelAd").style.top = 305.8 + resetValue + "px";
	document.getElementById("app-hoverPanelNews").style.top = 337.8 + resetValue + "px";
	document.getElementById("app-hoverPanelDataS").style.top = 369.8 + resetValue + "px";
}

export default App;
