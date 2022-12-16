// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Plant } from '../../components/Plant/Plant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
// import Icons from 'react-native-vector-icons/FontAwesome';
import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';

// import SignInScreen from './screens/AuthenticationScreen/SignInScreen';
// import { useNavigation } from '@react-navigation/core';
// import Navigation from './navigation';

const tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
      <tab.Navigator
          screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name == "Home") {
                    iconName = "home"
                } else if (route.name == "Settings") {
                    iconName = "settings"
                }

                return <Ionicons name={iconName} size={25} />
              }
          })}
        >
            <tab.Screen style={{fontFamily: 'Montserrat-Regular', color: '#b0ffd0'}} name='Home' component={Home} />
            <tab.Screen style={{fontFamily: 'Montserrat-Regular', color: '#b0ffd0'}} name='Settings' component={Settings} /> 
        </tab.Navigator>
    );
}

  function Home() {
    return (
      <View style={styles.container}>  
      <Text style={{marginLeft:16, marginTop:16, fontSize: 18}}>Liste des plantes</Text>
      <ScrollView style={{width:'100%'}}>
      <View style={styles.box}>

          <Plant style={{fontFamily: 'Montserrat-Regular'}} text={'Title'} subText={'Subtitle'} />
      </View>
      </ScrollView>
      </View>
    );
}


    function Settings() {
    return (
        <View style={styles.container}>
          <Text style={{marginLeft:16, marginTop:16, fontSize: 18}}>Paramètres</Text>
          <View style={{ flexDirection: 'row'}}>
            <Text>Help 1</Text>
            <Icons name='chevron-right'></Icons>
          </View>
        </View>
    );

    

};



const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  
  container: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
    box: {
      width: '100%',
      height: '100%',
      padding: 25,
    },
});
  
export default HomeScreen;