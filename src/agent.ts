import axios from "axios";
import { DKHSV_BASE_API } from "./consts/index";
let access_token;

const axiosApiInstance = axios.create({
  baseURL: DKHSV_BASE_API + "/education/api",
});

axiosApiInstance.interceptors.request.use(
  async (config) => {
    if (!access_token) throw new Error("Please login first !! ");
    if (access_token) {
      config.headers = {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export function setAuth(token: string) {
  access_token = token;
}

export default axiosApiInstance;
