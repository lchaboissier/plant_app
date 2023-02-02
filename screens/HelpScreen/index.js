import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Help from '../../components/Help/Help';
const HelpScreen = ({ navigation }) => {

  const onHelpPage1Press = () => {
    navigation.navigate('HelpPage1');
  };

  const onHelpPage2Press = () => {
    navigation.navigate('HelpPage2');
  };

  const onHelpPage3Press = () => {
    navigation.navigate('HelpPage3');
  };

  const onHelpPage4Press = () => {
    navigation.navigate('HelpPage4');
  };

  const onHelpPage5Press = () => {
    navigation.navigate('HelpPage5');
  };

  const onHelpPage6Press = () => {
    navigation.navigate('HelpPage6');
  };
  return (
    <View style={styles.container}>
      <Text style={{ marginLeft: 16, marginTop: 16, fontSize: 18 }}>Problèmes courants</Text>
      <ScrollView>
        <View style={styles.box}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
              <Text style={styles.title}>{title}</Text>
              <Ionicons name="ios-arrow-forward" size={48} color="#333" />
            </View>
            <View style={styles.separator} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginLeft: 16,
    marginRight: 16,
  },
});

export default HelpScreen;
