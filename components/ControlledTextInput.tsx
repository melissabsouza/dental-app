import React from 'react';
import { useController } from "react-hook-form";
import { StyleSheet, View, Text, TextInput, TextInputProps } from "react-native";

type Props = {
  name: string;
  control: any;
} & TextInputProps;

const ControlledTextInput = ({ name, control, readOnly, ...props }: Props) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name: name,
    control,
  });

  return (
    <View>
      <TextInput
        {...props}
        readOnly={readOnly}
        style={[
    {
      fontSize: 20,
      height: 48,
      borderColor: '#D1D5DB', // gray-300
      borderWidth: 1,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: 'white',
      opacity: readOnly ? 0.5 : 1,
      color: 'black',
    },
    props.style, // pra respeitar estilos externos, se houver
  ]}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <Text className="text-red-500 text-lg">{error.message}</Text>}
    </View>
  );
};
export default ControlledTextInput;