import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.parentViewStyle}>
            <View style={styles.viewOneStyle}></View> 
            <View style={styles.viewTwoStyle}></View> 
            <View style={styles.viewThreeStyle}></View> 
        </View>
    )
}

const styles = StyleSheet.create({
    parentViewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    viewOneStyle: {
        borderWidth: 1,
        borderColor: 'rgb(200, 0, 0)',
        backgroundColor: 'rgba(155, 0, 0, .5)',
        height: 70,
        flex: 1,
    },
    viewTwoStyle: {
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 155, 0, .5)',
        height: 70,
        margin: 50,
        flex: 1,
        
    },
    viewThreeStyle: {
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'rgba(100, 0, 155, .5)',
        height: 70,
        flex: 1,
    },
});

export default BoxScreen;