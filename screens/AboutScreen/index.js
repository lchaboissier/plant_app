import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const AboutScreen = ({ navigation }) => {

    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF', fontFamily: 'Montserrat' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={30} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>À propos</Text>
                    <View style={styles.rightComponent} />
                </View>
                <View style={styles.border} />
                <View style={styles.shadow} />
                <View style={styles.content}>
                    <View style={{ flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/icon.png')}
                            style={{ width: 150, height: 150, marginRight: 5, borderRadius: 10 }} />
                        <Text style={styles.titleApp}>Plant_app</Text>
                        <Text style={styles.versionApp}>Version de l'application : 1.0</Text>
                        <Text style={styles.authorApp}>Créée par Luca Chaboissier & Alexandre Saner.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

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
        justifyContent: 'space-between',
        marginTop: 10,
    },
    headerText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        marginTop: 10
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
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        fontFamily: 'Montserrat',
    },
    aboutContent: {
        flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center'
    },
    titlePage: {
        fontSize: 16,
        flex: 1,
        fontFamily: 'Montserrat'
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
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // padding: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        fontFamily: 'Montserrat'
    },
    titleApp: {
        marginVertical: 15,
        fontSize: 18,
        fontFamily: 'Montserrat'
    },
    versionApp: {
        marginVertical: 10,
        color: '#8c8c8c',
        fontFamily: 'Montserrat'
    },
    authorApp: {
        marginVertical: 32,
        fontSize: 13,
        color: '#8c8c8c',
        fontFamily: 'Montserrat',
        textAlign: 'center'
    },
});

export default AboutScreen