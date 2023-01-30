import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Plant } from '../../components/Plant/Plant';
import { Help } from '../../components/Help/Help';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-web';
// import Icons from 'react-native-vector-icons/FontAwesome';
// import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';

// import SignInScreen from './screens/AuthenticationScreen/SignInScreen';
// import { useNavigation } from '@react-navigation/core';
// import Navigation from './navigation';

const tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == "HomePage") {
            iconName = "home"
          } else if (route.name == "HelpPage") {
            iconName = "help"
          }

          return <Ionicons name={iconName} size={25} />
        }
      })}
    >
      <tab.Screen style={{ fontFamily: 'Montserrat', color: '#b0ffd0' }} name='HomePage' component={HomePage} />
      <tab.Screen style={{ fontFamily: 'Montserrat', color: '#b0ffd0' }} name='HelpPage' component={HelpPage} />
    </tab.Navigator>
  );
}



function HomePage() {
  return (
    <View style={styles.container}>
      {/* <Text style={{marginLeft:16, marginTop:16, fontSize: 18}}>Liste des plantes</Text> */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Page A</Text>
        <Button
          title="Go to Page B"
        />
      </View>
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.box}>
          <Plant style={{ fontFamily: 'Montserrat' }}
            title={'Title'}
            subtitle={'Subtitle'}
            temperature={5}
            luminosity={5}
            humidity={5}
            icon={require('../../assets/icon.png')}
            iconSize={48} />
        </View>
      </ScrollView>
    </View>
  );
};


function HelpPage() {
  return (
    <View style={styles.container}>
      <Text style={{ marginLeft: 16, marginTop: 16, fontSize: 18 }}>Problèmes courants</Text>
      <ScrollView>
        <View style={styles.box}>
          <Help title="Aide 1" />
          <Help title="Aide 2" />
          <Help title="Aide 3" />
          <Help title="Aide 4" />
          <Help title="Aide 5" />
          <Help title="Aide 6" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Montserrat'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    fontFamily: 'Montserrat'
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  box: {
    width: '100%',
    height: '100%',
    padding: 25,
    fontFamily: 'Montserrat',
  },
  item: {
    fontSize: 22,
    backgroundColor: "#55ff9a",
    marginTop: 20,
    padding: 20,
    fontFamily: 'Montserrat'
  },
});

export default HomeScreen;