import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Plant } from '../../components/Plant/Plant';
import { Help, handlePress } from '../../components/Help/Help';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from "firebase/app";
import "firebase/auth";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { Ionicons } from '@expo/vector-icons';
import ConnectPlant from '../ConnectPlant/ConnectPlant';
import {auth, database} from '../../firebase';
import useFetch from '../../hooks/useFetch'
// import Icons from 'react-native-vector-icons/FontAwesome';
// import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';

// import SignInScreen from './screens/AuthenticationScreen/SignInScreen';
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
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <LogoutButton onPress={() => alert('Déconnexion effectuée !')} />
  //     ),
  //   }, [navigation]);
  // })
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // L'utilisateur a été déconnecté
        console.log("Utilisateur déconnecté");
        navigation.navigate("SignIn");
        showMessage({
          message: "Vous vous êtes déconnecté.",
          type: "info",
          duration: 3000
        });
      })
      .catch(error => {
        // La déconnexion a échoué
        console.error(error);
      });
  };
  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#00d096',
        tabBarInactiveTintColor: 'grey',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = route.name;
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
        name='home'
        component={HomePage}
        options={{
          title: 'Accueil',
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="log-out-outline"
                size={26}
                color='#D22B2B'
                style={{ marginRight: 20, fontFamily: 'Montserrat' }}
                onPress={() => signOut()}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <tab.Screen
        style={
          {
            fontFamily: 'Montserrat',
            color: '#b0ffd0'
          }
        }
        name='add'
        component={ConnectPlant}
        options={{
          title: 'Ajouté',
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="log-out-outline"
                size={26}
                color='#D22B2B'
                style={{ marginRight: 20 }}
                onPress={() => signOut()}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <tab.Screen
        style={
          {
            fontFamily: 'Montserrat',
            color: '#b0ffd0'
          }
        }
        name='help'
        component={HelpPage}
        options={{
          title: 'Aide',
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="log-out-outline"
                size={26}
                color='#D22B2B'
                style={{ marginRight: 20 }}
                onPress={() => signOut()}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </tab.Navigator>
  );
}

function HomePage({ navigation }) {
  const [sensor, setSensor] = useState({
    temperature: 0,
    humidity: 0,
    visibility: 0,
    infrared: 0,
    ultraviolet: 0,
    moisture: 0
  });
  const ips = database.ref('ips/' + auth.currentUser.uid);
  let data;
  ips.on('value', (snapshot) => {
    data = snapshot.val();
  })

  const [loading, items] = useFetch('http://' + data?.address);

  useEffect(() => {
    if(!loading) {
      let group = {};
      items.forEach(item => {
        group[item.type] = item;
      });

      setSensor((s) => ({...s,
      temperature: parseFloat(group.temperature.value).toFixed(2),
      humidity: group.humidity.value,
      visibility: group.visibility.value,
      infrared: group.ir.value,
      ultraviolet: parseFloat(group.uv.value).toFixed(2),
      moisture: group.moisture.value,
      }))
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      <FlashMessage position="top" />
      {/* <Text style={{marginLeft:16, marginTop:16, fontSize: 18}}>Liste des plantes</Text> */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Liste des plantes</Text>
        <Text style={styles.subtitleText}>Vous trouverez ci-dessous la liste des plantes connectées.</Text>
        {/* <Button
          title="Se déconnecter"
          onPress={() => signOut()}
          navigation={useNavigation()}
        /> */}
      </View>
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.box}>
          <Plant style={{ fontFamily: 'Montserrat' }}
            title={'Title'}
            subtitle={'Subtitle'}
            temperature={sensor.temperature}
            luminosity={sensor.visibility}
            humidity={sensor.humidity}
            icon={require('../../assets/icon.png')}
            iconSize={48} />
        </View>
      </ScrollView>
    </View>
  );
};


function HelpPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ marginLeft: 16, marginTop: 16, fontSize: 18, fontFamily: 'Montserrat' }}>Problèmes courants</Text>
      <ScrollView>
        <View style={styles.box}>
          <Help title="Aide 1" screenName={'HelpPage1'} />
          <Help title="Aide 2" screenName={'HelpPage2'} />
          <Help title="Aide 3" screenName={'HelpPage3'} />
          <Help title="Aide 4" screenName={'HelpPage4'} />
          <Help title="Aide 5" screenName={'HelpPage5'} />
          <Help title="Aide 6" screenName={'HelpPage6'} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    fontFamily: 'Montserrat'
  },

  titleContainer: {
    width: '100%',
    padding: 16,
    fontFamily: 'Montserrat'
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Montserrat'
  },
  subtitleText: {
    fontSize: 12,
    fontFamily: 'Montserrat'
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
    fontFamily: 'Montserrat'
  },
});

export default HomeScreen;
