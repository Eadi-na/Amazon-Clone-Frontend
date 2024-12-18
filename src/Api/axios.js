import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions.
  // baseURL: "http://127.0.0.1:5001/clone-7d8bc/us-central1/api",

  // deployed version of amazon server on render.com.
    baseURL:"https://amazone-api-deploy-nmmc.onrender.com",
});

export { axiosInstance };