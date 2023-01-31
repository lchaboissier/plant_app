import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Plant } from '../../components/Plant/Plant';
import { Help, handlePress } from '../../components/Help/Help';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Icons from 'react-native-vector-icons/FontAwesome';
// import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';

// import SignInScreen from './screens/AuthenticationScreen/SignInScreen';
// import { useNavigation } from '@react-navigation/native';
// import Navigation from './navigation';

const tab = createBottomTabNavigator();

function LogoutButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Ionicons name="ios-log-out" size={25} color="black" />
    </TouchableOpacity>
  );
}

const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LogoutButton onPress={() => alert('Déconnexion effectuée !')} />
      ),
    }, [navigation]);
  })
  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name == "Accueil") {
            iconName = "home"
          } else if (route.name == "Aide") {
            iconName = "help"
          }

          return <Ionicons name={iconName} size={25} />
        }
      })}
    >
      <tab.Screen
        style={
          {
            fontFamily: 'Montserrat',
            color: '#b0ffd0'
          }
        }
        name='Accueil'
        component={HomePage}

      />
      <tab.Screen style={{ fontFamily: 'Montserrat', color: '#b0ffd0' }} name='Aide' component={HelpPage} />
    </tab.Navigator>
  );
}



function HomePage() {
  return (
    <View style={styles.container}>
      {/* <Text style={{marginLeft:16, marginTop:16, fontSize: 18}}>Liste des plantes</Text> */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Liste des plantes</Text>
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
  const navigation = useNavigation();

  const onHelpPage1Press = () => {
    <handlePress page={'HelpPage1'} />
  };

  const onHelpPage2Press = () => {
    navigation.navigate('HelpPage2');
  };

  const onHelpPage3Press = () => {
    navigation.navigate('HelpPage3');
  };

  const onHelpPage4Press = () => {
    navigation.navigate('HelpPage4');
  };

  const onHelpPage5Press = () => {
    navigation.navigate('HelpPage5');
  };

  const onHelpPage6Press = () => {
    navigation.navigate('HelpPage6');
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginLeft: 16, marginTop: 16, fontSize: 18 }}>Problèmes courants</Text>
      <ScrollView>
        <View style={styles.box}>
          <Help title="Aide 1" nb="1" />
          <Help title="Aide 2" nb="2" />
          <Help title="Aide 3" onPress={{ onHelpPage3Press }} />
          <Help title="Aide 4" onPress={{ onHelpPage4Press }} />
          <Help title="Aide 5" onPress={{ onHelpPage5Press }} />
          <Help title="Aide 6" onPress={{ onHelpPage6Press }} />
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
  button: {
    marginRight: 15,
  },
});

export default HomeScreen;