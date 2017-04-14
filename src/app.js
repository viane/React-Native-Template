import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './style/style';
import SplashScreen from './splashScreen/splashScreen';
class App extends Component {
    render() {
        return (
          // customize the splash screen duration by setting duration property, default is 1.5 seconds
          // customize the splash screen iamge path by setting logo property, default is ../src/assets/image/logo.jpeg
            <SplashScreen duration={2000} logo={require('../src/assets/image/logo.png')}>
                <View style={styles.defaultContainer}>
                    <Text style={styles.defaultText}>
                        Hello World!
                    </Text>
                </View>
            </SplashScreen>
        );
    }
}

export default App;
