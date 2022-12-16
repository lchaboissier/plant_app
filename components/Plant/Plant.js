import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Plant = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <View style={styles.textContainer}>
            <Text style={styles.itemText}>{props.text}</Text>
            <Text style={styles.itemSubText}>{props.subText}</Text>
        </View>
      </View>
      <View style={styles.valueContainer}>
        <Text>°C</Text>
        <Text>lux</Text>
        <Text>% d'humidité</Text>
      </View>
      <Icons name='chevron-right' style={styles.infoPlant}></Icons>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#dcfcec',
    padding: 25,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '100%',
    flexDirection: 'column',
    
  },
  itemSubText: {
    maxWidth: '100%',
    flexDirection: 'column',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  infoPlant: {
    color: 'black',
    fontSize: 15,
    textAlign: 'right',
    justifyContent: 'flex-end'
  },
  valueContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Plant;