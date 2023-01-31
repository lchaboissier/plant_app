import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import Plant from '../../components/Plant/Plant';
import { Header } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


const PlantInfoScreen = ({ plant }) => {
  return (
    <View>
      <View>
        {/* <Image source={plant.icon} /> */}
        <Plant icon={require('../../assets/icon.png')} />
        {/* <Text>{plant.title}</Text> */}
        <Plant title={'Title'} />
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 64, height: 64 }} source={require('../../assets/temperature-icon.png')} />
            {/* <Text>Température: {plant.temperature}</Text> */}
            <Plant temperature={5} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 64, height: 64 }} source={require('../../assets/light-icon.png')} />
            {/* <Text>Luminosité: {plant.light}</Text> */}
            <Plant luminosity={5} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 64, height: 64 }} source={require('../../assets/humidity-icon.png')} />
            {/* <Text>Taux d'humidité: {plant.humidity}</Text> */}
            <Plant humidity={5} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlantInfoScreen;
