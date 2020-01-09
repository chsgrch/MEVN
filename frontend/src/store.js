import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
axios.defaults.withCredentials = false;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
    role: "",
    vacancies: [],
    feedback: []
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, userRespData) {
      state.status = "success";
      state.token = userRespData.token;
      state.user = userRespData;
      state.role = userRespData.user.role;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.role = "";
    },
    vacancies_received(state, data) {
      state.vacancies = data;
    },
    feedback_received(state, data) {
      state.feedback = data;
    }
  },
  actions: {
    addVacancy({ commit }, vacancy) {
      return new Promise((resolve, reject) => {
        axios({
          url: "http://localhost:8080/api/jobs",
          data: vacancy,
          method: "POST"
        })
          .then(resp => {
            commit("vacancies_received", resp.data.data);
            resolve(resp.data.data);
          })
          .catch(err => {
            commit("get_vacancies_error");
            reject(err);
          });
      });
    },
    deleteVacancy({ commit }, idVacancy) {
      return new Promise((resolve, reject) => {
        axios({
          url: `http://localhost:8080/api/jobs/job_id:${idVacancy}`,
          method: "DELETE"
        })
          .then(resp => {
            commit("vacancies_received", resp.data.data);
            resolve(resp.data.data);
          })
          .catch(err => {
            commit("get_vacancies_error");
            reject(err);
          });
      });
    },

    getVacancies({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          url: "http://localhost:8080/api/jobs",
          method: "GET"
        })
          .then(resp => {
            commit("vacancies_received", resp.data.data);
            resolve(resp.data.data);
          })
          .catch(err => {
            commit("get_vacancies_error");
            reject(err);
          });
      });
    },

    getAllFeedback({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          url: "http://localhost:8080/api/contacts",
          method: "GET"
        })
          .then(resp => {
            commit("feedback_received", resp.data.data);
            resolve(resp.data.data);
          })
          .catch(err => {
            commit("get_feedback_error");
            reject(err);
          });
      });
    },

    //login (send between axios data on bakend)
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:8080/api/auth",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", resp.data);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    //user registration
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios({
          url: "http://localhost:8080/api/register",
          data: user,
          method: "POST"
        })
          .then(resp => {
            console.log("THEN");
            const token = resp.data.token;
            console.log(`token = ${token}`);
            let userRespData = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", resp.data); // token, userRespData);
            resolve(resp.data);
          })
          .catch(err => {
            console.log("ERROR");
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    //logout user
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    userRole: state => state.role,
    getAllVacancies: state => state.vacancies,
    getAllFeedback: state => state.feedback
  }
});