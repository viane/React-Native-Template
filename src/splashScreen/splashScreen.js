import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from '../style/style';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        };
    }

    timer() {
        setTimeout(() => {
            this.setState({done: true});
        }, this.props.duration || 1500)
    }

    componentDidMount() {
        this.timer();
    }

    render() {

        return (
          this.state.done ? (
            //if done, show all nested children
            {...this.props.children}
          ) : (
            //else keep render splash screen
                <View style={styles.splashScreenContainer}>
                  <Image style={styles.splashScreenLogo} source={this.props.logo} resizeMode={Image.resizeMode.center}/>
                    <Text style={[styles.splashScreenFontColor, styles.splashScreenFontTitle]}>
                        Splash Screen Title
                    </Text>
                    <Text style={[styles.splashScreenFontColor, styles.splashScreenFontFooter]}>
                        Power by React Native
                    </Text>

                </View>
            )
        );
    }
}

export default SplashScreen;
