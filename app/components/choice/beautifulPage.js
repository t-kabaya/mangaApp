import React, { Component,PropTypes } from 'react';
import {  
    Text,
    InteractionManager
} from 'react-native';
import CommonFlatList from '../common/commonFlatList';
import { BOOK_URL } from '../../constants/api';
import { connect } from 'react-redux';
import { fetchBeautifulPageData } from '../../actions/beautifulAction';

const params = { type: "BL漫画" }

class BeautifulPage extends Component {

    static get defaultProps() {
        return {
            pushToChapterPage: () => {}
        }
    }

    render() {
        return (
            <CommonFlatList 
                pushToChapterPage={(comicName) => {
                    this.props.pushToChapterPage(comicName)
                }}
                data={this.props.data}
            />
        )
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchBeautifulPageData(BOOK_URL,params,true);
        });
    }


    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isSuccess;
    }


}

export default BeautifulPage = connect(
    (state) => {
        const { data,isLoading,isSuccess,err } = state.beautifulPageReducer;
        return { 
            data,
            isLoading,
            isSuccess,
            err 
        }
    },
    {
        fetchBeautifulPageData
    }
)(BeautifulPage);