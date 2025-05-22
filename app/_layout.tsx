import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../global.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import AuthProvider from "../components/AuthProvider";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setAppIsReady(true);
    SplashScreen.hide();
  });
  return () => unsubscribe();
}, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}/>
        <StatusBar />
      </QueryClientProvider>
    </AuthProvider>
  );
};
export default RootLayout;