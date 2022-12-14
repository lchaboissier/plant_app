import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordRepeat, setPasswordRepeat] = useState('');

    const {control, handleSubmit, watch} = useForm({
        defaultValues: {
            username: 'Test',
        },
    });
    const pwd = watch('password');
    const navigation = useNavigation();

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    }

    // const {height} = useWindowDimensions();

    const onSignUpPressed = () => {
        console.warn('test signup');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView style={{backgroundColor: "#b0ffd0"}} showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Créer un compte</Text>

                <CustomInput
                    name="username"
                    placeholder="Nom d'utilisateur"
                    control={control}
                    rules={{
                        required: 'Le nom d\'utilisateur est obligatoire.',
                        minLength: {
                            value: 3,
                            message: 'Le nom d\'utilsiateur doit comporter au moins 3 caractères.'
                        },
                        maxLength: {
                            value: 24,
                            message: 'Le nom d\'utilsiateur ne doit pas excéder 24 caractères.'
                        }
                    }}
                />
                <CustomInput
                    name="email"
                    placeholder="Adresse e-mail"
                    control={control}
                    rules={{required: "L'adresse électronique est obligatoire.", pattern: {value: EMAIL_REGEX, message: "Vous devez entrer une adresse électronique valide."}}}
                />

                <CustomInput
                    name="password"
                    placeholder="Mot de passe"
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Le mot de passe est obligatoire.',
                        minLength: {
                            value: 8,
                            message: 'Le mot de passe doit comporter au moins 8 caractères.',
                        }
                    }}
                />
                <CustomInput
                    name="passwordRepeat"
                    placeholder="Retaper le mot de passe"
                    control={control}
                    // value={passwordRepeat}
                    // setValue={setPasswordRepeat}
                    secureTextEntry
                    rules={{
                        validate: value => value === pwd || 'Le mot de passe ne correspond pas.',
                    }}
                />

                <CustomButton text="Créer un compte" onPress={handleSubmit(onSignUpPressed)} />

                <Text style={styles.text}>En vous inscrivant, vous confirmez que vous acceptez nos <Text style={styles.link}>conditions d'utilisation</Text> et notre <Text style={styles.link}>politique de confidentialité</Text>.</Text>

                <CustomButton text="Vous avez déjà un compte ? Cliquez-ici" onPress={onSignInPress} type="info" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#7cb89e',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#7cb89e'
    },
});

export default SignUpScreen