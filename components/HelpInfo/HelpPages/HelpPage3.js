import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { HelpInfo } from '../HelpInfo';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

const HelpPage3 = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={30} color="#333" />
                        <Text style={styles.border} />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <HelpInfo
                        title={'Helptitle3'}
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
        padding: 20,
        alignItems: 'flex-start',
    },
    icon: {
        width: '100%',
        // marginTop: 10,
        // paddingBottom: 20,
        // borderBottomColor: 'grey',
        // borderBottomWidth: 1,
    },
    border: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
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
});

export default HelpPage3;
