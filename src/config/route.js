import React, { Suspense, lazy, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { bindActionCreators } from 'redux';
import ResizeDetector from 'react-resize-detector';
import Header from '../components/includes/Header';
import LeftSidebar from '../components/includes/LeftSidebar';
import Login from '../components/login';
import ForgotPassword from '../components/login/forgot_pasword';
import Dashboard from '../components/dashboards';
import PerformanceDashboard from '../components/dashboards/performance';
import { Route, Link, Switch, HashRouter, BrowserRouter as Router, Redirect } from 'react-router-dom';

function Main(props) {
    // const [closedSmallerSidebar, setClosedSmallerSidebar] = useState(false);
    const [currentPage, setCurrentPage] = useState('basic');

    const onCurrentPage = (val) => {
        // console.log("val::", val);
        setCurrentPage(val);
    }

    let {
        colorScheme,
        enableFixedHeader,
        enableFixedSidebar,
        enableFixedFooter,
        enableClosedSidebar,
        closedSmallerSidebar,
        enableMobileMenu,
        enablePageTabsAlt,
    } = props;
    const authToken = localStorage.getItem('BTDashoardauthToken');
    return (
        <ResizeDetector
            handleWidth
            render={({ width }) => (
                <Fragment>
                    <div className={cx(
                        "app-container app-theme-" + colorScheme,
                        { 'fixed-header': enableFixedHeader },
                        { 'fixed-sidebar': enableFixedSidebar || width < 1250 },
                        { 'fixed-footer': enableFixedFooter },
                        { 'closed-sidebar': enableClosedSidebar || width < 1250 },
                        { 'closed-sidebar-mobile': closedSmallerSidebar || width < 1250 },
                        { 'sidebar-mobile-open': enableMobileMenu },
                    )}>
                        <HashRouter>
                            {(authToken && authToken === '') || !authToken &&
                                <Fragment>
                                    <Route path="/login" component={Login} />
                                    <Route path="/forgot-password" component={ForgotPassword} />
                                    <Redirect from='/' to="/login" />
                                    <Redirect from='*' to="/login" />
                                </Fragment>
                            }
                            {authToken && authToken !== '' &&
                                <Fragment>
                                    <Header />
                                    <div className="app-main">
                                        <LeftSidebar currentPage={onCurrentPage} />
                                        <div className="app-main__outer">
                                            <div className="app-main__inner">
                                                {/* <Suspense fallback={
                                                    <div className="loader-container">
                                                        <div className="loader-container-inner">
                                                            <h6 className="mt-5">
                                                                Please wait Perforamance Dashboard is loading ...
                                                            <small></small>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                }> */}
                                                {/* <Route path="/" component={PeroformanceDashboard} /> */}
                                                {/* </Suspense> */}
                                                {currentPage === 'basic' && <Dashboard />}
                                                {currentPage === 'performance' && <PerformanceDashboard />}

                                                <Redirect from='/login' to="/dashboard" />
                                                {/* <Route path="/dashboard" component={Dashboard} /> */}
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            }
                        </HashRouter>
                    </div>
                </Fragment>
            )}
        />
    )
}
const mapStateToProps = state => ({
    colorScheme: state.ThemeOptions.colorScheme,
    enableFixedHeader: state.ThemeOptions.enableFixedHeader,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableFixedFooter: state.ThemeOptions.enableFixedFooter,
    enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,
    // match: state.match,
    data: state,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    // fetchSidenavItemData: fetchSidenavItemData,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
