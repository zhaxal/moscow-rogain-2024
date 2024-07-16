import axios from "axios";

const backendInstance = axios.create({
  baseURL:
    import.meta.env.VITE_BACKEND_URL || "https://rogaine.mosgorsport.ru/api",
  timeout: 5000,
});

export default backendInstance;
