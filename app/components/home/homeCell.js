import React, { Component,PropTypes } from 'react';
import {  
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

export default class HomeCell extends Component {

    static get defaultProps() {
        return {
            rowData: {},
            pushToChapterPage: () => {}
        }
    }

    render() {

        const {
            coverImg,
            name,
            area,
            des,
            finish
        } = this.props.rowData;
        
        return (
            <TouchableHighlight 
                underlayColor="white"
                onPress={() => {
                    this.props.pushToChapterPage(name);
                }}>
                <View style={{height: 100,borderBottomColor: 'gray',borderBottomWidth: 1,flexDirection: 'row'}}>
                    <Image 
                        source={{uri: coverImg}}
                        style={{width: 80,height: 80,margin: 10,borderRadius: 5}} />
                    <View style={{flex: 1,justifyContent: 'space-around'}}>
                        <Text style={{fontSize: 20,marginTop: 10}}>{name}</Text>
                        <Text>{area}</Text>
                        <Text
                            style={{marginBottom: 10}} 
                            numberOfLines = {1}>{des}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}
