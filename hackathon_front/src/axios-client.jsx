import axios from "axios";
import { updateToken } from "./tokenManager";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/api",
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

async function refreshToken() {
  try {
    const response = await axiosClient.get("/refreshToken");
    const newToken = response.data.access_token;
    return newToken;
  } catch (error) {
    console.log("Error refreshing token:", error);
    throw error;
  }
}

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.data.error === "Token expired, please refresh" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshToken();
        localStorage.setItem("access_token", newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        updateToken(newToken); 
        return axiosClient.request(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("acess_token");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;

