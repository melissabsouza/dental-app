import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import ControlledTextInput from "./ControlledTextInput";
import PrimaryButton from './PrimaryButton';

type Props = {
  onSuccess: () => void;
};

const LoginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  password: z.string().min(6, "Senha precisa ter pelo menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof LoginSchema>;

const LoginScreen = ({ onSuccess }: Props) => {
  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const { isPending, mutate, error } = useMutation({
    mutationFn: ({ email, password }: LoginFormData) =>
      signInWithEmailAndPassword(auth, email, password),
    onSuccess: onSuccess,
    onError: (error) => {
      console.error("Error signing in:", error);
    },
  });

  async function onSubmit(data: LoginFormData) {
    mutate(data);
  }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logoodpv.png')} style={styles.logo} />
            <View style={styles.loginBox}>
                <Text style={styles.title}>Login</Text>

                {isPending && <ActivityIndicator size="large" color="#0000ff" />}
                {error && (
                    <Text className="text-red-500 text-center">{error.message}</Text>
                )}
                <ControlledTextInput
                    control={control}
                    name="email"
                    readOnly={isPending}
                />
                <ControlledTextInput
                    control={control}
                    name="password"
                    readOnly={isPending}
                    secureTextEntry
                />
                
                <PrimaryButton
                text="Entrar"
                onPress={handleSubmit(onSubmit)}
                disabled={isPending}
                />
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    loginBox: {
        backgroundColor: '#a8f0ff',
        padding: 30,
        borderRadius: 10,
        width: 320,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        alignItems: 'center',
    },
    title: {
        color: '#003399',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
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

export default LoginScreen;