import axios from "axios";
import { handleMyErrors } from "../utils/errorHandlingUtil";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 120000;
axios.interceptors.request.use((request) => {
  return request;
});

function setJwt(jwt: string | null) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

function getJwt(): string | null {
  return "";
}

const myGetAxios = async (url: string) => {
  return axios.get(url).catch((err) => {
    return { data: handleMyErrors(err) };
  });
}

const myPostAxios = async (url: string, requestData: any, options = {}) => {

  return await axios.post(url, requestData, options as any).catch((err) => {
    return { data: handleMyErrors(err) };
  });
}
const myDeleteAxios = async (url: string) => {
  return await axios.delete(url);
}

const myPutAxios = async (url: string, requestData: any) => {

  return await axios.put(url, requestData);
}


const httpService = {
  get: myGetAxios,
  post: myPostAxios,
  put: myPutAxios,
  delete: myDeleteAxios,
  setJwt,
  getJwt,
};

export default httpService;
