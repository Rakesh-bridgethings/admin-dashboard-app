import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MetisMenu from 'react-metismenu';
import cx from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { setEnableMobileMenu } from '../../../reducers/ThemeOptions';
import HeaderLogo from '../Header/AppLogo';
import Logout from '../Header/Logout';
import Dashboard from '../../dashboards/index'

class LeftSidebar extends Component {
    state = {
        content: [],
        dashboardSubmenuHide: false,
        currentPage: 'basic',
    };

    componentDidMount = async () => {
    }
    toggleMobileSidebar = () => {
        let { enableMobileMenu, setEnableMobileMenu } = this.props;
        setEnableMobileMenu(!enableMobileMenu);
    }
    islogoutmodal = () => {
        this.setState({ logoutmodal: !this.state.logoutmodal });
        // this.setState({ notitype: 'logout' })
    }
    isCancleLogoutmodal = () => {
        this.setState({ logoutmodal: !this.state.logoutmodal });
    }

    render() {
        let {
            backgroundColor,
            enableBackgroundImage,
            enableSidebarShadow,
            backgroundImage,
            backgroundImageOpacity,
        } = this.props;
        const { Status, SideNavItem } = this.props.data;
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
                <div className="sidebar-mobile-overlay" onClick={this.toggleMobileSidebar} />
                <ReactCSSTransitionGroup
                    component="div"
                    className={cx("app-sidebar", backgroundColor, { 'sidebar-shadow': enableSidebarShadow })}
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
                                <li onClick={() => this.setState({ dashboardSubmenuHide: !this.state.dashboardSubmenuHide })}><i className="pe-7s-rocket"></i><span>Dashboard</span><i className={this.state.dashboardSubmenuHide ? 'pe-7s-angle-down' : 'pe-7s-angle-up'} id="main_menu_sidebar"></i></li>
                                {this.state.dashboardSubmenuHide &&
                                        <ul className="sidebar_submenu">
                                            {sidebar && sidebar.map((item, index) => {
                                                return (
                                                    <li key={index} onClick={() => this.props.currentPage(item.to)}><span>{item.label}</span></li>
                                                )
                                            })}
                                        </ul>
                                }
                                <li onClick={() => this.setState({ logoutmodal: !this.state.logoutmodal })}><i className="fa fa-sign-out"></i><span>Logout</span></li>
                            </ul>
                            <Logout shownoti={this.shownoti} notitype={this.state.notitype} logoutmodal={this.state.logoutmodal} islogoutmodal={this.islogoutmodal} isCancleLogoutmodal={this.isCancleLogoutmodal} />
                        </div>
                    </PerfectScrollbar>
                    <div
                        className={cx("app-sidebar-bg", backgroundImageOpacity)}
                        style={{
                            backgroundImage: enableBackgroundImage ? 'url(' + backgroundImage + ')' : null
                        }}>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>

        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

// export default withRouter(Nav);

const mapStateToProps = state => ({
    enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
    enableSidebarShadow: state.ThemeOptions.enableSidebarShadow,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    backgroundColor: state.ThemeOptions.backgroundColor,
    backgroundImage: state.ThemeOptions.backgroundImage,
    backgroundImageOpacity: state.ThemeOptions.backgroundImageOpacity,
    data: state,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftSidebar);


