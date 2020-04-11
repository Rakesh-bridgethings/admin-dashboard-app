import React, { useEffect, useContext, Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import MetisMenu from 'react-metismenu';
import cx from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PerfectScrollbar from 'react-perfect-scrollbar';
import HeaderLogo from '../Header/AppLogo';
import Logout from '../Header/Logout';
import Dashboard from '../../dashboards/index'
import ThemeOptionSerivce from '../../../services/ThemeOption'

function LeftSidebar(props) {

    const [content, setContent] = useState([]);
    const [dashboardSubmenuHide, setDashboardSubmenuHide] = useState(false);
    const [logoutmodal, setLogoutmodal] = useState(false);
    const [currentPage, setCurrentPage] = useState('basic');
    const [themeoption, setthemeoption] = useState({});

    useEffect(() => {
        setthemeoption(ThemeOptionSerivce);
    }, []);

    const toggleMobileSidebar = () => {
        let { enableMobileMenu, setEnableMobileMenu } = props;
        setEnableMobileMenu(!enableMobileMenu);
    }
    const islogoutmodal = () => {
        setLogoutmodal(!logoutmodal);
        // setState({ notitype: 'logout' })
    }

    const isCancleLogoutmodal = () => {
        setLogoutmodal(!logoutmodal);
    }


    const sidebarMenu = [
        {
            icon: 'pe-7s-rocket',
            label: 'Dashboard',
            to: '#dashboard',
        },
        {
            icon: 'fa fa-sign-out',
            label: 'Logout',
            // to: '#dashboard',
        },
    ];
    const sidebar = [
        {
            icon: 'pe-7s-rocket',
            label: 'Basic Dashboard',
            to: 'basic',
        },
        {
            icon: 'pe-7s-rocket',
            label: 'Performance Dashboard',
            to: 'performance',
        },

    ]
    return (
        <Fragment>
            <div className="sidebar-mobile-overlay" onClick={toggleMobileSidebar} />
            <ReactCSSTransitionGroup
                component="div"
                className={cx("app-sidebar", themeoption.backgroundColor, { 'sidebar-shadow': themeoption.enableSidebarShadow })}
                transitionName="SidebarAnimation"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false}
                transitionLeave={false}>
                <HeaderLogo />
                <PerfectScrollbar>
                    <div className="app-sidebar__inner">
                        {/* {//item.menuItems.length > 0 &&
                                    <h5 className="app-sidebar__heading">{item.text}</h5>
                                } */}
                        {/* <MetisMenu content={sidebarMenu} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" /> */}
                        <ul className="vertical-nav-menu" id="sidebar_menu">
                            <li onClick={() => setDashboardSubmenuHide(!dashboardSubmenuHide)}><i className="pe-7s-rocket"></i><span>Dashboard</span><i className={dashboardSubmenuHide ? 'pe-7s-angle-down' : 'pe-7s-angle-up'} id="main_menu_sidebar"></i></li>
                            {dashboardSubmenuHide &&
                                <ul className="sidebar_submenu">
                                    {sidebar && sidebar.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => props.currentPage(item.to)}><span>{item.label}</span></li>
                                        )
                                    })}
                                </ul>
                            }
                            <li onClick={() => setLogoutmodal(!logoutmodal)}><i className="fa fa-sign-out"></i><span>Logout</span></li>
                        </ul>
                        <Logout logoutmodal={logoutmodal} islogoutmodal={() => islogoutmodal()} isCancleLogoutmodal={() => isCancleLogoutmodal()} />
                    </div>
                </PerfectScrollbar>
                <div
                    className={cx("app-sidebar-bg", themeoption.backgroundImageOpacity)}
                    style={{
                        backgroundImage: themeoption.enableBackgroundImage ? 'url(' + themeoption.backgroundImage + ')' : null
                    }}>
                </div>
            </ReactCSSTransitionGroup>
        </Fragment>
    );

    const isPathActive = (path) => {
        return props.location.pathname.startsWith(path);
    }
}

// export default withRouter(Nav);
export default LeftSidebar;
