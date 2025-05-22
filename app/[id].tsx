import ControlledTextInput from "@/components/ControlledTextInput";
import { getPaciente, updatePaciente } from "@/services/pacientes";
import { Paciente } from "@/types/Paciente";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  View,
  Text,
  ActivityIndicator,
  Touchable,
  TouchableOpacity,
} from "react-native";
const EditPaciente = () => {
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [paciente, setPaciente] = useState<Paciente | null>(null);

  const { control, handleSubmit } = useForm();

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    async function fetchPaciente() {
      const paciente = await getPaciente(id as string);
      setPaciente(paciente);
      setLoading(false);
    }

    fetchPaciente();
  }, [id]);

  async function onSubmit(data: any) {
    console.log("Form data:", data);
    await updatePaciente(id as string, data);
  }

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!paciente) {
    return <Text>Paciente not found.</Text>;
  }

  return (
    <View className="p-4">
      <Text>Editar Paciente: {id}</Text>
      <Text>nome: {paciente.nome}</Text>
      <ControlledTextInput name="nome" control={control} />
      <Text>sexo: {paciente.sexo}</Text>
      <ControlledTextInput name="sexo" control={control} />
      <Text>naturalidade: {paciente.naturalidade}</Text>
      <ControlledTextInput name="naturalidade" control={control} />
      <Text>localNascimento: {paciente.localNascimento}</Text>
      <ControlledTextInput name="localNascimento" control={control} />
      <Text>dataNascimento: {paciente.dataNascimento}</Text>
      <ControlledTextInput name="dataNascimento" control={control} />
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg mt-4"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white text-center">Save</Text>
      </TouchableOpacity>
    </View>
  );
};
export default EditPaciente;