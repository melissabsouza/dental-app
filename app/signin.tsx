import LoginScreen from "../components/LoginScreen";
import { useRouter } from "expo-router";
import { View } from "react-native";

const SigninScreen = () => {
  const router = useRouter();

  return (
    <View className="bg-white flex-1">
      <View>
        <LoginScreen onSuccess={() => router.replace("/")} />
      </View>
    </View>
  );
};

export default SigninScreen;