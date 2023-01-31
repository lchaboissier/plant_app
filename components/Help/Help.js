import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, RefreshControl, } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const Help = ({ title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('HelpPage1');
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#333" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 16,
    flex: 1,
  },
});

export default Help;