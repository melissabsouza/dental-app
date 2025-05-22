import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const profilepfp = require("../assets/images/profile-pfp.png");

interface PatientCardProps {
  nome: string;
  sexo: string;
  naturalidade: string;
  localNascimento: string;
  dataNascimento: string;
}

const PatientCard: React.FC<PatientCardProps> = ({
  nome,
  sexo,
  naturalidade,
  localNascimento,
  dataNascimento,
}) => {
  console.log(nome, sexo, naturalidade, localNascimento, dataNascimento);
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
  <View style={styles.textContainer}>
    <View style={styles.textFlex}>
      <Text style={[styles.text, styles.label]}>Nome:</Text>
      <Text style={styles.text}>{nome}</Text>
    </View>

    <View style={styles.textFlex}>
      <Text style={[styles.text, styles.label]}>Sexo:</Text>
      <Text style={styles.text}>{sexo}</Text>
    </View>

    <View style={styles.textFlex}>
      <Text style={[styles.text, styles.label]}>Naturalidade:</Text>
      <Text style={styles.text}>{naturalidade}</Text>
    </View>

    <View style={styles.textFlex}>
      <Text style={[styles.text, styles.label]}>Local de Nascimento:</Text>
      <Text style={styles.text}>{localNascimento}</Text>
    </View>

    <View style={styles.textFlex}>
      <Text style={[styles.text, styles.label]}>Data de Nascimento:</Text>
      <Text style={styles.text}>{dataNascimento}</Text>
    </View>
  </View>

  <Image source={require("../assets/images/profile-pfp.png")} style={styles.image} />
</View>
    </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: '90%',
    backgroundColor: "#3498db",
    borderRadius: 20,
    padding: 15,
    minHeight: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 20
  },
  infoContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  textFlex:{
    flex:0,
    flexDirection: 'row',
    gap: 25

  },
  textContainer: {
    flex: 1, // Faz os textos ocuparem o espaço disponível ao lado da imagem
  },
});

export default PatientCard;
