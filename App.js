import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Accueil</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Paramètres</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator
          screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name == "Home") {
                    iconName = "home"
                } else if (route.name == "Settings") {
                    iconName = "settings"
                }

                return <Ionicons name={iconName} size={25} />
              }
          })}
        >
            <tab.Screen name='Home' component={HomeScreen} />
            <tab.Screen name='Settings' component={SettingsScreen} /> 
        </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// sectionTitle: {
//   fontSize: 24,
//   fontWeight: 'bold'
// },