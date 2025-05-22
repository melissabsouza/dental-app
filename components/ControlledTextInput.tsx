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
        className={[
          "text-2xl h-12 border-gray-300 rounded-lg px-4 py-2 border bg-white",
          readOnly && "opacity-50",
        ].join(" ")}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <Text className="text-red-500 text-lg">{error.message}</Text>}
    </View>
  );
};
export default ControlledTextInput;