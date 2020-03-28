/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTitle from '../../components/includes/PageTitle';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col, Card, CardBody, CardHeader, Button,
} from 'reactstrap';
import Loading from '../../library/loader';

class Entities extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
    }

    componentDidMount = async () => {
    }

    render() {
        const { Status } = this.props.data;
        return (
            <Fragment>
                {Status.loading && <Loading />}
                {!Status.loading &&
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
                }
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    data: state,
})
const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Entities);