import React, { Fragment, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Hamburger from 'react-hamburgers';
import cx from 'classnames';
import {
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Button
} from 'reactstrap';
import {
    setEnableMobileMenu,
    setEnableMobileMenuSmall,
} from '../../../reducers/ThemeOptions';

function AppMobileMenu(props) {
    
    const propsData = useSelector(state => state);
    const dispatch = useDispatch();

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


const mapStateToProps = state => ({
    closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({

    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),
    setEnableMobileMenuSmall: enable => dispatch(setEnableMobileMenuSmall(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AppMobileMenu);