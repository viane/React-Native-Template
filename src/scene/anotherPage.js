import React, {Component} from 'react';
import styles from '../style/style';
import {Text, View} from 'react-native';

class Page extends Component{
  static title = 'New Page';

  render(){
    return (
      <View style={styles.defaultContainer}>
          <Text style={styles.defaultText}>
              You are on the different Page
          </Text>
      </View>
    );
  }
}

export default Page;
