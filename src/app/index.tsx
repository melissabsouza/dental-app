import HeaderWithMenu from '../components/headerMenu';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Redirect } from "expo-router";
import { auth } from "@/firebaseConfig";
import { useAuth } from "../hooks/useAuth"
import { signOut } from "firebase/auth";
import PrimaryButton from "../components/PrimaryButton";

const HomeMobileUI = () => {
   const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/(auth)/signin" />;
  }

    return (
      <>
        <HeaderWithMenu/>
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.heading}>Home</Text>
                <View style={styles.grid}>

                    <View style={styles.boxFlex}>
                      <View style={[styles.box, styles.red]}></View>
                      <View style={[styles.box, styles.blueLight]}></View>
                      <View style={[styles.box, styles.blueDark]}></View>
                    </View>

                    <View style={styles.boxFlex}>
                      <View style={[styles.box, styles.blueLight]}></View>
                      <View style={[styles.box, styles.red]}></View>
                      <View style={[styles.box, styles.gray]}></View>
                    </View>

                    <View style={styles.boxFlex}> 
                      <View style={[styles.box, styles.gray]}></View>
                      <View style={[styles.box, styles.blue]}></View>
                      <View style={[styles.box, styles.red]}></View>
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Conscientize-se</Text>
                <View style={styles.list}>
                    <View style={[styles.item, styles.red]}>
                        <View style={[styles.smallBox, styles.blueLight]}></View>
                    </View>
                    <View style={[styles.item, styles.blueLight]}>
                        <View style={[styles.smallBox, styles.gray]}></View>
                    </View>
                    <View style={[styles.item, styles.gray]}>
                        <View style={[styles.smallBox, styles.red]}></View>
                    </View>
                </View>
            </View>
            <PrimaryButton text="Sign Out" onPress={() => signOut(auth)} />;
        </View>
      </>
    );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#80A9FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    section: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        width: '90%',
        alignItems: 'center',
    },
    heading: {
        color: '#0056D2',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
    },
    box: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    list: {
        flexDirection: 'column',
        gap: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderRadius: 10,
        paddingLeft: 10,
        width: 350,
    },
    smallBox: {
        width: 25,
        height: 25,
        borderRadius: 5,
    },
    boxFlex:{
      gap: 8
    },
    red: { backgroundColor: '#FF6B6B' },
    blueLight: { backgroundColor: '#80A9FF' },
    blueDark: { backgroundColor: '#003DA5' },
    blue: { backgroundColor: '#0066FF' },
    gray: { backgroundColor: '#C4C4C4' },
});

export default HomeMobileUI;