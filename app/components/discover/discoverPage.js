import React, { PureComponent } from 'react';
import {  
    Text,
    Image,
    View,
    InteractionManager
} from 'react-native';
import window from '../../constants/window';
import CommonFlatList from '../common/commonFlatList';
import ChapterPage from '../chapter/chapterPage';
import { BOOK_URL } from '../../constants/api';
import { connect } from 'react-redux';
import { fetchDiscoverPageData } from '../../actions/discoverPageAction';

const params = { type: "男子向け" }


class DiscoverPage extends PureComponent {
    static navigationOptions = {
        title: '男子向け'
    }
    
    render() {
        return (
            <CommonFlatList 
                pushToChapterPage={(comicName) => {
                    this.props.navigation.navigate('ChapterPage',{comicName});
                }}
                data={this.props.data}/>
        )
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchDiscoverPageData(BOOK_URL,params,true);
        });
    }
    
}


export default DiscoverPage = connect(
    (state) => {
        const { data,isLoading,isSuccess,err } = state.discoverPageReducer;
        return { 
            data,
            isLoading,
            isSuccess,
            err 
        }
    },
    {
        fetchDiscoverPageData
    }
)(DiscoverPage);