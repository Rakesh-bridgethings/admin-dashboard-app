import React, { Suspense, lazy, Fragment, useState, useEffect } from 'react';
import cx from 'classnames';
import ResizeDetector from 'react-resize-detector';
import Header from '../components/includes/Header';
import LeftSidebar from '../components/includes/LeftSidebar';
import Login from '../components/login';
import ForgotPassword from '../components/login/forgot_pasword';
import Dashboard from '../components/dashboards';
import PerformanceDashboard from '../components/dashboards/performance';
import { Route, Link, Switch, HashRouter, BrowserRouter as Router, Redirect } from 'react-router-dom';
import ThemeOptionSerivce from '../services/ThemeOption'

function Main(props) {
    // const [closedSmallerSidebar, setClosedSmallerSidebar] = useState(false);
    const [currentPage, setCurrentPage] = useState('basic');
    const [themeoption, setthemeoption] = useState({});

    useEffect(() => {
        setthemeoption(ThemeOptionSerivce);
    }, []);

    const onCurrentPage = (val) => {
        // console.log("val::", val);
        setCurrentPage(val);
    }

    const authToken = localStorage.getItem('BTDashoardauthToken');    
    return (
        <ResizeDetector
            handleWidth
            render={({ width }) => (
                <Fragment>
                    <div className={cx(
                        "app-container app-theme-" + themeoption.colorScheme,
                        { 'fixed-header': themeoption.enableFixedHeader },
                        { 'fixed-sidebar': themeoption.enableFixedSidebar || width < 1250 },
                        { 'fixed-footer': themeoption.enableFixedFooter },
                        { 'closed-sidebar': themeoption.enableClosedSidebar || width < 1250 },
                        { 'closed-sidebar-mobile': themeoption.closedSmallerSidebar || width < 1250 },
                        { 'sidebar-mobile-open': themeoption.enableMobileMenu },
                    )}>
                         
                        <HashRouter>
                        <Switch>
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
                            </Switch>
                        </HashRouter>
                        
                    </div>
                </Fragment>
            )}
        />
    )
}

export default Main;
