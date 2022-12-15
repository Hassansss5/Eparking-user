import React from 'react';
import { View, StyleSheet, Dimensions, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ngrok_Url } from '../keys';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const CenterLocationButton = function ( props ) {
    // if props.cb is passed, use it, if not console.log when cb() is called.
    const cb = props.cb ? props.cb :() => console.log('CallBack function not passed to CenterLocationButton');
    // if props.bottom is passed, use it, if not set bottom to 65
    const bottom = props.bottom ? props.bottom : 65;

    return (
        <View style={{top: HEIGHT - bottom}}>
            <MaterialIcons 
             name= 'my-location'
             color= '#000000'
             size= { 25 }
             onPress = { () => { cb() } }/>
        </View>
    )
};

const styles = StyleSheet.create ({
    container : {
        zIndex: 9,
        position: 'absolute',
        width: 45,
        height: 45,
        backgroundColor: '#fff',
        left: WIDTH-70,
        borderRadius: 50,
        shadowColor: '#000000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
        justifyContent: 'space-around',
        alignItems: 'center'

    }
})