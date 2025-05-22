import { useRouter } from "expo-router";
import AddPaciente from "@/components/AddPaciente";

const AddPacienteScreen = () => {
  const router = useRouter();

  return <AddPaciente onSuccess={() => router.dismissTo("/pacientes")} />;
};
export default AddPacienteScreen;