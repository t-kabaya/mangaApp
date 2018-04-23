import React, { PureComponent } from 'react';
import {  
    Text,
    Image,
    View,
    InteractionManager,
    FlatList
} from 'react-native';
import window from '../../constants/window';
import HomeCell from './homeCell';
import ChapterPage from '../chapter/chapterPage';
import { fetchMainPageData } from '../../actions/mainPageAction';
import { connect } from 'react-redux';
import { BOOK_URL } from '../../constants/api';

const params = {
    type: "少年漫画",
    skip: 40
}

class HomePage extends PureComponent {

    static navigationOptions = {
        title: '転職漫画アプリ'
    }

    constructor (props, context) {
        super(props, context)
    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={this._renderItem}
                style={{flex: 1}}
            />

        )
    }

    _renderItem = ({item}) => {
        return (
            <HomeCell rowData={item} pushToChapterPage={(comicName) => {
                this.props.navigation.navigate('ChapterPage',{comicName});
            }}/>
        )
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchMainPageData(BOOK_URL,params,true);
        });
    }

}

export default HomePage = connect(
    (state) => {
        const { data,isLoading,isSuccess,err } = state.homePageReducer;
        return { 
            data,
            isLoading,
            isSuccess,
            err 
        }
    },
    {
        fetchMainPageData
    }
)(HomePage);