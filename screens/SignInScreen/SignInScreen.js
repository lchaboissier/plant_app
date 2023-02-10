
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, Alert, TouchableOpacity } from 'react-native'
import Logo from '../../assets/icon.png'
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '../../firebase';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Connecté en tant que : ', user.email);
                showMessage({
                    message: "Authentification réussie !",
                    type: "success",
                    duration: 3000
                });
            })
            .catch(error => {
                if (error.code == "auth/email-already-in-use") {
                    Alert.alert("Erreur", "L'adresse e-mail a déjà été utilisé.");
                } else if (error.code == "auth/invalid-email") {
                    Alert.alert("Erreur", "Veuillez entrer une adresse e-mail et un mot de passe valide.");
                } else if (error.code == "auth/operation-not-allowed") {
                    Alert.alert("Erreur", "Opération non autorisé.");
                } else if (error.code == "auth/weak-password") {
                    Alert.alert("Erreur", "Le mot de passe est trop faible.");
                } else if (error.code === 'auth/wrong-password') {
                    Alert.alert("Erreur", 'Adresse e-mail ou mot de passe incorrect.');
                } else if (error.code === 'auth/user-not-found') {
                    Alert.alert("Erreur", 'Adresse e-mail ou mot de passe incorrect.');
                }
            })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Home')
            }
        })

        return unsubscribe
    }, [])

    let [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    });

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors }, } = useForm();

    const onSignInPressed = data => {
        console.log(data);
        // validate user
        navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <ScrollView style={{ backgroundColor: "#b0ffd0" }} showsVerticalScrollIndicator={false}>
                <FlashMessage position="top" />
                <View style={styles.root}>
                    <Image
                        source={Logo}
                        style={[styles.logo, { height: height * 0.3 }]}
                        resizeMode="contain"
                    />

                    <Text style={styles.title}>Connexion</Text>
                    <TextInput
                        name="email"
                        placeholder="Adresse E-mail"
                        value={email}
                        style={styles.textInput}
                        control={control}
                        rules={{ required: "L'adresse E-mail est obligatoire." }}
                        onChangeText={text => setEmail(text)}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            name="password"
                            placeholder="Mot de passe"
                            value={password}
                            style={styles.textInputPassword}
                            control={control}
                            rules={{ required: "Le mot de passe est obligatoire.", minLength: { value: 3, message: "Le mot de passe doit contenir au moins 3 caractères." } }}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={secureTextEntry}
                        />
                        <TouchableOpacity style={{
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            bottom: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} onPress={() => setSecureTextEntry(!secureTextEntry)}>
                            <FontAwesome
                                name={secureTextEntry ? 'eye' : 'eye-slash'}
                                size={20}
                                color='black'
                                style={{ marginRight: 10 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity title="Mot de passe oublié ?" style={styles.buttonPaddingRight} onPress={onForgotPasswordPressed}>
                            <Text style={styles.buttonStyleTextInfo}>Mot de passe oublié ?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity title="Pas encore de compte ? Créez-en un." style={styles.buttonPaddingLeft} onPress={onSignUpPress}>
                            <Text style={styles.buttonStyleTextInfo}>Créer un compte</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity title="Se connecter" style={styles.buttonStyle} onPress={handleLogin}>
                        <Text style={styles.buttonStyleText}>Se connecter</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        fontFamily: 'Montserrat',
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 100,
        fontFamily: 'Montserrat',
        marginTop: 30
    },
    title: {
        fontSize: 24,
        // fontWeight: 'bold',
        color: '#7cb89e',
        margin: 10,
        fontFamily: 'Montserrat-Bold',
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        padding: 15,
        marginVertical: 5,
        fontFamily: 'Montserrat',
    },
    buttonPaddingLeft: {
        paddingLeft: 45,
        // marginVertical: 5,
        fontFamily: 'Montserrat',
    },
    buttonPaddingRight: {
        paddingRight: 45,
        // marginVertical: 5,
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
    textInputPassword: {
        flex: 1,

        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 10,
        fontFamily: 'Montserrat'
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
    buttonStyleTextInfo: {
        color: 'gray',
        fontFamily: 'Montserrat'
    }
});

export default SignInScreen