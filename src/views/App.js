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
	SideNavMenuItem
} from "carbon-components-react/lib/components/UIShell";

import "./styles.css";

import image from "./operdashimg.jpg";

const StoryContent = () => {
	const content = (
		<div id="divId" className="bx--grid" style={{ maxWidth: '93vw' }}>
			<div className="bx--row">
				<section>
					<h2
						style={{
							fontWeight: "800",
							marginBottom: "30px",
							fontSize: "20px"
						}}
					>
						Purpose and function
					</h2>
					<p style={{ lineHeight: "20px" }}>
						The shell is perhaps the most crucial piece of any UI built with
						Carbon. It contains the shared navigation framework for the entire
						design system and ties the products in IBM’s portfolio together in a
						cohesive and elegant way. The shell is the home of the topmost
						navigation, where users can quickly and dependably gain their
						bearings and move between pages.
						<br />
						<br />
						The shell was designed with maximum flexibility built in, to serve
						the needs of a broad range of products and users. Adopting the shell
						ensures compliance with IBM design standards, simplifies development
						efforts, and provides great user experiences. All IBM products built
						with Carbon are required to use the shell’s header.
						<br />
						<br />
						To better understand the purpose and function of the UI shell,
						consider the “shell” of MacOS, which contains the Apple menu,
						top-level navigation, and universal, OS-level controls at the top of
						the screen, as well as a universal dock along the bottom or side of
						the screen. The Carbon UI shell is roughly analogous in function to
						these parts of the Mac UI. For example, the app switcher portion of
						the shell can be compared to the dock in MacOS.
					</p>
					<h2
						style={{
							fontWeight: "800",
							margin: "30px 0",
							fontSize: "20px"
						}}
					>
						Header responsive behavior
					</h2>
					<p style={{ lineHeight: "20px" }}>
						As a header scales down to fit smaller screen sizes, headers with
						persistent side nav menus should have the side nav collapse into
						“hamburger” menu. See the example to better understand responsive
						behavior of the header.
					</p>
					<h2
						style={{
							fontWeight: "800",
							margin: "30px 0",
							fontSize: "20px"
						}}
					>
						Secondary navigation
					</h2>
					<p style={{ lineHeight: "20px" }}>
						The side-nav contains secondary navigation and fits below the
						header. It can be configured to be either fixed-width or flexible,
						with only one level of nested items allowed. Both links and category
						lists can be used in the side-nav and may be mixed together. There
						are several configurations of the side-nav, but only one
						configuration should be used per product section. If tabs are needed
						on a page when using a side-nav, then the tabs are secondary in
						hierarchy to the side-nav.
					</p>
				</section>
			</div>
		</div>
	);

	return <Content id="main-content" style={{ backgroundColor: 'lightgray' }}>{content}</Content>;
};

const Fade16 = () => (
	<svg
		width="16"
		height="16"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		aria-hidden="true"
	>
		<path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
	</svg>
);

const QuickView = () => (
	<div id="app-hoverPanel" className="app-hoverPanel" style={{ display: 'none', top: '153.8px' }}>
		<div className="bx--row">
			<div className="bx--col-lg-16"><h2>Operational Dashboard</h2></div>
		</div>
		<div className="bx--row">
			<div className="bx--col-md-4">
				<div className="app-hoverPanel__img-wrapper">
					<img src={ image } alt="Report Preview Image" />
				</div>
			</div>
			<div className="bx--col-md-4">Provides visibility into operational and monitoring performance.</div>
		</div>
		<div className="bx--row">
			<div className="bx--col-md-5"><p className="related-reports-label">Related reports:</p><ul><li><a target="_blank" rel="noopener noreferrer">Paid Media</a></li></ul></div>
			<div className="bx--col-md-3">
				<a className="app-button app-button--primary app-button--regular app-error__button" onClick={() => loadDashboard('operDash', 'https://ibm.biz/E2E_Monitoring')}>
					<div className="app-button__inner"><span className="app-button__label">View report</span></div>
				</a>
			</div>
		</div>
	</div>
);

const App = () => (
	<div className="container">
		<HeaderContainer
			render={({ isSideNavExpanded, onClickSideNavExpand }) => (
				<>
					<Header aria-label="IBM Platform Name" style={{ backgroundColor: '#009d9a' }}>
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
								<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
									<path d="M12 4A5 5 0 117 9a5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0012 2zM22 30H20V25a5 5 0 00-5-5H9a5 5 0 00-5 5v5H2V25a7 7 0 017-7h6a7 7 0 017 7zM22 4H32V6H22zM22 9H32V11H22zM22 14H29V16H22z"></path>
								</svg>
							</HeaderGlobalAction>
						</HeaderGlobalBar>
						<SideNav aria-label="Side navigation" className="app--side-nav app--side-nav--is-open" isFixedNav={true} expanded={isSideNavExpanded}>
							<div className="app--side-nav__header">
								<div className="app--side-nav__header-title">
									<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true" className="app--side-nav__header-title__icon">
										<path d="M15 20H17V24H15zM20 18H22V24H20zM10 14H12V24H10z"></path>
										<path d="M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"></path>
									</svg>reports
								</div>
							</div>
							<SideNavItems className="app--side-nav__sections-container">
								<p style={{ fontSize: '1.2rem', marginTop: '10px' }}>MONITORING</p>
								<SideNavMenu className="app--side-nav__menu-item-btn" title="Dundas">
									<SideNavMenuItem className="app--side-nav__menu-item" id="operDash" onMouseOut={() => closeQuickView()} onMouseOver={() => openQuickView()} onClick={() => loadDashboard('operDash', 'https://ibm.biz/E2E_Monitoring')}>
										<span className="app--side-nav__item-title">Operational Dashboard</span>
									</SideNavMenuItem>
									<SideNavMenuItem className="app--side-nav__menu-item" id="addiDash">
										<span className="app--side-nav__item-title">Additinal Dashboard</span>
									</SideNavMenuItem>
								</SideNavMenu>
								<p style={{ fontSize: '1.2rem', marginTop: '10px' }}>DATABASE</p>
								<SideNavMenu className="app--side-nav__menu-item-btn" title="Cloud">
									<SideNavMenuItem className="app--side-nav__menu-item" id="dbDash">
										<span className="app--side-nav__item-title">Cloud DB Dashboard</span>
									</SideNavMenuItem>
								</SideNavMenu>
								<p style={{ fontSize: '1.2rem', marginTop: '10px' }}>GRAFANA</p>
								<SideNavMenu className="app--side-nav__menu-item-btn" title="Coming Soon">
									<SideNavMenuItem className="app--side-nav__menu-item" id="grafDash">
										<span className="app--side-nav__item-title">Grafana Dashboard</span>
									</SideNavMenuItem>
								</SideNavMenu>
							</SideNavItems>
						</SideNav>
					</Header>
					<StoryContent />
					<QuickView />

				</>
			)}
		/>
	</div>
);

function loadDashboard(id, url) {
	document.getElementById("divId").innerHTML = '<iframe id="i_frame" src="https://ibm.biz/E2E_Monitoring" style="border: 0pt none; width: 100%; height: 100%;" scrolling="no"></iframe>';
	document.getElementById("divId").style.position = 'absolute';
	document.getElementById("divId").style.width = '100%';
	document.getElementById("divId").style.height = '100%';
	document.getElementById(id).ariaCurrent = 'page';
	document.getElementById(id).className = "bx--side-nav__link bx--side-nav__link--current";
	document.getElementById("app-hoverPanel").style.display = "none";
}

function openQuickView() {
	document.getElementById("app-hoverPanel").style.display = "block";
}

function closeQuickView() {
	setTimeout(close, 3000);
	function close() {
		document.getElementById("app-hoverPanel").style.display = "none";
	}
}

export default App;
