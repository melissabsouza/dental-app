import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderWithMenu from '../../components/headerMenu'
import { StatusBar } from 'expo-status-bar'

const profileIcon = require("../../../assets/images/profile-pfp.png");


const Perfil = () => {
  return (
    <View style={styles.backgroundProfile}>
      <HeaderWithMenu/>

      <View style={styles.perfilContainer}>
        <Text style={styles.perfilText}>Perfil</Text>

        <View style={styles.imageContainer}>
          <Image source={profileIcon} style={styles.profileIcon}></Image>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.dataText}>Clinica</Text>
          <Text style={styles.dataText}>CNPJ</Text>
          <Text style={styles.dataText}>Endereco</Text>
          <Text style={styles.dataText}>Tel</Text>
          <Text style={styles.dataText} >Email</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sair</Text>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
      
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
    backgroundProfile:{
      backgroundColor:'#82B4FF',
      flex: 1,
      alignItems: 'center'

    },
    imageContainer:{
      flex: 0,
      alignItems: 'center',
      marginTop: 18,
      marginBottom: 40,

    },
    perfilContainer: {
      flex: 0,
      backgroundColor: 'white',
      width: '95%',
      height: '85%',
      marginTop: 20,
      borderRadius: 20
    },
    profileIcon:{
        width: 120,
        height: 120,
    },
    perfilText:{
      fontFamily: 'NotoSans_Condensed',
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 29,
      color: '#0066FF',
      marginLeft: 19,
      marginTop: 14
    },
    dataText: {
      fontFamily: 'NotoSans_Condensed',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 29,
      marginBottom: 19,
      color: '#666666',
    },
    button:{
      backgroundColor: '#FF6052',
      width: 95,
      height: 40,
      borderRadius: 20,
    },
    buttonText:{
      color: 'white',
      fontFamily: 'NotoSans_Condensed',
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 29,
      textAlign: 'center',
      paddingTop: 7
    },
    dataContainer:{
      flex: 0,
      marginLeft: 19
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 50,
      left: 0,
      right: 0,
      alignItems: 'center',
    }
})