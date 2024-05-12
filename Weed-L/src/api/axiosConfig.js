import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://weed-l-backend-f6215667c3a8.herokuapp.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
