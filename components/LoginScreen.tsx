import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import ControlledTextInput from "./ControlledTextInput";
import PrimaryButton from './PrimaryButton';

const logoOdpv = require("../assets/images/logoodpv.png");

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

  const [mode, setMode] = useState<'login' | 'register'>('login');

  const { isPending, mutate, error } = useMutation({
    mutationFn: async ({ email, password }: LoginFormData) => {
      if (mode === 'login') {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
      }
    },
    onSuccess: () => {
      onSuccess();
    }
  });

  const onSubmit = (data: LoginFormData) => {
    mutate(data);
  };

  return (
    <View style={styles.container}>
      {isPending && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>{error.message}</Text>}

      <Image source={logoOdpv} style={styles.imageLogo} />

      <ControlledTextInput
        style={styles.textinput}
        control={control}
        name="email"
        readOnly={isPending}
        placeholder='E-mail'
      />
      <ControlledTextInput
        style={styles.textinput}
        control={control}
        name="password"
        readOnly={isPending}
        placeholder='Senha'
        secureTextEntry
      />

      <PrimaryButton
        text="Entrar"
        onPress={() => {
          setMode('login');
          handleSubmit(onSubmit)();
        }}
        disabled={isPending}
      />

      <PrimaryButton
        text="Criar Conta"
        onPress={() => {
          setMode('register');
          handleSubmit(onSubmit)();
        }}
        disabled={isPending}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageLogo: {
    alignContent: 'center',
    width: 125,
    height: 21,
    marginBottom: 20
  },
  container: {
    paddingTop: 300,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  textinput: {
    marginTop: 15
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10
  }
});
