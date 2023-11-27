import axios from "axios";
import useAuthStore from "../store/auth.store";

const authApi = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true 
})

authApi.interceptors.request.use(config => {
  const token = useAuthStore.getState().token;
  config.headers = config.headers || {};
  config.headers['Authorization'] = `Bearer ${token}`;

  return config;
})

export default authApi;