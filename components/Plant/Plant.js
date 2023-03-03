import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export const Plant = () => {

  const [temperature, setTemperature] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [humidity, setHumidity] = useState('');

  useEffect(() => {
    const userUid = firebase.auth().currentUser.uid;
    const dbRef = firebase.database().ref('ips/' + userUid);
    dbRef.on('value', (snapshot) => {
      const val = snapshot.val();
      setTemperature(val.temperature);
      setLuminosity(val.luminosity);
      setHumidity(val.humidity);
    });
  }, []);

  const navigation = useNavigation();

  const onPlantInfoPress = () => {
    navigation.navigate('PlantInfo');
  };

  const [showDetails, setShowDetails] = useState(false);

  const onDetailsPress = () => {
    setShowDetails(!showDetails);
  };

  return (
    <TouchableOpacity style={styles.fieldContainer} onPress={(onPlantInfoPress)}>
      <View style={{ width: '100%', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../assets/icon.png')}
            style={{ width: 50, height: 50, marginRight: 5 }}
          />
          <View style={{ marginRight: 20 }}>
            <Text style={styles.titleText}>Plante</Text>
            {/* <Text style={styles.subtitleText}>Connectée</Text> */}
          </View>
        </View>
        <View style={styles.valuesContainer}>
          <Text style={styles.valueText}>{temperature} °C</Text>
          <Text style={styles.valueText}>{luminosity} lux</Text>
          <Text style={styles.valueText}>{humidity} %</Text>
        </View>
        <Ionicons name="ios-arrow-forward" style={{ marginRight: 7 }} size={24} color="#000" />

        <TouchableOpacity style={styles.scrollButton} onPress={(onDetailsPress)}>
          <Ionicons name={showDetails ? 'ios-chevron-up' : 'ios-chevron-down'} size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {showDetails && (
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
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#b0ffd0',
    borderRadius: 10,
    fontFamily: 'Montserrat'
  },
  titleText: {
    // marginRight: 25,
    fontSize: 12,
    // fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold'
  },
  subtitleText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Montserrat'
  },
  valuesContainer: {
    // marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Montserrat'
  },
  valueText: {
    fontSize: 14,
    marginRight: 8,
    fontFamily: 'Montserrat'
  },
  dataContainer: {
    marginTop: 30,
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
    width: 32,
    height: 32,
    alignItems: 'center',
    fontFamily: 'Montserrat',
  },
  titleValue: {
    fontFamily: 'Montserrat',
  },
  value: {
    alignItems: 'center',
    fontFamily: 'Montserrat',
  },
});

export default Plant;
