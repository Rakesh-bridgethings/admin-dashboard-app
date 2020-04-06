import React, { useRef, Fragment, useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { toast, Slide } from 'react-toastify';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav, NavItem, NavLink, Button, UncontrolledTooltip } from 'reactstrap';

function PageTitle() {
    const propsData = useSelector(state => state);
    const dispatch = useDispatch();
    console.log("propsData::", propsData);

    // const toggle = (name) => {
    //     // setState({
    //     //     [name]: !state[name],
    //     //     progress: 0.5,
    //     // })
    // }

    const notify22 = () => {
     toast("Another toastify example!!!", {
            transition: Slide,
            closeButton: true,
            autoClose: 5000,
            position: 'bottom-center',
            type: 'success'
        });
    }

    let {
        enablePageTitleIcon,
        enablePageTitleSubheading,
        heading,
        icon,
        subheading
    } = propsData.ThemeOptions;

    return (
        <div className="app-page-title">
            <div className="page-title-wrapper">
                <div className="page-title-heading">
                    <div
                        className={cx("page-title-icon", { 'd-none': !enablePageTitleIcon })}>
                        <i className={icon} />
                    </div>
                    <div>
                        {heading}
                        <div
                            className={cx("page-title-subheading", { 'd-none': !enablePageTitleSubheading })}>
                            {subheading}
                        </div>
                    </div>
                </div>
                <div className="page-title-actions">
                    <Button className="btn-shadow mr-3" onClick={() => notify22()} color="dark" id="Tooltip-123">
                        {/* <FontAwesomeIcon icon={faStar}/>  */}
                        <i className='pe-7s-refresh-2' /> Refresh
                        </Button>
                    {/* <UncontrolledTooltip placement="left" target={'Tooltip-123'}>
                            Show a Toastify notification example!
                            </UncontrolledTooltip> */}
                    <label>25 Dec 2019 to 24 Jan 2020</label>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
    enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);


