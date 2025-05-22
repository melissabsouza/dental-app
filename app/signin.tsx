import LoginScreen from "../components/LoginScreen";
import { useRouter } from "expo-router";
import { View } from "react-native";

const SigninScreen = () => {
  const router = useRouter();

  return (
    <View>
      <View style={{ marginTop: 250, width: 320, alignSelf: 'center', justifyContent:"center" }}>
        <LoginScreen onSuccess={() => router.replace("/")} />
      </View>
    </View>
  );
};

export default SigninScreen;