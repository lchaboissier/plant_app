import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigation from './navigation';
import { FontFamily } from './assets/util/CommonStyle';
  
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    fontFamily: FontFamily.regular
  },
});

export default App;