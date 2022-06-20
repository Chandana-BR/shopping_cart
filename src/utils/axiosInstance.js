import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const rememberMe = localStorage.getItem("@app_remember_me");

    let token;
    if (JSON.parse(rememberMe)) {
      token = localStorage.getItem("@app_token");
    } else {
      token = sessionStorage.getItem("@app_token");
    }

    if (token) {
      const jsonToken = JSON.parse(token);
      config.headers.Authorization = `Bearer ${jsonToken.accessToken}`;
    }

    console.log("send request");
    return config;
  },
  (error) => {
    console.log("send request error");
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error?.response?.data) {
      return Promise.reject(new Error(error?.response?.data));
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
