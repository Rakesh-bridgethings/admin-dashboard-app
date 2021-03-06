import React, { Fragment, useState } from 'react';
import Hamburger from 'react-hamburgers';
import cx from 'classnames';
import {
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Button
} from 'reactstrap';


function AppMobileMenu(props) {

    const [activeMobile, setActiveMobile] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [activeSecondaryMenuMobile, setActiveSecondaryMenuMobile] = useState(false);

    const toggleMobileSidebar = () => {
        let { enableMobileMenu, setEnableMobileMenu } = this.props;
        setEnableMobileMenu(!enableMobileMenu);
    }
    const toggleMobileSmall = () => {
        let { enableMobileMenuSmall, setEnableMobileMenuSmall } = this.props;
        setEnableMobileMenuSmall(!enableMobileMenuSmall);
    }

    // state = {
    //     openLeft: false,
    //     openRight: false,
    //     relativeWidth: false,
    //     width: 280,
    //     noTouchOpen: false,
    //     noTouchClose: false,
    // };

    let {
        enableMobileMenu,
    } = props;
    return (
        <Fragment>
            <div className="app-header__mobile-menu">
                <div onClick={() => toggleMobileSidebar()}>
                    <Hamburger
                        active={enableMobileMenu}
                        type="elastic"
                        onClick={() => setActiveMobile(!activeMobile)}
                    />
                </div>
            </div>
            <div className="app-header__menu">
                <span onClick={() => toggleMobileSmall()}>
                    <Button size="sm"
                        className={cx("btn-icon btn-icon-only", { active: activeSecondaryMenuMobile })}
                        color="primary"
                        onClick={() => setActiveSecondaryMenuMobile(!activeSecondaryMenuMobile)}>
                        <div className="btn-icon-wrapper"><FontAwesomeIcon icon={faEllipsisV} /></div>
                    </Button>
                </span>
            </div>
        </Fragment>
    )
}



export default AppMobileMenu;