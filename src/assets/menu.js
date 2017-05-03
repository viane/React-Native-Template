import React, {Component} from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  View,TouchableHighlight, NavigatorIOS
} from 'react-native';
import styles from '../style/style';
import HomeScene from '../scene/home';
import Page from '../scene/anotherPage';

const window = Dimensions.get('window');

export default class Menu extends Component{
  constructor(props){
    super(props);
  }

  static propTypes={
    onItemSelected: React.PropTypes.func.isRequired,
  };

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

  render(){
    return(
      <ScrollView scrollsToTop={false} style={styles.sideMenuBar}>
        {this._renderRow("Home", function(){
          this.props.navigator.replace({
            title: 'Home',
            component: HomeScene,
            passProps: {depth: this.props.depth ? this.props.depth + 1 : 1},
            onLeftButtonPress: () => this.props.navigator.pop(),
          });
        })}

        {this._renderRow("Page", function(){
          this.props.navigator.replace({
            title: 'Page',
            component: Page,
            passProps: {depth: this.props.depth ? this.props.depth + 1 : 1},
            onLeftButtonPress: () => this.props.navigator.pop(),
          });
        })}
      </ScrollView>
    )
  }


}
