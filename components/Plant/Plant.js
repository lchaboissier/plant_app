import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const Plant = ({ title, subtitle, temperature, humidity, luminosity }) => {

  const navigation = useNavigation();

  const onPlantInfoPress = () => {
    navigation.navigate('PlantInfo');
  };

  const [showMore, setShowMore] = useState(false);

  return (
    <TouchableOpacity style={styles.fieldContainer} onPress={(onPlantInfoPress)}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
      <View style={styles.valuesContainer}>
        <Text style={styles.valueText}>{temperature}°C</Text>
        <Text style={styles.valueText}>{luminosity} lux</Text>
        <Text style={styles.valueText}>{humidity}%</Text>
      </View>
      <Ionicons name="ios-arrow-forward" size={24} color="#000" />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#b0ffd0',
    borderRadius: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 14,
    color: '#666',
  },
  valuesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueText: {
    fontSize: 14,
    marginRight: 8,
  },

});

export default Plant;
