// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icons from 'react-native-vector-icons/FontAwesome';
import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
// import Plant from './components/Plant';
// import SignInScreen from './screens/AuthenticationScreen/SignInScreen';
// import { useNavigation } from '@react-navigation/core';
// import Navigation from './navigation';

const tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <View style={styles.container}>
        
        <Text style={{fontFamily: 'Montserrat-Regular', marginLeft:16}}>Liste des plantes</Text>
        {/* <ScrollView style={{width:'100%'}}> */}
        {/* <View style={styles.box}> */}
            {/* <View style={styles.circleStyle} /> */}
            {/* <Plant style={{fontFamily: 'Montserrat-Regular'}} text={'Title'} subText={'Subtitle'} /> */}
        {/* </View> */}
        {/* </ScrollView> */}
        </View>
    );
    }

    function SettingsScreen() {
    return (
        <View style={styles.container}>
          <Text style={{fontFamily: 'Montserrat-Regular', marginLeft:16}}>Paramètres</Text>
        </View>
    );

//     <NavigationContainer>
//       <tab.Navigator
//           screenOptions={({route}) => ({
//               tabBarIcon: ({focused, color, size}) => {
//                 let iconName;

//                 if (route.name == "Home") {
//                     iconName = "home"
//                 } else if (route.name == "Settings") {
//                     iconName = "settings"
//                 }

//                 return <Ionicons name={iconName} size={25} />
//               }
//           })}
//         >
//             <tab.Screen style={{fontFamily: 'Montserrat-Regular', color: '#b0ffd0'}} name='Home' component={HomeScreen} />
//             <tab.Screen style={{fontFamily: 'Montserrat-Regular', color: '#b0ffd0'}} name='Settings' component={SettingsScreen} /> 
//         </tab.Navigator>
//     </NavigationContainer>
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  
  container: {
      flex: 1,
      backgroundColor: '#b0ffd0'
    },
    box: {
      width: '100%',
      height: '100%',
      padding: 25,
    },
    circleStyle: {
      width: 100,
      height: 100,
      borderRadius: 100/4,
      backgroundColor: '#b0ffd0',
    },
});
  
export default HomeScreen;