/* eslint-disable no-useless-constructor */
import React, { useRef, Fragment, useState, useEffect } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import sideNavSerivce from '../../services/SideNavItem';
import Notification from '../../library/notification';
import BG_Logo from '../../assets/utils/images/BT-HighRes-Logo.5eb3d28f.png';
import {
    Row, Col, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, Label, Input, FormGroup, Card, CardBody, CardHeader
} from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';
import { Redirect } from 'react-router-dom';

function ForgotPassword(props) {

    const simpleValidator = useRef(new SimpleReactValidator({
        element: (message, className) => <div className='required_message'>{message}</div>
    }, { autoForceUpdate: this }))
    const [, forceUpdate] = useState();

    const [email, setEmail] = useState('');
    const [reset_msg, setReset_msg] = useState('');
    const [redirect_login, setRedirect_login] = useState(false);

    const onsubmit = async () => {
        const formValid = simpleValidator.current.allValid();
        if (formValid) {
            sideNavSerivce.fetchResetDetails(email).then(res => {
                setReset_msg(res);
              });
            
        } else {
            simpleValidator.current.showMessages();
            forceUpdate();
        }
    }

    return (
        <Fragment>
            {redirect_login && <Redirect to='/login' />}
            {/* <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>*/}
            <div className="login_bg_main">
                {reset_msg !== '' && <Notification msg={reset_msg} status='success' />}
                <Card id="bt_login_page">
                    <CardHeader>
                        <img src={BG_Logo} alt='logo' width='45%' />
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type='text' id="email" placeholder="Enter Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onBlurCapture={(e) => simpleValidator.current.showMessageFor('Email')}
                                        />
                                        {simpleValidator.current.message('Email', email, 'required|email')}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <FormGroup>
                                        <Button className='btn-success btn' style={{ width: '100%' }} onClick={() => onsubmit()}>Submit</Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="back_forgot">
                                    <FormGroup>
                                        <p onClick={() => setRedirect_login(true)}><i class="fa fa-arrow-left"></i> Back</p>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </div>
            {/* </ReactCSSTransitionGroup> */}
        </Fragment>
    );
}

export default ForgotPassword;