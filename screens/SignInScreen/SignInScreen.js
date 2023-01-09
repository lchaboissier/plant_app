
import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../assets/icon.png'
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';
import { useFonts } from 'expo-font';

const SignInScreen = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    let [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
      });

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const { control, handleSubmit, formState: {errors}, } = useForm();

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
        <ScrollView style={{backgroundColor: "#b0ffd0"}} showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo} 
                    style={[styles.logo, {height: height * 0.3}]} 
                    resizeMode="contain" 
                />

                <Text style={styles.title}>Connexion</Text>
                <CustomInput
                    name="username"
                    placeholder="Nom d'utilisateur"
                    // value={username}
                    style={{ fontFamily: "Montserrat"}}
                    control={control}
                    rules={{required: "Le nom d'utilisateur est obligatoire."}}
                />
                <CustomInput
                    name="password"
                    placeholder="Mot de passe"
                    // value={password}
                    secureTextEntry
                    style={{ fontFamily: "Montserrat"}}
                    control={control}
                    rules={{required: "Le mot de passe est obligatoire.", minLength: {value: 3, message: "Le mot de passe doit contenir au moins 3 caractères."}}}
                />

                <CustomButton text="Se connecter" style={styles.button} onPress={handleSubmit(onSignInPressed)} />

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
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 100,
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