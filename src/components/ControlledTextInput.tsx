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
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        style={styles.input}
      />
      {error && <Text className="text-red-500 text-lg">{error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
    
    input: {
        width: '100%',
        padding: 12,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: '#003399',
        color: '#ffffff',
    },
});
export default ControlledTextInput;
