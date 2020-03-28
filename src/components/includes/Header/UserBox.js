import React, { Fragment } from 'react';
import {
    DropdownToggle, DropdownMenu,
    Nav, Button, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup, DropdownItem
} from 'reactstrap';
import {
    toast,
    Bounce
} from 'react-toastify';
import {
    faCalendarAlt,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import { fetchtopUseritemdata } from '../../../services/SideNavItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount = async () => {
        const { fetchtopUseritemdata } = this.props;
        await fetchtopUseritemdata();
    }

    render() {
        const { Status, SideNavItem } = this.props.data;
        var splitdata = SideNavItem.topuserdata.text && SideNavItem.topuserdata.text.split(" | ");
        var user_nm = splitdata && splitdata[0];
        var role = splitdata && splitdata[1];
        var menuItems = SideNavItem.topuserdata.menuItems && SideNavItem.topuserdata.menuItems;
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
                                    {user_nm}
                                </div>
                                <div className="widget-subheading">
                                    {role}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

// export default UserBox;
const mapStateToProps = state => {
    return { data: state }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchtopUseritemdata: fetchtopUseritemdata,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserBox);
