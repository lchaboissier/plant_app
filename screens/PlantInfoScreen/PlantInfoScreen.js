import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Button, ScrollView } from 'react-native';
import Plant from '../../components/Plant/Plant';
import { MaterialIcons } from '@expo/vector-icons';

const PlantInfoScreen = ({ navigation }) => {
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
        <View style={styles.content}>
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
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    justifyContent: 'space-between'
},
headerText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
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
