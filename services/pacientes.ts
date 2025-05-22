import { Paciente } from "../types/Paciente";
import { apiClient } from "./api";
import { FirebaseCreateResponse } from "../types/FirebaseCreateResponse";

export async function createPaciente(paciente: Paciente): Promise<Paciente> {
  console.log("Creating paciente:", paciente);
  const response = await apiClient.post<FirebaseCreateResponse>(
    "/pacientes.json",
    paciente
  );
  console.log("Response from Firebase:", response);

  const data = response.data;
  return { ...paciente, id: data.name };
}

export async function getPacientes(): Promise<Paciente[]> {
  const response = await apiClient.get<{ [key: string]: Paciente }>(
    "/pacientes.json"
  );
  const data = response.data;
  const pacientes: Paciente[] = Object.keys(data).map((key) => ({
    ...data[key],
    id: key,
  }));
  return pacientes;
}

export async function getPaciente(id: string): Promise<Paciente> {
  const response = await apiClient.get<Paciente>(`/movies/${id}.json`);
  const data = response.data;
  return { ...data, id };
}

export async function updatePaciente(id: string, paciente: Paciente): Promise<void> {
  console.log("Updating paciente:", id, paciente);
  await apiClient.patch(`/pacientes/${id}.json`, paciente);
}

export async function deletePaciente(id: string): Promise<void> {
  await apiClient.delete(`/pacientes/${id}.json`);
}