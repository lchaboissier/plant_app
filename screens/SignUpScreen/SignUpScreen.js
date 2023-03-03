import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { auth } from '../../firebase';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            username: 'Test',
        },
    });
    const pwd = watch('password');
    const navigation = useNavigation();

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Le compte', user.email, 'a bien été créé !');
                navigation.navigate("SignIn");
            })
            .catch(error => alert(error.message))
    }

    const onTermsOfUsePressed = () => {
        navigation.navigate('TermsOfUse');
    };

    const onPrivacyPolicyPressed = () => {
        navigation.navigate('PrivacyPolicy');
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView style={{ backgroundColor: "#b0ffd0" }} showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Créer un compte</Text>

                <TextInput
                    name="username"
                    placeholder="Nom d'utilisateur"
                    control={control}
                    style={styles.textInput}
                    rules={{
                        required: 'Le nom d\'utilisateur est obligatoire.',
                        minLength: {
                            value: 3,
                            message: 'Le nom d\'utilisateur doit comporter au moins 3 caractères.'
                        },
                        maxLength: {
                            value: 24,
                            message: 'Le nom d\'utilisateur ne doit pas excéder 24 caractères.'
                        }
                    }}
                    onChangeText={text => setUsername(text)}
                />
                <TextInput
                    name="email"
                    placeholder="Adresse e-mail"
                    control={control}
                    style={styles.textInput}
                    rules={{
                        required: "L'adresse électronique est obligatoire.",
                        pattern: {
                            value: EMAIL_REGEX,
                            message: "Vous devez entrer une adresse électronique valide."
                        }
                    }}
                    onChangeText={text => setEmail(text)}
                />

                <TextInput
                    name="password"
                    placeholder="Mot de passe"
                    control={control}
                    style={styles.textInput}
                    secureTextEntry
                    rules={{
                        required: 'Le mot de passe est obligatoire.',
                        minLength: {
                            value: 8,
                            message: 'Le mot de passe doit comporter au moins 8 caractères.',
                        }
                    }}
                    onChangeText={text => setPassword(text)}
                />
                <TextInput
                    name="passwordRepeat"
                    placeholder="Retaper le mot de passe"
                    control={control}
                    style={styles.textInput}
                    // value={passwordRepeat}
                    // setValue={setPasswordRepeat}
                    secureTextEntry
                    rules={{
                        validate: value => value === pwd || 'Le mot de passe ne correspond pas.',
                    }}
                    onChangeText={text => setPasswordRepeat(text)}
                />

                <TouchableOpacity title="Créer un compte" style={styles.buttonStyle} onPress={handleSignUp}>
                    <Text style={styles.buttonStyleText}>Créer un compte</Text>
                </TouchableOpacity>

                <Text style={styles.text}>En vous inscrivant, vous confirmez que vous acceptez nos <TouchableOpacity onPress={() => onTermsOfUsePressed()}><Text style={styles.link}>conditions d'utilisation</Text></TouchableOpacity> et notre <TouchableOpacity onPress={() => onPrivacyPolicyPressed()}><Text style={styles.link}>politique de confidentialité</Text></TouchableOpacity>.</Text>

                <TouchableOpacity title="Vous avez déjà un compte ? Cliquez-ici" style={styles.button} onPress={onSignInPress}>
                    <Text style={styles.text}>Vous avez déjà un compte ? Cliquez-ici.</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        fontFamily: 'Montserrat',
    },
    title: {
        fontSize: 24,
        color: '#7cb89e',
        margin: 10,
        marginTop: 40,
        fontFamily: 'Montserrat-Bold'
    },
    text: {
        color: 'gray',
        marginVertical: 10,
        fontFamily: 'Montserrat',
    },
    link: {
        // marginTop: 2,
        color: '#7cb89e',
        fontFamily: 'Montserrat',
    },
    textInput: {
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

        padding: 15,
        marginVertical: 5,
        backgroundColor: '#7cb89e',
        alignItems: 'center',
        borderRadius: 5,
        fontFamily: 'Montserrat'
    },
    buttonStyleText: {
        color: 'white',
        fontFamily: 'Montserrat-Bold'
    },
});

export default SignUpScreen