import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderWithMenu from '../components/headerMenu'
import PatientCard from '../components/patientCard'
import { router } from 'expo-router'
import { getPacientes, deletePaciente } from "../services/pacientes"
import { Paciente } from '../types/Paciente'

const Pacientes = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([])

  const fetchPacientes = async () => {
    const lista = await getPacientes()
    setPacientes(lista)
  }

  useEffect(() => {
    fetchPacientes()
  }, [])

  const handleDelete = async (id: string) => {
    try {
      await deletePaciente(id)
      console.log("Paciente deletado com sucesso")

      setPacientes((prevPacientes) => prevPacientes.filter(p => p.id !== id))
    } catch (error) {
      console.error("Erro ao deletar paciente:", error)
    }
  }

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
            id={paciente.id} 
            nome={paciente.nome}
            sexo={paciente.sexo}
            naturalidade={paciente.naturalidade}
            localNascimento={paciente.localNascimento}
            dataNascimento={paciente.dataNascimento}
            onDelete={handleDelete}
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
