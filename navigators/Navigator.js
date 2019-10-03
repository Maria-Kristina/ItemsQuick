import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../views/Home';
import Single from '../views/Single';
import Profile from '../views/Profile';
import Create from '../views/Create';
import ImageView from '../views/ImageView';
import Login from '../views/Login';
import Search from '../views/Search';
import Signup from '../views/Signup';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
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

const Navigator = createStackNavigator(
    // RouteConfigs
    {
      Home: {
        screen: TabNavigator,
        navigationOptions: {
          header: null,
        },
      },
      Single: {
        screen: Single,

      },
    },
);

export default createAppContainer(Navigator);
