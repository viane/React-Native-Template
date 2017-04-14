import React from 'react';

import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    defaultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    defaultText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FF2342',
        marginBottom: 5
    },
    splashScreenContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    splashScreenFontColor: {
        color: '#000000'
    },
    splashScreenFontTitle: {
        flex: 0.55,
        fontSize: 45,
        fontWeight: '900',
        textAlign: 'center',
        fontFamily: 'AmericanTypewriter-CondensedBold'
    },
    splashScreenFontFooter:{
      flex: 0.05,
      fontSize: 15,
      fontWeight: '300',
      textAlign: 'center',
      fontFamily: 'AmericanTypewriter-light'
    },
    splashScreenFontText: {
        fontSize: 20
    },
    splashScreenLogo: {
        flex: 0.6,
        width:'50%',
        height:'50%',
        resizeMode: 'contain'
    }
});
