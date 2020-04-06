import React, { Component, Fragment } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../services/SideNavItem';
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup
} from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';
import Notification from '../../../library/notification';
import { Route, Link, Switch, HashRouter, BrowserRouter as Router, Redirect } from 'react-router-dom';

function Logout(props) {

    const toggle = () => {
        props.isCancleLogoutmodal();
    }

    const onLogout = async() => {
        let { logout } = props;
        await logout();
        props.islogoutmodal();
    }

    const onCancle = () => {
        props.isCancleLogoutmodal();
    }

    const { Status } = props.data;
    return (
        <Fragment>
            {Status.status !== '' && Status.status === 'success' && Status.page === 'logout' && props.notitype === 'logout' &&
                <Redirect to={{ pathname: "login" }} />
            }
            <Modal isOpen={props.logoutmodal} toggle={() => toggle()} className={props.className} id='add_location'>
                <ModalHeader toggle={()=> toggle()}>Logout</ModalHeader>
                <ModalBody>
                    <p>Are you sure want to logout?</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="light" onClick={() => onCancle()}>Cancel</Button>
                    <Button color="danger" onClick={() => onLogout()}>Log Out</Button>{' '}
                </ModalFooter>
            </Modal>
        </Fragment>
    );
}


const mapStateToProps = state => ({
    data: state,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    logout: logout,
}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout);
