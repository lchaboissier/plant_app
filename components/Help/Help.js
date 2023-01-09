
import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity, 
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';

export const Help = ({ title, description }) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.title}>{title}</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#333" />
    </TouchableOpacity>
  );

    // const [Items, setItems] = useState([
    //     { key: 1, item: 'Item 1' },
    //     { key: 2, item: 'Item 2' },
    //     { key: 3, item: 'Item 3' },
    //     { key: 4, item: 'Item 4' },
    //     { key: 5, item: 'Item 5' },
    //   ]);
    
    //   return (
    //     <ScrollView
    //       style={styles.body}
    //     >
    //       {
    //         Items.map((object) => {
    //           return (
    //             <View style={styles.item} key={object.key}>
    //               <Text style={styles.text}>{object.item}</Text>
    //               <Icons name='chevron-right' style={styles.infoHelp}></Icons>
    //             </View>
    //           )
    //         })
    //       }
    //     </ScrollView>
    //   );
    };
    
const styles = StyleSheet.create({
    // body: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     backgroundColor: '#ffffff',
    //   },
    // item: {
    //     margin: 10,
    //     marginBottom: 20,
    //     // backgroundColor: '#d6d6d6',
    //     borderWidth: 0,
    //     borderRadius: 4,
    //     borderBottomWidth: 1,
    //     borderBottomColor: 'grey',
        
    //   },
    // text: {
    //     color: '#000000',
    //     fontSize: 16,
    //     margin: 8,
    //   },
    // infoHelp: {
    //     color: 'black',
    //     fontSize: 15,
    //     textAlign: 'right',
    //     justifyContent: 'flex-end'
    //   },
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