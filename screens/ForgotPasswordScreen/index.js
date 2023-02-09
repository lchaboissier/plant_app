import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useForm } from 'react-hook-form';
import { auth } from '../../firebase';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const { control, formState: { errors }, } = useForm();

    const changePassword = email => {
        auth.sendPasswordResetEmail(email)
          .then(() => {
            console.log("Password reset email sent successfully.");
          })
          .catch(error => {
            console.error("Error sending password reset email:", error);
          });
    };

    const handleSubmit = event => {
        event.preventDefault();
        this.sendPasswordReset(this.state.email);
      };

    // useEffect(() => {
    //     firebaseapp.firestore().collection("users").doc(auth.currentUser.uid).get()
    //         .then((snapshot) => {
    //             if(snapshot.exists){
    //                 setName(snapshot.data())
    //             }
    //             else {
    //                 console.log('n\'existe pas.')
    //             }
    //         })
    // }, [])

    return (
        <ScrollView style={{ backgroundColor: "#b0ffd0", fontFamily: 'Montserrat' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={30} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Mot de passe oublié ?</Text>
                    <View style={styles.rightComponent} />
                </View>
                <View style={styles.border} />
                <View style={styles.shadow} />
                <View style={styles.content}>
                    <ScrollView style={{ backgroundColor: "#b0ffd0", fontFamily: 'Montserrat' }} showsVerticalScrollIndicator={false}>
                        <View style={styles.root}>
                            <Text style={styles.title}>Réinitialisation du mot de passe</Text>
                            <Text style={styles.subtitle}>Saisissez une adresse électronique associée à votre compte et nous vous enverrons un courriel contenant les instructions pour réinitialiser votre mot de passe.</Text>
                            <TextInput
                                name="email"
                                placeholder="Entrez votre adresse E-mail."
                                value={email}
                                style={styles.textInput}
                                rules={{ required: "L'adresse E-mail est obligatoire." }}
                            
                            />
                        </View>
                        <TouchableOpacity title="Envoyer" style={styles.buttonStyle} onPress={changePassword}>
                            <Text style={styles.buttonStyleText}>Envoyer</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        fontFamily: 'Montserrat',
    },
    header: {
        backgroundColor: '#50a77c',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat',
        justifyContent: 'space-between',
        // marginTop: 10
        paddingTop: 20
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
        borderBottomColor: '#b0ffd0',
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
    textInput: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 20,
        fontFamily: 'Montserrat'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Montserrat',
    },
    subtitle: {
        marginBottom: 20
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
        marginBottom: 50
    },
    buttonStyle: {
        width: '100%',
        marginTop: 40,
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#7cb89e',
        alignItems: 'center',
        borderRadius: 5,
        fontFamily: 'Montserrat'
    },
    buttonStyleText: {
        // fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Montserrat-Bold'
    },
});

export default ForgotPasswordScreen