import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import firebase from "firebase/app";
import "firebase/auth";
import FlashMessage, { showMessage } from "react-native-flash-message";

const SettingsScreen = ({ navigation }) => {
    const signOut = () => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            // L'utilisateur a été déconnecté
            console.log("Utilisateur déconnecté");
            navigation.navigate("SignIn");
            showMessage({
              message: "Vous vous êtes déconnecté.",
              type: "info",
              duration: 3000
            });
          })
          .catch(error => {
            // La déconnexion a échoué
            console.error(error);
          });
      };
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF'}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={30} color="#333" />
                    </TouchableOpacity>
                    {/* <Text style={styles.headerText}>Paramètres</Text> */}
                    <View style={styles.rightComponent} />
                </View>
                <View style={styles.border} />
                <View style={styles.shadow} />
                <View style={styles.content}>
                    <View style={styles.container}>
                        <Text style={{ fontSize: 18, fontFamily: 'Montserrat' }}>Paramètres</Text>
                        <ScrollView>
                            <View style={styles.box}>
                                <TouchableOpacity style={styles.itemContainer} onPress={() => signOut()}>
                                    <Text style={styles.titleParameter}>Se déconnecter</Text>
                                    <Ionicons name="log-out-outline" size={24} color="#D22B2B" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemContainer}>
                                    <Text style={styles.titleParameter}>À propos</Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={24} color="#333" />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
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
        justifyContent: 'space-between',
        marginTop: 10
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
    titleParameter: {
        fontSize: 14,
        flex: 1,
        fontFamily: 'Montserrat'
    },
    box: {
        width: '100%',
        height: '100%',
        padding: 25,
        fontFamily: 'Montserrat',
    },
});

export default SettingsScreen