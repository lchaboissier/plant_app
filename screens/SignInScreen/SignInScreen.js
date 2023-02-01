
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import Logo from '../../assets/icon.png'
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useFonts } from 'expo-font';
import { auth } from '../../firebase';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Connecté en tant que : ', user.email);
            })
            .catch(error => {
                if (error.code == "auth/email-already-in-use") {
                    Alert.alert("Erreur", "L'adresse email a déjà été utilisé.");
                } else if (error.code == "auth/invalid-email") {
                    Alert.alert("Erreur", "Veuillez entrer une adresse email et un mot de passe valide.");
                } else if (error.code == "auth/operation-not-allowed") {
                    Alert.alert("Erreur", "Opération non autorisé.");
                } else if (error.code == "auth/weak-password") {
                    Alert.alert("Erreur", "Le mot de passe est trop faible.");
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
                <View style={styles.root}>
                    <Image
                        source={Logo}
                        style={[styles.logo, { height: height * 0.3 }]}
                        resizeMode="contain"
                    />

                    <Text style={styles.title}>Connexion</Text>
                    <TextInput
                        name="email"
                        placeholder="Adresse Email"
                        value={email}
                        style={{ fontFamily: "Montserrat" }}
                        control={control}
                        rules={{ required: "L'adresse Email est obligatoire." }}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        name="password"
                        placeholder="Mot de passe"
                        value={password}
                        style={{ fontFamily: "Montserrat" }}
                        control={control}
                        rules={{ required: "Le mot de passe est obligatoire.", minLength: { value: 3, message: "Le mot de passe doit contenir au moins 3 caractères." } }}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry
                    />

                    <CustomButton text="Se connecter" style={styles.button} onPress={handleLogin} />

                    <CustomButton text="Mot de passe oublié ?" style={styles.button} onPress={onForgotPasswordPressed} type="info" />

                    <CustomButton text="Pas encore de compte ? Créez-en un." style={styles.button} onPress={onSignUpPress} type="info" />
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#7cb89e',
        margin: 10,
        fontFamily: 'Montserrat',
    },
    button: {
        fontFamily: 'Montserrat',
    }
});

export default SignInScreen