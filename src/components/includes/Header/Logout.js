import React, { Component, Fragment } from 'react';
import sideNavSerivce from '../../../services/SideNavItem';
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

    const onLogout = async () => {
        sideNavSerivce.logout().then(res => {
            res.data && console.log("res.data4::", res.data); //setLogin_status(SideNavItem.status);
        });
        props.islogoutmodal();
    }

    const onCancle = () => {
        props.isCancleLogoutmodal();
    }

    return (
        <Fragment>
            {/* {Status.status !== '' && Status.status === 'success' && Status.page === 'logout' && props.notitype === 'logout' &&
                <Redirect to={{ pathname: "login" }} />
            } */}
            <Modal isOpen={props.logoutmodal} toggle={() => toggle()} className={props.className} id='add_location'>
                <ModalHeader toggle={() => toggle()}>Logout</ModalHeader>
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

export default Logout;
