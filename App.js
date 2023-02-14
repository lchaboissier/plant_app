import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Navigation from './navigation';
import { FontFamily } from './assets/util/CommonStyle';
import { useFonts } from 'expo-font';
import FlashMessage from "react-native-flash-message";


const App = () => {
  let [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <SafeAreaView style={styles.root}>
        <FlashMessage position="top" />
        <Navigation style={{ fontFamily: 'Montserrat' }} />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    fontFamily: 'Montserrat'
  },
});

export default App;
