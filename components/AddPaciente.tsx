import { View, Text, ActivityIndicator } from "react-native";
import PacienteForm from "./PacienteForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPaciente } from "../services/pacientes"

type Props = {
  onSuccess: () => void;
};

const AddMovie = ({ onSuccess }: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPaciente,
    onSuccess: () => {
      onSuccess();
    },
    onError: () => {
      alert("Erro!");
    },
  });

  const onSubmit = async (data: any) => {
    console.log("mutation");
    mutation.mutate(data);
  };

  if (mutation.isPending) {
    return <ActivityIndicator />;
  }
  return (
    <View className="p-4">
      <PacienteForm onSubmit={onSubmit} />
      {mutation.isError && (
        <Text className="text-red-500">Ops, deu ruim. Vai de novo.</Text>
      )}
    </View>
  );
};
export default AddMovie;