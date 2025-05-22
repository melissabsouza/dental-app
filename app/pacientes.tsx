import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderWithMenu from '../components/headerMenu'
import PatientCard from '../components/patientCard'
import { router } from 'expo-router'
import { getDatabase, ref, onValue } from "firebase/database"

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([])

  useEffect(() => {
    const db = getDatabase()
    const pacientesRef = ref(db, 'pacientes')  // ajusta o path se for diferente
    onValue(pacientesRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const listaPacientes = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }))
        setPacientes(listaPacientes)
      }
    })
  }, [])

  return (
    <View>
      <HeaderWithMenu />
      <ScrollView>
        <Text style={styles.pacienteTitle}>Pacientes</Text>
        <Pressable
          style={styles.button}
          onPress={() => router.navigate('/add')}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </Pressable>

        {pacientes.map((paciente) => (
          <PatientCard
            key={paciente.id}
            nome={paciente.nome}
            sexo={paciente.sexo}
            naturalidade={paciente.naturalidade}
            localNascimento={paciente.localNascimento}
            dataNascimento={paciente.dataNascimento}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default Pacientes

const styles = StyleSheet.create({
  pacienteTitle: {
    fontFamily: 'NotoSans_Condensed',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 29,
    color: '#0066FF',
    marginTop: 19,
    marginLeft: 38,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#FF6052',
    width: 95,
    height: 40,
    borderRadius: 20,
    margin: 5
  },
  buttonText: {
    color: 'white',
    fontFamily: 'NotoSans_Condensed',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 29,
    textAlign: 'center',
    paddingTop: 7
  },
})
