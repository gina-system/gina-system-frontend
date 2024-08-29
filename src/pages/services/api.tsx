import axios from "axios";

const apiConfig = axios.create({
  baseURL: import.meta.env.BACKEND_API_HOST_NAME,
});

export default apiConfig;
