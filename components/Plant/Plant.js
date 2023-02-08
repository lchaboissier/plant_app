import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const Plant = ({ title, subtitle, temperature, humidity, luminosity }) => {

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
          <View style={{ marginRight: 20}}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subtitleText}>{subtitle}</Text>
          </View>
        </View>
        <View style={styles.valuesContainer}>
          <Text style={styles.valueText}>{temperature}°C</Text>
          <Text style={styles.valueText}>{luminosity} lux</Text>
          <Text style={styles.valueText}>{humidity}%</Text>
        </View>
        <Ionicons name="ios-arrow-forward" style={{ marginRight:15 }} size={24}  color="#000" />

        <TouchableOpacity style={styles.scrollButton} onPress={(onDetailsPress)}>
          <Ionicons name="ios-arrow-down" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {showDetails && (
        <View style={styles.dataContainer}>
          <View styles={styles.row}>
            <Image style={styles.imageData} source={require('../../assets/temperature-icon.png')} />
            <Text style={styles.titleValue}>Température</Text>
            <Text style={styles.value}>- °C</Text>
          </View>
          <View styles={styles.row}>
            <Image style={styles.imageData} source={require('../../assets/light-icon.png')} />
            <Text style={styles.titleValue}>Luminosité</Text>
            <Text style={styles.value}>- lux</Text>
          </View>
          <View styles={styles.row}>
            <Image style={styles.imageData} source={require('../../assets/humidity-icon.png')} />
            <Text style={styles.titleValue}>Humidité</Text>
            <Text style={styles.value}>- %</Text>
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
    fontSize: 16,
    // fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold'
  },
  subtitleText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Montserrat'
  },
  valuesContainer: {
    marginRight: 40,
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
