
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBKhiq68wfQG4cZhcqWyVgYAKD49PYyGOM",
  authDomain: "dental-insurance-e5ed9.firebaseapp.com",
  projectId: "dental-insurance-e5ed9",
  storageBucket: "dental-insurance-e5ed9.firebasestorage.app",
  messagingSenderId: "510924237502",
  appId: "1:510924237502:web:b17bd1a2a3a5e2b028ccef",
  measurementId: "G-PLRLXMTP07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const database = getDatabase(app);