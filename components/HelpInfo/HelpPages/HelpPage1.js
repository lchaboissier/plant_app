import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { HelpInfo } from '../HelpInfo';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

const HelpPage1 = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={30} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Aide 1</Text>
                    <View style={styles.rightComponent} />
                </View>
                <View style={styles.border} />
                <View style={styles.shadow} />
                <View style={styles.content}>
                    <HelpInfo
                        title={'Helptitle1'}
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
        fontFamily: 'Montserrat',
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
        fontFamily: 'Montserrat',
    },
    border: {
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        width: '100%',
        // marginTop: 15,
        fontFamily: 'Montserrat',
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontFamily: 'Montserrat',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Montserrat',
    },
    rightComponent: {
        width: 30,
        fontFamily: 'Montserrat',
      },
    description: {
        textAlign: 'center',
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
        fontFamily: 'Montserrat',
    },
});

export default HelpPage1;
