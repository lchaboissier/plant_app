import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const TermsOfUseScreen = ({ navigation }) => {

    return (
        <ScrollView style={{ backgroundColor: '#b0ffd0', fontFamily: 'Montserrat' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons style={styles.icon} name="keyboard-arrow-left" size={30} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Conditions d'utilisation</Text>
                    <View style={styles.rightComponentcarefully} />
                </View>
                <View style={styles.border} />
                <View style={styles.shadow} />
                <View style={styles.content}>
                    <ScrollView style={{ backgroundColor: "#b0ffd0", fontFamily: 'Montserrat' }}>
                        <View>
                            <Text style={styles.title1}>Conditions d'utilisation</Text>
                            <Text style={styles.date}>Dernière mise à jour : 16 février 2023</Text>
                            <Text style={styles.paragraph}>
                                Veuillez lire attentivement les présentes conditions générales avant d'utiliser notre service.
                            </Text>
                            <Text style={styles.title1}>Interprétation et définitions</Text>
                            <Text style={styles.title2}>Interprétation</Text>
                            <Text style={styles.paragraph}>
                                Les mots dont la lettre initiale est en majuscule ont des significations définies dans les conditions suivantes. Les définitions suivantes ont le même sens, qu'elles apparaissent au singulier ou au pluriel.
                            </Text>
                            <Text style={styles.title2}>Définitions</Text>
                            <Text style={styles.paragraph}>Aux fins des présentes conditions générales :</Text>
                            <View style={styles.list}>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Application désigne le programme logiciel fourni par la société et téléchargé par vous sur tout appareil électronique, nommé plant_app </Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Boutique d'applications désigne le service de distribution numérique exploité et développé par Apple Inc. (Apple App Store) ou Google Inc. (Google Play Store) dans lequel l'Application a été téléchargée.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Affiliation désigne une entité qui contrôle, est contrôlée par ou est sous contrôle commun avec une partie, le terme "contrôle" désignant la propriété de 50 % ou plus des actions, participations ou autres titres donnant droit de vote pour l'élection des administrateurs ou d'autres pouvoirs de gestion.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Pays se réfère à : France</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Entreprise (désignée par les termes "la société", "nous", "notre" ou "nos" dans le présent accord) fait référence à plant_app.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Dispositif désigne tout appareil permettant d'accéder au Service tel qu'un ordinateur, un téléphone portable ou une tablette numérique.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Service fait référence à l'application.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Conditions générales (également dénommées "Conditions") désignent les présentes Conditions générales qui constituent l'intégralité de l'accord entre vous et la Société concernant l'utilisation du Service.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Service de médias sociaux tiers désigne tout service ou contenu (y compris les données, les informations, les produits ou les services) fourni par un tiers qui peut être affiché, inclus ou rendu disponible par le service.</Text>
                                </Text>
                                <Text style={styles.listItem}>
                                    <Text style={styles.paragraph}>⋅ Vous, désigne la personne physique qui accède au Service ou l'utilise, ou la société, ou l'entreprise, ou toute autre entité juridique au nom de laquelle cette personne physique accède au Service ou l'utilise, selon le cas.</Text>
                                </Text>
                            </View>
                            <Text style={styles.title2}>Reconnaissance</Text>
                            <Text style={styles.paragraph}>Ce sont les conditions générales régissant l'utilisation de ce Service et l'accord qui fonctionne entre Vous et la Société. Ces conditions générales définissent les droits et obligations de tous les utilisateurs concernant l'utilisation du Service.</Text>
                            <Text style={styles.paragraph}>Votre accès et votre utilisation du Service sont conditionnés par votre acceptation et votre respect des présentes Conditions générales. Ces conditions générales s'appliquent à tous les visiteurs, utilisateurs et autres personnes qui accèdent ou utilisent le Service.</Text>
                            <Text style={styles.paragraph}>En accédant ou en utilisant le Service, vous acceptez d'être lié par les présentes conditions générales. Si vous êtes en désaccord avec une partie de ces conditions générales, vous ne pouvez pas accéder au service.</Text>
                            <Text style={styles.paragraph}>Vous déclarez que vous avez plus de 18 ans. La Société n'autorise pas les personnes de moins de 18 ans à utiliser le Service.</Text>
                            <Text style={styles.paragraph}>Votre accès et votre utilisation du Service sont également conditionnés par votre acceptation et votre respect de la Politique de confidentialité de la Société. Notre Politique de confidentialité décrit Nos politiques et procédures sur la collecte, l'utilisation et la divulgation de Vos informations personnelles lorsque Vous utilisez l'Application ou le Site Internet et Vous informe de Vos droits en matière de confidentialité et de la manière dont la loi Vous protège. Veuillez lire attentivement Notre Politique de confidentialité avant d'utiliser Notre Service.</Text>
                            <Text style={styles.title2}>Liens vers d'autres sites web</Text>
                            <Text style={styles.paragraph}>Notre service peut contenir des liens vers des sites web ou des services tiers qui ne sont pas détenus ou contrôlés par la Société.</Text>
                            <Text style={styles.paragraph}>La Société n'a aucun contrôle sur, et n'assume aucune responsabilité pour, le contenu, les politiques de confidentialité, ou les pratiques de tout site web ou service tiers. Vous reconnaissez et acceptez en outre que la Société ne peut être tenue responsable, directement ou indirectement, de tout dommage ou perte causé ou prétendument causé par ou en relation avec l'utilisation ou la confiance dans un tel contenu, biens ou services disponibles sur ou par le biais de ces sites web ou services.</Text>
                            <Text style={styles.paragraph}>Nous vous conseillons vivement de lire les conditions générales et les politiques de confidentialité de tout site web ou service tiers que vous visitez.</Text>
                            <Text style={styles.title2}>Résiliation</Text>
                            <Text style={styles.paragraph}>Nous pouvons résilier ou suspendre votre accès immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans limitation, si vous enfreignez les présentes conditions générales.</Text>
                            <Text style={styles.paragraph}>Au moment de la résiliation, votre droit d'utiliser le service cessera immédiatement.</Text>
                            <Text style={styles.title2}>Limitation de la responsabilité</Text>
                            <Text style={styles.paragraph}>Malgré les dommages que vous pourriez subir, l'entière responsabilité de la Société et de l'un de ses fournisseurs en vertu de toute disposition des présentes Conditions et votre recours exclusif pour tout ce qui précède sera limité au montant effectivement payé par vous par le biais du Service ou à 100 USD si vous n'avez rien acheté par l'intermédiaire du Service.</Text>
                            <Text style={styles.paragraph}>Dans la mesure maximale autorisée par la loi applicable, en aucun cas la Société ou ses fournisseurs ne pourront être tenus responsables de tout dommage spécial, accessoire, indirect ou consécutif quel qu'il soit (y compris, mais sans s'y limiter, les dommages pour perte de profits, perte de données ou d'autres informations, pour interruption d'activité, pour préjudice personnel, perte de vie privée découlant de ou liée de quelque manière que ce soit à l'utilisation ou à l'incapacité d'utiliser le Service, les logiciels tiers et/ou le matériel tiers utilisés avec le Service, ou autrement en relation avec toute disposition des présentes Conditions), même si la Société ou tout fournisseur a été informé de la possibilité de tels dommages et même si le remède échoue dans son objectif essentiel. </Text>
                            <Text style={styles.paragraph}>Certains États ne permettent pas l'exclusion des garanties implicites ou la limitation de la responsabilité pour les dommages accessoires ou indirects, ce qui signifie que certaines des limitations ci-dessus peuvent ne pas s'appliquer. Dans ces États, la responsabilité de chaque partie sera limitée dans la plus grande mesure permise par la loi. La responsabilité de chaque partie est limitée.</Text>
                            <Text style={styles.title1}>
                                Clause de non-responsabilité "TEL QUEL" et "TEL QUE DISPONIBLE".
                            </Text>
                            <Text style={styles.paragraph}>
                                Le service vous est fourni "TEL QUEL" et "TEL QUE DISPONIBLE" et avec tous les défauts sans garantie.
                                défauts et vices, sans garantie d'aucune sorte. Dans la mesure maximale
                                loi applicable, la Société, pour son propre compte et pour le compte de ses
                                de ses sociétés affiliées et de leurs concédants de licence et prestataires de services respectifs
                                fournisseurs de services respectifs, rejette expressément toute garantie, qu'elle soit expresse,
                                explicite, implicite, statutaire ou autre, en ce qui concerne le service, notamment
                                y compris toutes les garanties implicites de qualité marchande, d'adéquation à un
                                particulier, de titre et d'absence de contrefaçon, ainsi que les garanties qui peuvent découler
                                des pratiques commerciales, des performances, des usages ou des pratiques commerciales.
                                Sans limitation de ce qui précède, la Société ne fournit aucune garantie ou engagement, et ne fait aucune représentation de quelque nature que ce soit.
                                garantie ou engagement, et ne fait aucune représentation de quelque nature que ce soit que le Service
                                répondra à vos besoins, obtiendra les résultats escomptés, sera compatible ou fonctionnera
                                ou fonctionnera avec tout autre logiciel, application, système ou service,
                                fonctionnera sans interruption, répondra à toute norme de performance ou de fiabilité
                                de performance ou de fiabilité ou qu'il sera exempt d'erreurs ou que les erreurs ou les défauts
                                corrigés.
                            </Text>
                            <Text style={styles.paragraph}>
                                Sans limiter la portée de ce qui précède, ni la Société ni aucun des
                                fournisseur de la société ne fait de déclaration ou de garantie de quelque nature que ce soit,
                                expresse ou implicite : (i) quant au fonctionnement ou à la disponibilité du
                                (i) quant au fonctionnement ou à la disponibilité du Service, ou des informations, du contenu, des matériaux ou des produits inclus
                                (ii) que le Service sera ininterrompu ou exempt d'erreurs ; (iii)
                                (iii) quant à l'exactitude, la fiabilité ou la mise à jour de toute information ou
                                contenu fourni par le service ; ou (iv) que le service, ses serveurs, le contenu ou les
                                serveurs, le contenu ou les courriers électroniques envoyés par la Société ou en son nom
                                sont exempts de virus, de scripts, de chevaux de Troie, de vers, de logiciels malveillants, de bombes à retardement ou d'autres éléments nuisibles.
                                ou d'autres composants nuisibles.
                            </Text>
                            <Text style={styles.paragraph}>
                                Certaines juridictions ne permettent pas l'exclusion de certains types de
                                garanties ou les limitations des droits statutaires applicables d'un consommateur,
                                ainsi, tout ou partie des exclusions et limitations ci-dessus peuvent ne pas s'appliquer à
                                vous. Dans ce cas, les exclusions et limitations énoncées dans cette section seront appliquées dans la plus grande mesure possible.
                                section seront appliquées dans toute la mesure où elles sont applicables en vertu de la
                                loi applicable.
                            </Text>
                            <Text style={styles.title2}>La loi qui gouverne</Text>
                            <Text style={styles.paragraph}>
                                Les lois du Pays, à l'exclusion de ses règles de conflits de lois, régissent les présentes Conditions et votre utilisation du Service. Votre utilisation de l'Application peut également être soumise à d'autres lois locales, étatiques, nationales ou internationales.
                            </Text>
                            <Text style={styles.title2}>Règlement des différends</Text>
                            <Text style={styles.paragraph}>
                                Si vous avez une préoccupation ou un différend concernant le Service, vous acceptez d'abord d'essayer de résoudre le différend de manière informelle en contactant la Société.
                            </Text>
                            <Text style={styles.title2}> Pour les utilisateurs de l'Union européenne (UE)</Text>
                            <Text style={styles.paragraph}>
                                Si Vous êtes un consommateur de l'Union européenne, vous bénéficierez de toute disposition obligatoire de la loi du pays dans lequel vous résidez.
                            </Text>
                            <Text style={styles.title2}>Conformité légale des États-Unis</Text>
                            <Text style={styles.paragraph}>
                                Vous déclarez et garantissez que (i) vous n'êtes pas situé dans un pays soumis à l'embargo du gouvernement des États-Unis, ou qui a été désigné par le gouvernement des États-Unis comme un pays " soutenant le terrorisme ", et (ii) vous ne figurez sur aucune liste de parties interdites ou restreintes du gouvernement des États-Unis.
                            </Text>
                            <Text style={styles.title1}>Sévérité et renonciation</Text>
                            <Text style={styles.title2}>Sévérabilité</Text>
                            <Text style={styles.paragraph}>
                                Si une disposition des présentes Conditions est jugée inapplicable ou invalide, cette disposition sera modifiée et interprétée de manière à atteindre les objectifs de cette disposition dans la plus grande mesure possible en vertu de la loi applicable et les autres dispositions resteront en vigueur.
                            </Text>
                            <Text style={styles.title2}>La renonciation</Text>
                            <Text style={styles.paragraph}>
                                Sauf disposition contraire des présentes, le fait de ne pas exercer un droit ou d'exiger l'exécution d'une obligation en vertu des présentes Conditions n'affecte pas la capacité d'une partie à exercer ce droit ou à exiger cette exécution à tout moment par la suite, et la renonciation à un manquement ne constitue pas une renonciation à tout manquement ultérieur.
                            </Text>
                            <Text style={styles.title2}>Interprétation de la traduction</Text>
                            <Text style={styles.paragraph}>
                                Les présentes conditions générales peuvent avoir été traduites si nous les avons mises à votre disposition sur notre service.
                                Vous acceptez que le texte original en anglais prévale en cas de litige.
                            </Text>
                            <Text style={styles.title2}>Modifications des présentes conditions générales</Text>
                            <Text style={styles.paragraph}>
                                Nous nous réservons le droit, à Notre seule discrétion, de modifier ou de remplacer les présentes Conditions à tout moment. Si une révision est importante, Nous ferons des efforts raisonnables pour fournir un préavis d'au moins 30 jours avant l'entrée en vigueur des nouvelles conditions. Ce qui constitue une modification importante sera déterminé à Notre seule discrétion.
                            </Text>
                            <Text style={styles.paragraph}>
                                En continuant d'accéder ou d'utiliser Notre Service après que ces révisions soient entrées en vigueur, Vous acceptez d'être lié par les conditions révisées. Si Vous n'acceptez pas les nouvelles conditions, en tout ou en partie, veuillez cesser d'utiliser le site web et le Service.
                            </Text>
                            <Text style={styles.title2}>Contactez-nous</Text>
                            <Text style={styles.paragraph}>
                                Si vous avez des questions sur les présentes conditions générales, vous pouvez nous contacter :
                            </Text>
                            <Text style={styles.paragraph}>Par email : contact@plant.com</Text>

                        </View>
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

export default TermsOfUseScreen