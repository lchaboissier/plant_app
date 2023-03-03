import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Button, ScrollView } from 'react-native';
import Plant from '../../components/Plant/Plant';
import { MaterialIcons } from '@expo/vector-icons';

import firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";

const PlantInfoScreen = ({ navigation, route }) => {
  const [temperature, setTemperature] = useState(null);
  const [luminosity, setLuminosity] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const userUID = firebase.auth().currentUser.uid;
    const plantRef = firebase.database().ref(`ips/${userUID}`);

    // Récupère les données de la plante connectée
    plantRef.on('value', (snapshot) => {
      const plantData = snapshot.val();

      // Met à jour les états avec les données de la plante connectée
      setTemperature(plantData.temperature);
      setLuminosity(plantData.luminosity);
      setHumidity(plantData.humidity);
    });

    // Retourne une fonction de nettoyage pour arrêter l'écoute des changements dans la base de données
    return () => {
      plantRef.off('value');
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={30} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Information de la plante</Text>
          <View style={styles.rightComponent} />
        </View>
        <View style={styles.border} />
        <View style={styles.shadow} />
        <Text style={styles.plantTitle}>Ma plante</Text>
        <View style={styles.plantContainer}>
          <Image style={{ width: 162, height: 162, marginBottom: 20 }} source={require('../../assets/icon.png')} />
          <View style={styles.dataContainer}>
            <View styles={styles.row}>
              <Image style={styles.imageData} source={require('../../assets/temperature-icon.png')} />
              <Text style={styles.titleValue}>Température</Text>
              <Text style={styles.value}>{temperature} °C</Text>
            </View>
            <View styles={styles.row}>
              <Image style={styles.imageData} source={require('../../assets/light-icon.png')} />
              <Text style={styles.titleValue}>Luminosité</Text>
              <Text style={styles.value}>{luminosity} lux</Text>
            </View>
            <View styles={styles.row}>
              <Image style={styles.imageData} source={require('../../assets/humidity-icon.png')} />
              <Text style={styles.titleValue}>Humidité</Text>
              <Text style={styles.value}>{humidity} %</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>

    // {/* <View style={styles.content}> */}
    // {/* <Image source={plant.icon} /> */}
    // <Plant icon={require('../../assets/icon.png')} />
    // {/* <Text>{plant.title}</Text> */}
    // <Plant title={'Title'} />
    // <View>
    // <View style={{ flexDirection: 'row' }}>
    // <Image style={{ width: 64, height: 64 }} source={require('../../assets/temperature-icon.png')} />
    // {/* <Text>Température: {plant.temperature}</Text> */}
    // <Plant temperature={5} />
    // </View>
    // <View style={{ flexDirection: 'row' }}>
    // <Image style={{ width: 64, height: 64 }} source={require('../../assets/light-icon.png')} />
    // {/* <Text>Luminosité: {plant.light}</Text> */}
    // <Plant luminosity={5} />
    // </View>
    // <View style={{ flexDirection: 'row' }}>
    // <Image style={{ width: 64, height: 64 }} source={require('../../assets/humidity-icon.png')} />
    // {/* <Text>Taux d'humidité: {plant.humidity}</Text> */}
    // <Plant humidity={5} />
    // </View>
    // </View>
    // </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Montserrat',
  },
  plantContainer: {
    // flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#b0ffd0',
    borderRadius: 10,
    fontFamily: 'Montserrat',
  },
  plantTitle: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    fontFamily: 'Montserrat',
  },
  row: {
    // width: '33.33%',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: 8,
    fontFamily: 'Montserrat',
  },
  imageData: {
    width: 64, 
    height: 64, 
    alignItems: 'center',
    fontFamily: 'Montserrat',
  },
  dataInfo: {
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
    fontFamily: 'Montserrat',
  },
  titleValue: {
    fontFamily: 'Montserrat',
  },
  value: {
    alignItems: 'center',
    fontFamily: 'Montserrat',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    justifyContent: 'space-between',
    marginTop: 10
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    marginTop: 10
  },
  icon: {
    width: '100%',
    marginTop: 10,
    // paddingBottom: 20,
    // borderBottomColor: 'grey',
    // borderBottomWidth: 1,
  },
  border: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    width: '100%',
    // marginTop: 15,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontFamily: 'Montserrat',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Montserrat',
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  rightComponent: {
    width: 30,
    fontFamily: 'Montserrat',
  },
  shadow: {
    width: '100%',
    height: 1,
    // marginTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
  },
});

export default PlantInfoScreen;
