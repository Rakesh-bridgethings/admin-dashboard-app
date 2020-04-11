import React, { Fragment, useState, useEffect } from 'react';
import cx from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ThemeOptionSerivce from '../../../services/ThemeOption'
import HeaderLogo from './AppLogo';
import SearchBox from './SearchBox';
import UserBox from './UserBox';

function Header(props) {
    const [themeoption, setthemeoption] = useState({});
    // let {
    //     headerBackgroundColor,
    //     enableMobileMenuSmall,
    //     enableHeaderShadow
    // } = props.data && props.data.headerData.ThemeOptions;

    useEffect(() => {
        setthemeoption(ThemeOptionSerivce);
    }, []);

    return (
        <Fragment>
            <ReactCSSTransitionGroup
                component="div"
                className={cx("app-header", themeoption.headerBackgroundColor, { 'header-shadow': themeoption.enableHeaderShadow })}
                transitionName="HeaderAnimation"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false}
                transitionLeave={false}>
                <HeaderLogo />
                <div className={cx(
                    "app-header__content",
                    { 'header-mobile-open': themeoption.enableMobileMenuSmall },
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


export default Header;

