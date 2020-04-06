import React, { Fragment, useState, useEffect } from 'react';
import cx from 'classnames';
import { connect, useDispatch, useSelector } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HeaderLogo from './AppLogo';
import SearchBox from './SearchBox';
import UserBox from './UserBox';

function Header() {
    const headerData = useSelector(state => state);
    const dispatch = useDispatch();
    
    // const [dropdownOpen, setDropdownOpen] = useState(false);
    let {
        headerBackgroundColor,
        enableMobileMenuSmall,
        enableHeaderShadow
    } = headerData.ThemeOptions;
    // let{SideNavItem} = this.props.data;
    return (
        <Fragment>
            <ReactCSSTransitionGroup
                component="div"
                className={cx("app-header", headerBackgroundColor, { 'header-shadow': enableHeaderShadow })}
                transitionName="HeaderAnimation"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false}
                transitionLeave={false}>
                <HeaderLogo />
                <div className={cx(
                    "app-header__content",
                    { 'header-mobile-open': enableMobileMenuSmall },
                )}>
                    <div className="app-header-left">
                        <SearchBox />
                    </div>
                    <div className="app-header-right">
                        <UserBox />
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
}

const mapStateToProps = state => ({
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
    closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

