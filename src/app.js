import React, {Component,PropTypes} from 'react';
import {StatusBar,StyleSheet, Text, View, NavigatorIOS,Navigator} from 'react-native';
import styles from './style/style';
import SplashScreen from '../src/scene/splash-screen';
import HomeScene from '../src/scene/home';
import SideMenu from 'react-native-side-menu';
import Menu from '../src/assets/menu';
import Icon from 'react-native-vector-icons/FontAwesome';
class App extends Component {
    constructor(props){
      super(props);
      this.state={
        isMenuSideBarOpen:false,
        selectedItem:'Home',
        menuIcon:false,
      }
    }

    toggle(){
      this.setState({
        isMenuSideBarOpen: !this.state.isOpen,
      })
    }

    updateMenuState(isOpen){
      this.setState({
        isMenuSideBarOpen:isOpen
      })
    }

    onMenuItemSelected = (item)=>{
      this.setState({
        isMenuSideBarOpen:false,
        selectedItem:item,
      })
    }

    componentDidMount() {
        // render menu icon
        Icon.getImageSource('bars', 30, 'white').then((source) => this.setState({ menuIcon: source }));
    }

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;
        if (!this.state.menuIcon) {
          return false;
        }
        return (
          // customize the splash screen duration by setting duration property, default is 1.5 seconds
          // customize the splash screen iamge path by setting logo property, default is ../src/assets/image/logo.jpeg
            <SplashScreen duration={2000} logo={require('../src/assets/image/logo.png')}>

                <SideMenu
                  menu={menu}
                  isOpen={this.state.isMenuSideBarOpen}
                  onChange={(isOpen)=>{this.updateMenuState(isOpen)}}
                >

                <StatusBar
                  backgroundColor="blue"
                  barStyle="light-content"
                />
                <NavigatorIOS
                  initialRoute={{
                    component: HomeScene,
                    title: this.state.selectedItem,
                    leftButtonIcon: this.state.menuIcon,
                    onLeftButtonPress: ()=>{
                      this.toggle();
                    }
                  }}
                  style={{flex: 1}}
                  tintColor="#FFFFFF"
                  titleTextColor="#FFFFFF"
                  barTintColor='#000099'
                >
                </NavigatorIOS>
              </SideMenu>

            </SplashScreen>
        );
    }
}
export default App;
