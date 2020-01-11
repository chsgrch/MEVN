import axios from "axios";

var axiosRequestInstance = axios.create({
  baseURL: "http://localhost:8080"
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
        const token = resp.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        resolve(resp);
      })
      .catch(err => {
        localStorage.removeItem("token");
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
        const token = resp.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        resolve(resp);
      })
      .catch(err => {
        localStorage.removeItem("token");
        reject(err);
      });
  });
}

export async function requestLogOut() {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    } catch {
      reject();
    }
  });
}
