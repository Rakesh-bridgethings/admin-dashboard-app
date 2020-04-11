import React, { Fragment, useEffect, useState } from 'react';
import {
    DropdownToggle, DropdownMenu,
    Nav, Button, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup, DropdownItem
} from 'reactstrap';
import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import sideNavSerivce from '../../../services/SideNavItem';


function UserBox(props) {

    const [userdata, setuserdata] = useState({});

    useEffect(() => {
        async function fetchData() {
            await sideNavSerivce.fetchtopUseritemdata().then(res => {
                setuserdata(res);
            });
        }
        fetchData();
    }, []);

    return (
        <Fragment>
            <div className="header-btn-lg pr-0">
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="link" className="p-0">
                                    <img width={42} className="rounded-circle" src={avatar1} alt="" />
                                    {/* <FontAwesomeIcon className="ml-2 opacity-8" icon={faAngleDown} /> */}
                                </DropdownToggle>
                            </UncontrolledButtonDropdown>
                        </div>
                        <div className="widget-content-left  ml-3 header-user-info">
                            <div className="widget-heading">
                                {userdata.firstName}
                            </div>
                            <div className="widget-subheading">
                                {userdata.roleName}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UserBox;