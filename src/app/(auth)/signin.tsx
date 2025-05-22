import LoginScreen from "../../components/LoginScreen";
import { useRouter } from "expo-router";
import { View } from "react-native";

const SigninScreen = () => {
  const router = useRouter();

  return (
    <View>
      <LoginScreen onSuccess={() => router.replace("/")} />
    </View>
  );
};

export default SigninScreen;