import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
// import HeaderWithoutMenu from '../components/headerMenuX';

// const perfilIMG = require("../../../assets/images/perfil.png");
// const calendarioIMG = require("../../../assets/images/calendar.png");
// const listaPacienteIMG = require("../../../assets/images/lista_paciente.png");
// const faqIMG = require("../../../assets/images/faq.png");
// const chatIMG = require("../../../assets/images/chat_bubble.png");
// const globoIMG = require("../../../assets/images/globe.png");
// const configuracoesIMG = require("../../../assets/images/Settings.png");

const Menu = () => {
    return (
        <>
            {/* <HeaderWithoutMenu /> */}
            <View>
                <Text style={styles.menuTitle}>Menu</Text>
            </View>
            <View style={styles.menuDirection}>
                <View style={styles.images}>
                    {/* <Link href='/perfil'>
                        <Image source={perfilIMG} style={styles.menuIcons}></Image>
                    </Link>
                    <Link href='/calendario'>
                        <Image source={calendarioIMG} style={styles.menuIcons}></Image>
                    </Link>
                    <Link href='/pacientes'>
                        <Image source={listaPacienteIMG} style={styles.menuIcons}></Image>
                    </Link>
                    <Link href='/'>
                        <Image source={chatIMG} style={styles.menuIcons}></Image>
                    </Link>
                    <Link href='/faq'>
                        <Image source={faqIMG} style={styles.menuIcons}></Image>
                    </Link>
                    <Link href='/'>
                        <Image source={globoIMG} style={styles.menuIcons}></Image>
                    </Link>
                    <Link href='/'>
                        <Image source={configuracoesIMG} style={styles.menuIcons}></Image>
                    </Link> */}
                </View>

                <View style={styles.links}>
                    {/* <Link href='/perfil'>
                        <Text>Perfil</Text>
                    </Link>
                    <Link href='/calendario'>
                        <Text>Calendário</Text>
                    </Link>
                    <Link href='/pacientes'>
                        <Text>Pacientes</Text>
                    </Link>
                    <Link href='/'>
                        <Text>Chat</Text>
                    </Link>
                    <Link href='/faq'>
                        <Text>Perguntas Frequentes</Text>
                    </Link>
                    <Link href='/'>
                        <Text>Concientize-se</Text>
                    </Link>
                    <Link href='/'>
                        <Text>Configurações</Text>
                    </Link> */}
                </View>
            
            </View>
        <View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Sair</Text>
                </Pressable>
            </View>
        </View>
    </>
    )
}

export default Menu

const styles = StyleSheet.create({
    menuDirection:{
        flex: 0,
        flexDirection: "row"
    },
    menuTitle: {
        fontFamily: 'NotoSans_Condensed',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 29,
        color: '#0066FF',
        marginTop: 19,
        marginLeft: 38,
        marginBottom: 20
    },
    images: {
        marginLeft: 24,
        gap: 28
    },
    links: {
        marginLeft: 24,
        gap: 36,
        justifyContent: 'center'
    },
    menuLinkName: {
        fontFamily: 'NotoSans_Regular',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 29,
        color: '#666666',
        marginTop: 36,
        marginLeft: 24,
    },
    button: {
        backgroundColor: '#FF6052',
        width: 95,
        height: 40,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'NotoSans_Condensed',
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 29,
        textAlign: 'center',
        paddingTop: 7
    },
    buttonContainer: {
        top: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    menuIcons: {
        width: 30,
        height: 30
    }
})