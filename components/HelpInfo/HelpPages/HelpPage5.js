import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { HelpInfo } from '../HelpInfo';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

const HelpPage5 = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={30} color="#333" />
                    </TouchableOpacity>
                </View>
                <View style={styles.border} />
                <View style={styles.shadow} />
                <View style={styles.content}>
                    <HelpInfo
                        title={'Helptitle5'}
                        description={loremIpsum.repeat(2)}
                    />
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
        alignItems: 'flex-start',
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

export default HelpPage5;
