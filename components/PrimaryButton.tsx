import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";

type Props = {
  text: string;
} & TouchableOpacityProps;

const PrimaryButton = ({ text, onPress, disabled, ...props }: Props) => {
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 12,
        borderRadius: 5,
        backgroundColor: '#4da6ff',
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default PrimaryButton;