/* eslint-disable no-useless-constructor */
import React, { Fragment } from 'react';
import PageTitle from '../../components/includes/PageTitle';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col, Card, CardBody, CardHeader, Button,
} from 'reactstrap';
import Loading from '../../library/loader';

function Entities() {
    return (
        <Fragment>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <div>
                    <PageTitle
                        heading="Performance Dashboard"
                        icon="fa fa-building-o icon-gradient bg-mean-fruit"
                    />
                    {/* <Card className="main-card mb-3">
                                <CardHeader>
                                  
                                </CardHeader>
                                <CardBody className='page_css' id="user_tbl">

                                </CardBody>
                            </Card> */}
                </div>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
}

export default Entities;