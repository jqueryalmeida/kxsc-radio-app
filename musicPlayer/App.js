import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming';

export default class App extends Component {
    constructor() {
        super();
        const url = "http://kxsc.org/listen";
    }


    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                ReactNativeAudioStreaming.play(url, {});
            }}>

                <View style={StyleSheet.flatten([
                    styles.row,
                    {backgroundColor: rowData.url == url ? '#3fb5ff' : 'white'}
                ])}>
                    <Text style={styles.icon}>▸</Text>
                    <View style={styles.column}>
                        <Text style={styles.name}>KXSC Radio</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: Platform.OS === 'ios' ? 30 : 0
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    column: {
        flexDirection: 'column'
    },
    icon: {
        fontSize: 26,
        width: 30,
        textAlign: 'center'
    },
    name: {
        color: '#000'
    },
    url: {
        color: '#CCC'
    }
});