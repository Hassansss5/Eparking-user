import React from 'react'; 
import {
  ActivityIndicator,
  Button,
  StatusBar,
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Importing Users Screens
// import HomeScreen from './src/UserScreens/homeScreen';
import MapScreen from './src/UserScreens/MapScreen';
import UserBookingDetailsScreen from './src/UserScreens/UserBookingDetailsScreen';
import UserLoginScreen from './src/UserScreens/UserLoginScreen';
import UserProfileScreen from './src/UserScreens/UserProfileScreen';
import UserSignupScreen from './src/UserScreens/UserSignupScreen';
import UserUpdateScreen from './src/UserScreens/UserUpdateScreen';


// Importing Parking Provider Screens
// import ProviderBookingDetailsScreen from './src/ParkingProviderScreens/ProviderBookingDetailScreen';
// import ProviderLoginScreen from './src/ParkingProviderScreens/ProviderLoginScreen';
// import ProviderProfileScreen from './src/ParkingProviderScreens/ProviderProfileScreen';
// import ProviderSignupScreen from './src/ParkingProviderScreens/ProviderSignupScreen';
// import ProviderUpdateScreen from './src/ParkingProviderScreens/ProviderUpdateScreen';

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('token');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'userApp' : 'userAuth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});




const UserLoginFlow = createStackNavigator({ 
  // Home : HomeScreen,
  UserLoginScreen : UserLoginScreen,
  UserSignupScreen : UserSignupScreen,
 });

 const profileflow = createStackNavigator({ 
  UserProfile : UserProfileScreen,
  UserUpdate : UserUpdateScreen,
 });


//  const ProviderLoginFLow = createStackNavigator({ 
//     Home : HomeScreen,
//     ProviderLoginScreen : ProviderLoginScreen,
//     ProviderSignupScreen : ProviderSignupScreen
//  });

//  const UserMainFLow =  createBottomTabNavigator({
//   MapScreen : MapScreen,
//   UserBookingDetails : UserBookingDetailsScreen,
//   UserProfile  : createStackNavigator({
//       UserProfile : UserProfileScreen,
//       UserUpdate : UserUpdateScreen 
//     })
// })

//  const TabStack = ({
//   UserProfile  : createStackNavigator({
//       UserProfile : UserProfileScreen,
//       UserUpdate : UserUpdateScreen 
//     })
// })


const TabStack= createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    MapScreen: { 
      screen: MapScreen,
      navigationOptions: {
        
        tabBarIcon: ({tintColor}) =>  <Feather
        name='map'
        color={tintColor}
        size={25}
      />  
      }
    },
    UserBookingDetails: { 
      screen: UserBookingDetailsScreen,
      navigationOptions: {
       
        tabBarIcon: ({tintColor}) =>  <Feather
        name='info'
        color={tintColor}
        size={25}
      />
      }
    },
    UserProfile: { 
      screen: profileflow,
      navigationOptions: {
       
        tabBarIcon: ({tintColor}) =>  
        <Feather
        name='user'
        color={tintColor}
        size={25}
      />
      }
    },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
      initialRouteName: 'MapScreen',
      headerMode:'none',
      navigationOptions:{tabBarVisible: false},
      tabBarOptions: {
      activeTintColor: '#006F9C',
      inactiveTintColor:'#708090',
      showLabel: false,
      
    },

  }
);
// const ProviderMainFlow = createBottomTabNavigator({
//   ProviderDetails : ProviderBookingDetailsScreen,
//   ProviderProfileFLow : createStackNavigator({
//     ProviderProfile : ProviderProfileScreen,
//     ProviderUpdate : ProviderUpdateScreen 
//   }),
// })

// const switchNavigator = createSwitchNavigator({
//   UserLoginFlow: createStackNavigator({
//     Home : HomeScreen,
//     UserLoginScreen : UserLoginScreen,
//     UserSignupScreen : UserSignupScreen
//   }),
//   ProviderLoginFLow: createStackNavigator({
//     Home : HomeScreen,
//     ProviderLoginScreen : ProviderLoginScreen,
//     ProviderSignupScreen : ProviderSignupScreen
//   }),
//   UserMainFLow: createBottomTabNavigator({
//     MapScreen : MapScreen,
//     UserBookingDetails : UserBookingDetailsScreen,
//     UserProfileFLow : createStackNavigator({
//       UserProfile : UserProfileScreen,
//       UserUpdate : UserUpdateScreen 
//     })
//   }),
//   ProviderMainFlow: createBottomTabNavigator({
//     ProviderDetails : ProviderBookingDetailsScreen,
//     ProviderProfileFLow : createStackNavigator({
//       ProviderProfile : ProviderProfileScreen,
//       ProviderUpdate : ProviderUpdateScreen 
//     }),
//   })
// })
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    userAuth: UserLoginFlow,
    userApp: TabStack,
    // providerAuth: ProviderLoginFLow,
    // providerApp: ProviderMainFlow,

  },
  {
    initialRouteName: 'AuthLoading',
  }
));
