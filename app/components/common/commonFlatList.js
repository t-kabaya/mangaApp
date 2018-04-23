import React, { Component,PropTypes } from 'react';
import {  
    FlatList,
    Image,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import {fetchMainPageData} from '../../actions/mainPageAction';

export default class CommonFlatList extends Component {
    
    static get defaultProps() {
        return {
            data: [],
            pushToChapterPage: () => {}
        }
    }

    render(){
        return(
            <FlatList
                style={{flex: 1}} 
                data={this.props.data}
                renderItem={this._renderItem}
            />
        );
    }

    _renderItem = ({item}) => {
        const {
            des,
            coverImg
        } = item;
        return (
            <TouchableHighlight onPress={() => {
                this.props.pushToChapterPage(item.name)
            }}>
                <View style={{width: window.width,height: 300}}>
                    <Image 
                        style={{height: 250,width: window.width}} 
                        source={{uri: coverImg}}
                    />
                    <Text
                        style={{height: 40,margin: 5}}
                        numberOfLines={2}
                    >{des}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}
