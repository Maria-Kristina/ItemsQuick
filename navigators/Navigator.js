import {createAppContainer, createSwitchNavigator} from 'react-navigation';
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
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search',
    },
  },
  Create: {
    screen: Create,
    navigationOptions: {
      title: 'Create',
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
      Signup: {
        screen: Signup,
      },
      Single: {
        screen: Single
      },
      ImageView: {
        screen: ImageView,
      },
    }
);

const Navigator = createSwitchNavigator(
  {
    App: stackNavigator,
    Login: Login,
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(Navigator);
