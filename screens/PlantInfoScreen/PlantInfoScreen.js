import React from 'react';
import { View, Text, Image } from 'react-native';

const PlantInfoScreen = ({ plant }) => {
  return (
    <View>
      <Image source={plant.icon} />
      <Text>{plant.title}</Text>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./temperature-icon.png')} />
          <Text>Température: {plant.temperature}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./light-icon.png')} />
          <Text>Luminosité: {plant.light}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./humidity-icon.png')} />
          <Text>Taux d'humidité: {plant.humidity}</Text>
        </View>
      </View>
    </View>
  );
};

export default PlantInfoScreen;
