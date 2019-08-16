import Login from "./Screens/AuthModule/Login";
import SignUp from "./Screens/AuthModule/SignUp";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import SplashScreen from "./Screens/SplashScreen";

// const TabNavigator = createBottomTabNavigator({
//     Scanner: Scanner,
//     ChatList: ChatList,
//     Profile: Profile,
// },

//     {
//         defaultNavigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, horizontal, tintColor }) => {
//                 const { routeName } = navigation.state;
//                 if (routeName === 'GroupChat') {
//                     return <Image style={{ height: 30, width: 30, tintColor }} source={Images.Camera1} />
//                 } else if (routeName === 'ChatList') {
//                     return <Image style={{ height: 25, width: 25, tintColor }} source={Images.Chat} />
//                 } else if (routeName === 'Profile') {
//                     return <Image style={{ height: 25, width: 25, tintColor }} source={Images.Profile} />
//                 }
//             },
//             tabBarOnPress: (scene, jumpToIndex) => {
//                 navigation.navigate(scene.navigation.state.key, { change: true });
//             }
//         }),
//         tabBarOptions: {
//             activeTintColor: 'white',
//             inactiveTintColor: 'grey',
//             showLabel: false,
//             style: {
//                 backgroundColor: '#3e3e3e',
//                 paddingTop: 10,
//             }
//         },
//     },
// );

const AppNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null
        }
    }
},
    {
        initialRouteName: 'SplashScreen'
    }
);

export default createAppContainer(AppNavigator);