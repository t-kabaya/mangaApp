import React, { Component,PropTypes } from 'react';
import {  
    Text,
    InteractionManager
} from 'react-native';
import CommonFlatList from '../common/commonFlatList';
import { BOOK_URL } from '../../constants/api';
import { connect } from 'react-redux';
import { fetchGirlPageData } from '../../actions/girlPageAction';

const params = { type: "少女漫画" }

class GirlPage extends Component {

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
            this.props.fetchGirlPageData(BOOK_URL,params,true);
        });
    }


    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isSuccess;
    }

}

export default GirlPage = connect(
    (state) => {
        const { data,isLoading,isSuccess,err } = state.girlPageReducer;
        return { 
            data,
            isLoading,
            isSuccess,
            err 
        }
    },
    {
        fetchGirlPageData
    }
)(GirlPage);