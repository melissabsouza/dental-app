import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const logoOdpv = require("../../assets/images/logoodpv.png");
const menu = require("../../assets/images/menu.jpg");
const HeaderWithMenu = () => {
    return (
        <View style={styles.headerContainer}>
            <Image source={logoOdpv} style={styles.imageLogo}></Image>

            <Link href={"/menu"}>
                <Image source={menu} style={styles.menuIcon}></Image>
            </Link>
        </View>
    )
}

export default HeaderWithMenu

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: '100%',
        height: 66,
        marginTop: 40,
        paddingTop: 25,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 }, // Deslocamento X e Y
        shadowOpacity: 0.26,
        shadowRadius: 3,
        elevation: 3,

    },
    imageLogo: {
        alignContent: 'center',
        width: 125,
        height: 21,
    },
    menuIcon: {
        width: 24,
        height: 24
    }
})
