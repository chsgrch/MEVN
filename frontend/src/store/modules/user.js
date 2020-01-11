import { loginApi, registerApi, logOutApi } from "../../api/userAuthApi";

const state = {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
    role: ""
  },
  getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    userRole: state => state.role
  },
  mutations = {
    AUTH_REQUEST(state) {
      state.status = "loading";
    },
    AUTH_SUCESS(state, userRespData) {
      state.status = "success";
      state.token = userRespData.token;
      state.user = userRespData;
      state.role = userRespData.user.role;
    },
    AUTH_ERROR(state) {
      state.status = "error";
    },
    LOGOUT(state) {
      state.status = "";
      state.token = "";
      state.role = "";
    }
  },
  actions = {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("AUTH_REQUEST");
        loginApi(user)
          .then(resp => {
            commit("AUTH_SUCESS", resp.data);
            resolve(resp);
          })
          .catch(err => {
            commit("AUTH_ERROR");
            reject(err);
          });
      });
    },
    //user registration
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        registerApi(user)
          .then(resp => {
            commit("AUTH_SUCESS", resp.data); // token, userRespData);
            resolve(resp.data);
          })
          .catch(err => {
            commit("AUTH_ERROR", err);
            reject(err);
          });
      });
    },
    //logout user
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("LOGOUT");
        logOutApi()
          .then(resp => {
            resolve();
          })
          .catch(err => reject(err));
      });
    }
  };

export default {
  state,
  getters,
  mutations,
  actions
};
