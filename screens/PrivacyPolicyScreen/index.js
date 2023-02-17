import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const PrivacyPolicyScreen = ({ navigation }) => {

    return (
        <ScrollView style={{ backgroundColor: '#b0ffd0', fontFamily: 'Montserrat' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={30} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Politique de confidentialité</Text>
                    <View style={styles.rightComponentcarefully} />
                </View>
                <View style={styles.border} />
                <View style={styles.shadow} />
                <View style={styles.content}>
                    <ScrollView style={{ backgroundColor: "#b0ffd0", fontFamily: 'Montserrat' }}>
                        <View>
                            <Text style={styles.title1}>Politique de confidentialité</Text>

                            <Text style={styles.paragraph}>
                                L'application mobile plant_app est détenu par Plant, qui est un contrôleur de données de vos données personnelles.
                            </Text>

                            <Text style={styles.paragraph}>
                                Nous avons adopté cette politique de confidentialité, qui détermine la manière dont nous traitons les informations collectées par plant_app, qui fournit également les raisons pour lesquelles nous devons collecter certaines données personnelles vous concernant. Par conséquent, vous devez lire cette politique de confidentialité avant d'utiliser le application mobile de plant_app.
                            </Text>

                            <Text style={styles.paragraph}>
                                Nous prenons soin de vos données personnelles et nous nous engageons à en garantir la confidentialité et la sécurité.
                            </Text>

                            <Text style={styles.title2}>
                                Les informations personnelles que nous collectons :
                            </Text>

                            <Text style={styles.paragraph}>
                                Lorsque vous visitez l'application plant_app, nous recueillons automatiquement certaines informations sur votre appareil, notamment des informations sur votre application mobile, votre adresse IP, votre fuseau horaire et certains des cookies installés sur votre appareil. En outre, lorsque vous naviguez sur le site, nous recueillons des informations sur les pages web ou les produits individuels que vous consultez, sur les sites web ou les termes de recherche qui vous ont renvoyé au site et sur la manière dont vous interagissez avec le site. Nous désignons ces informations collectées automatiquement par le terme "informations sur les appareils". En outre, nous pourrions collecter les données personnelles que vous nous fournissez (y compris, mais sans s'y limiter, le nom, le prénom, l'adresse, les informations de paiement, etc.) lors de l'inscription afin de pouvoir exécuter le contrat.
                            </Text>

                            <Text style={styles.title2}>
                                Pourquoi traitons-nous vos données ?
                            </Text>

                            <Text style={styles.paragraph}>
                                Notre priorité absolue est la sécurité des données des clients et, à ce titre, nous ne pouvons traiter que des données minimales sur les utilisateurs, uniquement dans la mesure où cela est absolument nécessaire pour maintenir le application mobile. Les informations collectées automatiquement sont utilisées uniquement pour identifier les cas potentiels d'abus et établir des informations statistiques concernant l'utilisation du application mobile. Ces informations statistiques ne sont pas autrement agrégées de manière à identifier un utilisateur particulier du système.
                            </Text>

                            <Text style={styles.paragraph}>
                                Vous pouvez visiter le application mobile sans nous dire qui vous êtes ni révéler d'informations, par lesquelles quelqu'un pourrait vous identifier comme un individu spécifique et identifiable. Toutefois, si vous souhaitez utiliser certaines fonctionnalités du application mobile, ou si vous souhaitez recevoir notre lettre d'information ou fournir d'autres détails en remplissant un formulaire, vous pouvez nous fournir des données personnelles, telles que votre e-mail, votre prénom, votre nom, votre ville de résidence, votre organisation, votre numéro de téléphone. Vous pouvez choisir de ne pas nous fournir vos données personnelles, mais il se peut alors que vous ne puissiez pas profiter de certaines fonctionnalités du application mobile. Par exemple, vous ne pourrez pas recevoir notre bulletin d'information ou nous contacter directement à partir du application mobile. Les utilisateurs qui ne savent pas quelles informations sont obligatoires sont invités à nous contacter via contact@plant.com.
                            </Text>

                            <Text style={styles.title2}>
                                Vos droits
                            </Text>

                            <Text style={styles.paragraph}>
                                Si vous êtes un résident européen, vous disposez des droits suivants liés à vos données personnelles :
                            </Text>

                            <View style={styles.list}>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Le droit d'être informé.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Le droit d'accès.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Le droit de rectification.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Le droit à l'effacement.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Le droit de restreindre le traitement.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Le droit à la portabilité des données.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Le droit d'opposition.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Les droits relatifs à la prise de décision automatisée et au profilage.</Text>
                                </Text>
                            </View>
                        </View>

                        <Text style={styles.paragraph}>
                            Si vous souhaitez exercer ce droit, veuillez nous contacter via les coordonnées ci-dessous.
                        </Text>

                        <Text style={styles.paragraph}>
                        En outre, si vous êtes un résident européen, nous notons que nous traitons vos informations afin d'exécuter les contrats que nous pourrions avoir avec vous (par exemple, si vous passez une commande par le biais du site), ou autrement pour poursuivre nos intérêts commerciaux légitimes énumérés ci-dessus. En outre, veuillez noter que vos informations pourraient être transférées en dehors de l'Europe, y compris au Canada et aux États-Unis.
                        </Text>

                        <Text style={styles.title2}>
                        Liens vers d'autres sites web :
                        </Text>

                        <Text style={styles.paragraph}>
                        Notre application mobile peut contenir des liens vers d'autres sites web qui ne sont pas détenus ou contrôlés par nous. Sachez que nous ne sommes pas responsables de ces autres sites web ou des pratiques de confidentialité des tiers. Nous vous encourageons à être attentif lorsque vous quittez notre application mobile et à lire les déclarations de confidentialité de chaque application mobile susceptible de collecter des informations personnelles.
                        </Text>

                        <Text style={styles.title2}>
                        Sécurité de l'information :
                        </Text>

                        <Text style={styles.paragraph}>
                        Nous sécurisons les informations que vous fournissez sur des serveurs informatiques dans un environnement contrôlé et sécurisé, protégé contre tout accès, utilisation ou divulgation non autorisés. Nous conservons des garanties administratives, techniques et physiques raisonnables pour nous protéger contre tout accès, utilisation, modification et divulgation non autorisés des données personnelles sous son contrôle et sa garde. Toutefois, aucune transmission de données sur Internet ou sur un réseau sans fil ne peut être garantie.
                        </Text>

                        <Text style={styles.title2}>
                        Divulgation légale :
                        </Text>

                        <Text style={styles.paragraph}>
                        Nous divulguerons toute information que nous collectons, utilisons ou recevons si la loi l'exige ou l'autorise, par exemple pour nous conformer à une citation à comparaître ou à une procédure judiciaire similaire, et lorsque nous pensons de bonne foi que la divulgation est nécessaire pour protéger nos droits, votre sécurité ou celle d'autrui, enquêter sur une fraude ou répondre à une demande du gouvernement.
                        </Text>

                        <Text style={styles.title2}>
                        Informations de contact :
                        </Text>

                        <Text style={styles.paragraph}>
                        Si vous souhaitez nous contacter pour comprendre davantage la présente politique ou si vous souhaitez nous contacter concernant toute question relative aux droits individuels et à vos informations personnelles, vous pouvez envoyer un courriel à contact@plant.com.
                        </Text>
                    </ScrollView>
                </View >
            </View >
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
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
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
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
    title1: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        marginVertical: 20
    },
    title2: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        marginVertical: 20
    },
    subtitle: {
        marginBottom: 20,
        fontFamily: 'Montserrat'
    },
    date: {
        marginBottom: 20
    },
    paragraph: {
        fontSize: 14,
        marginBottom: 10,
        fontFamily: 'Montserrat'
    },
    list: {
        fontFamily: 'Montserrat'
    },
    listItem: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'Montserrat'
    },
    textContent: {
        fontSize: 12,
        marginBottom: 20,
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
        // marginBottom: 10
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

export default PrivacyPolicyScreen