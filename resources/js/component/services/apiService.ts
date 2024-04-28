import axios from "axios";

const API_BASE_URL = (window as any).env.API_BASE_URL;

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiService.interceptors.request.use((config) => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]');

  if (csrfToken) {
    const token = csrfToken.getAttribute("content");

    if (token) {
      config.headers["X-CSRF-TOKEN"] = token;
    }
  }

  return config;
});

export default apiService;
