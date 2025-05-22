import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderWithMenu from '../../components/headerMenu'
import PatientCard from '../../components/patientCard'

const Pacientes = () => {
  return (
    <View>
      <HeaderWithMenu/>
        <Text style={styles.pacienteTitle}>Pacientes</Text>
        <PatientCard
            nome="João da Silva"
            sexo="Masculino"
            naturalidade="Brasileiro"
            localNascimento="São Paulo, SP"
            dataNascimento="10/05/1990"
        /> 
        <PatientCard
            nome="João da Silva"
            sexo="Masculino"
            naturalidade="Brasileiro"
            localNascimento="São Paulo, SP"
            dataNascimento="10/05/1990"
        />
        <PatientCard
            nome="João da Silva"
            sexo="Masculino"
            naturalidade="Brasileiro"
            localNascimento="São Paulo, SP"
            dataNascimento="10/05/1990"
        /> 
        <PatientCard
            nome="João da Silva"
            sexo="Masculino"
            naturalidade="Brasileiro"
            localNascimento="São Paulo, SP"
            dataNascimento="10/05/1990"
        /> 
    </View>
  )
}

export default Pacientes

const styles = StyleSheet.create({
    pacienteTitle:{
        fontFamily: 'NotoSans_Condensed',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 29,
        color: '#0066FF',
        marginTop: 19,
        marginLeft: 38,
        marginBottom: 10
    }
})