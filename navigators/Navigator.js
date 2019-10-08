import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../views/Home';
import Single from '../views/Single';
import Profile from '../views/Profile';
import Upload from '../views/Upload';
import ImageView from '../views/ImageView';
import Login from '../views/Login';
import Search from '../views/Search';
import Signup from '../views/Signup';
import Payment from '../views/Payment';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search',
    },
  },
  Upload: {
    screen: Upload,
    navigationOptions: {
      title: 'Upload',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
    },
  },
},
{
  initialRouteName: 'Home',
});

const stackNavigator = createStackNavigator(
    // RouteConfigs
    {
      Home: {
        screen: TabNavigator,
        navigationOptions: {
          header: null,
        },
      },
      Single: {
        screen: Single
      },
      ImageView: {
        screen: ImageView,
      },
      Payment: {
        screen: Payment,
      },
    }
);

const loginNavigator = createStackNavigator(
    {
      Login: {
        screen: Login
      },
      Signup: {
        screen: Signup
      },
    },
);

const Navigator = createSwitchNavigator(
  {
    App: stackNavigator,
    Login: loginNavigator,
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(Navigator);
