import axios from "axios";

const API_URL = "https://dental-insurance-e5ed9-default-rtdb.firebaseio.com/";

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 1_000,
  headers: {
    "Content-Type": "application/json",
  },
});