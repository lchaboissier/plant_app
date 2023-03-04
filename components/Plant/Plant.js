import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {auth, database} from '../../firebase';
import useFetch from '../../hooks/useFetch';

export const Plant = ({ temperature, visibility, humidity }) => {
  const [sensor, setSensor] = useState({
    temperature: 0,
    humidity: 0,
    visibility: 0,
    // infrared: 0,
    // ultraviolet: 0,
    // moisture: 0
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
      // infrared: group.ir.value,
      // ultraviolet: parseFloat(group.uv.value).toFixed(2),
      // moisture: group.moisture.value,
      }))
    }
  }, [loading]);
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
            style={{ width: 50, height: 50, }}
          />
          <View style={{ marginRight: 5}}>
            <Text style={styles.titleText}>Plante</Text>
            {/* <Text style={styles.subtitleText}>{subtitle}</Text> */}
          </View>
        </View>
        <View style={styles.valuesContainer}>
          <Text style={styles.valueText}>{sensor.temperature} °C</Text>
          <Text style={styles.valueText}>{sensor.visibility} lm</Text>
          <Text style={styles.valueText}>{sensor.humidity} %</Text>
        </View>
        <Ionicons name="ios-arrow-forward" style={{ marginRight:15 }} size={24}  color="#000" />

        <TouchableOpacity style={styles.scrollButton} onPress={(onDetailsPress)}>
          <Ionicons name={showDetails ? 'ios-chevron-up' : 'ios-chevron-down'} size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {showDetails && (
        <View style={styles.dataContainer}>
          <View styles={styles.row}>
            <Image style={styles.imageData} source={require('../../assets/temperature-icon.png')} />
            <Text style={styles.titleValue}>Température</Text>
            <Text style={styles.value}>{sensor.temperature} °C</Text>
          </View>
          <View styles={styles.row}>
            <Image style={styles.imageData} source={require('../../assets/light-icon.png')} />
            <Text style={styles.titleValue}>Luminosité</Text>
            <Text style={styles.value}>{sensor.visibility} lux</Text>
          </View>
          <View styles={styles.row}>
            <Image style={styles.imageData} source={require('../../assets/humidity-icon.png')} />
            <Text style={styles.titleValue}>Humidité</Text>
            <Text style={styles.value}>{sensor.humidity} %</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>

    // <TouchableOpacity onPress={(onPlantInfoPress)}>
    //   <View>
    //     <Text style={styles.titleText}>{title}</Text>
    //     <Text style={styles.subtitleText}>{subtitle}</Text>
    //     <Text style={styles.valueText}>{temperature}°C</Text>
    //     <Text style={styles.valueText}>{luminosity} lux</Text>
    //     <Text style={styles.valueText}>{humidity}%</Text>
    //   </View>
    // </TouchableOpacity>

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
    // marginRight: 10,
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