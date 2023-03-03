import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Button, ScrollView } from 'react-native';
import firebase from 'firebase';
import { auth, database } from '../../firebase';

const ConnectPlant = ({}) => {
  const [ip, setIp] = useState('');
 
  const styles = StyleSheet.create({
    root: {
      height: '100%',
      backgroundColor: '#fff',
    },
    container: {
      flex: 1,
      marginTop: 8,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#DFFFEB',
      width: '75%',
      height: '30%',
      justifyContent: 'center'
    },
    textInput: {
      marginTop: 20,
      backgroundColor: 'white',
      paddingHorizontal: 8,
      paddingVertical: 5,
      width: '100%',

      borderColor: '#e8e8e8',
      borderWidth: 1,
      borderRadius: 5,

      paddingHorizontal: 10,
      fontFamily: 'Montserrat'
    },
    button: {
      marginTop: 20,
      paddingHorizontal: 10,
      paddingVertical: 15,
      alignItems: 'center',
      backgroundColor: '#7cb89e',
      borderRadius: 10,
    },
    buttonText: {
      color: '#ffff',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    title: {
      fontFamily: 'Montserrat',
      fontSize: 15,
      textAlign: 'center',
      marginLeft: 20
    }
  });
    

  function handleChange() {
    if (ip.length > 0) {
      const userUID = auth.currentUser.uid;
      console.log(ip);
      database.ref('ips/' + userUID).set({
        address: ip,
        uid: userUID,
        temperature: 20,
        luminosity: 400,
        humidity: 40
      })
    }
  }

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Entrer l'IP de votre plante :</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setIp(text)}
          >
          </TextInput>
          <TouchableOpacity style={styles.button} onPress={handleChange}>
            <Text style={styles.buttonText}>Connect</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ConnectPlant;
