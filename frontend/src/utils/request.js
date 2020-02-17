import axios from "axios";
import { getToken, setToken, deleteToken } from "./auth";

var axiosRequestInstance = axios.create({
  baseURL: `${window.location.protocol}//${window.location.host}`
});

export async function request(reqData) {
  return new Promise((resolve, reject) => {
    axiosRequestInstance({
      url: reqData.url,
      method: reqData.method,
      data: reqData.data
    })
      .then(resp => resolve(resp))
      .catch(err => reject(err));
  });
}

export async function requestAuth(reqData) {
  return new Promise((resolve, reject) => {
    axiosRequestInstance({
      url: reqData.url,
      method: reqData.method,
      data: reqData.data
    })
      .then(resp => {
        const token = getToken();
        setToken(token);
        axios.defaults.headers.common["Authorization"] = token;
        resolve(resp);
      })
      .catch(err => {
        deleteToken();
        reject(err);
      });
  });
}

export async function requestRegisterUser(reqData) {
  return new Promise((resolve, reject) => {
    axiosRequestInstance({
      url: reqData.url,
      method: reqData.method,
      data: reqData.data
    })
      .then(resp => {
        const token = getToken();
        setToken(token);
        axios.defaults.headers.common["Authorization"] = token;
        resolve(resp);
      })
      .catch(err => {
        deleteToken();
        reject(err);
      });
  });
}

export async function requestLogOut() {
  return new Promise((resolve, reject) => {
    try {
      deleteToken();
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    } catch {
      reject();
    }
  });
}
