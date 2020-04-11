import React, { Fragment, useState, useEffect } from 'react';

import Hamburger from 'react-hamburgers';

import AppMobileMenu from './AppMobileMenu';
import ThemeOptionSerivce from '../../../services/ThemeOption'

function HeaderLogo(props) {

    const [active, setActive] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [activeSecondaryMenuMobile, setActiveSecondaryMenuMobile] = useState(false);
    const [themeoption, setthemeoption] = useState({});
    const [enableClosedSidebar, setEnableClosedSidebar] = useState(false);

    const toggleEnableClosedSidebar = () => {
        // let { enableClosedSidebar, setEnableClosedSidebar } = props;
        setEnableClosedSidebar(!enableClosedSidebar);
    }

    // state = {
    //     openLeft: false,
    //     openRight: false,
    //     relativeWidth: false,
    //     width: 280,
    //     noTouchOpen: false,
    //     noTouchClose: false,
    // };

    // let {
    //     enableClosedSidebar,
    // } = props.data.ThemeOptions;

    useEffect(() => {
        setthemeoption(ThemeOptionSerivce);
    }, []);

    return (
        <Fragment>
            <div className="app-header__logo">
                <div className="logo-src" />
                <div className="header__pane ml-auto">
                    <div onClick={() => toggleEnableClosedSidebar()}>
                        <Hamburger
                            active={themeoption.enableClosedSidebar}
                            type="elastic"
                            onClick={() => setActive(!active)}
                        />
                    </div>
                </div>
            </div>
            <AppMobileMenu />
        </Fragment>
    )
}
export default HeaderLogo;
