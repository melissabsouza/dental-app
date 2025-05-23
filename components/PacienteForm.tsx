import { useForm } from "react-hook-form";
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import ControlledTextInput from "./ControlledTextInput";

type Props = {
  onSubmit: (data: any) => void;
};

const PacienteForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm();

  return (
    <View> 
        <View style={styles.container}> 
            <Text style={styles.title}>Adicionar Paciente</Text>
        <Text style={styles.text}>Nome: </Text>  
        <ControlledTextInput control={control} name="nome" />
        <Text style={styles.text}>Sexo: </Text>  
        <ControlledTextInput control={control} name="sexo" />
        <Text style={styles.text}>Naturalidade: </Text>  
        <ControlledTextInput control={control} name="naturalidade" />
        <Text style={styles.text}>Local de Nascimento: </Text>  
        <ControlledTextInput control={control} name="localNascimento" />
        <Text style={styles.text}>Data de Nascimento: </Text>  
        <ControlledTextInput control={control} name="dataNascimento" />


            <Pressable
                style={styles.button}
                onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </Pressable>
        </View>
            
    </View>
  );
};

export default PacienteForm;

const styles = StyleSheet.create({
    button: {
    backgroundColor: '#FF6052',
    width: 95,
    height: 40,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 25
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
  container: {
    marginTop: 250,
    paddingHorizontal: 20
  },
  text:{
    fontSize: 16,
    fontWeight: 'bold',
    margin:3
  },
  title:{
    color:'#3f41cf',
    fontSize: 24,
    justifyContent: 'center',
    marginBottom: 10
  }
})