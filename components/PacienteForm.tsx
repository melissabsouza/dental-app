import { useForm } from "react-hook-form";
import { View, Text, TouchableOpacity } from "react-native";
import ControlledTextInput from "./ControlledTextInput";

type Props = {
  onSubmit: (data: any) => void;
};

const PacienteForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm();

  return (
    <View>
      <ControlledTextInput control={control} name="nome" />
      <ControlledTextInput control={control} name="sexo" />
      <ControlledTextInput control={control} name="naturalidade" />
      <ControlledTextInput control={control} name="localNascimento" />
      <ControlledTextInput control={control} name="dataNascimento" />


      <TouchableOpacity
        className="bg-blue-500 rounded-lg p-4 mt-4"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white text-lg">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PacienteForm;