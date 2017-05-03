import React, {Component} from 'react';
import styles from '../style/style';
import {Text, View,TouchableHighlight, NavigatorIOS} from 'react-native';
import Page from '../scene/anotherPage';

class HomeScene extends Component{
  static title = 'Home';

  constructor(props){
    super(props);
    this.state={
      title:'Home'
    };
  }

  render(){
    return (
      <View style={styles.defaultContainer}>
          <Text style={styles.defaultText}>
              You are on the Home Page
          </Text>
          <View style={styles.group}>
            {this._renderRow("To another page", () => {
              this.props.navigator.push({
                title: Page.title,
                component: Page,
                passProps: {depth: this.props.depth ? this.props.depth + 1 : 1},
                onLeftButtonPress: () => this.props.navigator.pop(),
              });
            })}
          </View>
      </View>
    );
  }

  _renderRow = (title: string, onPress: Function) => {
    return (
      <View>
        <TouchableHighlight onPress={onPress}>
          <View style={styles.row}>
            <Text style={styles.rowText}>
              {title}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };
}

export default HomeScene;
