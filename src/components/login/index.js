/* eslint-disable no-useless-constructor */
import React, { useRef, Fragment, useEffect, useState } from 'react';
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

function Login(props) {
    const simpleValidator = useRef(new SimpleReactValidator({
            element: (message, className) => <div className='required_message'>{message}</div>
        }, { autoForceUpdate: this }))
    const [, forceUpdate] = useState();

    // validator = new SimpleReactValidator({
    //     element: (message, className) => <div className='required_message'>{message}</div>
    // }, { autoForceUpdate: this })

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [login_status, setLogin_status] = useState('');
    const [login_message, setLogin_message] = useState('');
    const [redirect_forgot, setRedirect_forgot] = useState(false);

    const onLogin = async () => {
        setLogin_status('');
        setLogin_message('');
        const formValid = simpleValidator.current.allValid();
        if (formValid) {
            const logindata = { "email": email, "password": password };
            sideNavSerivce.fetchLoginDetails(logindata).then(res => {
                res.data && console.log("res.data1::", res.data); //setLogin_status(SideNavItem.status);
              });            
            // SideNavItem.status === 'error' && setLogin_message(SideNavItem.res_data.response.data.message);
        } else {
            simpleValidator.current.showMessages()
            forceUpdate(1)
        }
    }

    // const { SideNavItem } = props.data;
    return (
        <Fragment>
            {redirect_forgot && <Redirect to='/forgot-password' />}
            {/* <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}> */}
            <div className="login_bg_main">
                {login_status === 'error' && <Notification msg={login_message} page="login" status={login_status} />}
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
                                            onBlurCapture={() => simpleValidator.current.showMessageFor('Email')}
                                        />
                                        {simpleValidator.current.message('Email', email, 'required|email')}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <FormGroup className="password_login">
                                        <Label for="password">Password</Label>
                                        <Input type={showPass ? 'text' : 'password'} id="password" placeholder="Enter Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onBlurCapture={() => simpleValidator.current.showMessageFor('Password')}
                                        />
                                        <i className={showPass ? "fa fa-eye" : "fa fa-eye-slash"} onClick={() => setShowPass(!showPass)}></i>
                                        {simpleValidator.current.message('Password', password, 'required')}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <FormGroup>
                                        <Button className='btn-success btn' style={{ width: '100%' }} onClick={() => onLogin()}>Login</Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="reset_pass">
                                    <FormGroup>
                                        <p onClick={() => setRedirect_forgot(true)}>Reset Password</p>
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

export default Login;


