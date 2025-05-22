import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
// não cria, só faz login
const { isPending, mutate, error } = useMutation({
  mutationFn: async ({ email, password }: LoginFormData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch (err: any) {
      if (err.code === "auth/user-not-found") {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
      } else {
        throw err;
      }
    }
  },
  onSuccess: onSuccess,
  onError: (error) => {
    console.error("Error signing in or creating user:", error);
  },
});




  async function onSubmit(data: LoginFormData) {
    mutate(data);
  }
    return (
       <View>
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
    );
};

export default LoginScreen;