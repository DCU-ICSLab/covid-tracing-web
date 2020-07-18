import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as tracingActions from 'store/modules/tracing';
import {
    MapPallet,
    SideBar,
    Header,
    MainSideBar,
    FooterBar
} from 'components';


class Tracing extends Component {

    componentDidMount() {
    }

    render() {

        return (
            <Fragment>
                <MainSideBar/>
                <SideBar/>
                <MapPallet/>
                <Header/>
                <FooterBar>
                </FooterBar>
            </Fragment>
        )
    }
}


export default withRouter(
    connect(
        // props 로 넣어줄 스토어 상태값
        state => ({

        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            tracingActions: bindActionCreators(tracingActions, dispatch),
        })
    )(Tracing)
)