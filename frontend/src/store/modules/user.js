import { loginApi, registerApi, logOutApi } from "../../api/userAuthApi";
import { deleteToken, getUserStatus, getUserRole } from '../../utils/auth';

const user = {

  mutations: {
    AUTH_REQUEST(state) {
      this.state.status = "loading";
      this.state.userAuthStatus = 'loading'
    },
    AUTH_SUCESS(state, userRespData) {
      this.state.status = "success";
      this.state.userAuthStatus = getUserStatus() == 'success' ? true : false,
        this.state.userRole = getUserRole()
    },
    AUTH_ERROR(state) {
      this.state.status = "error";
    },
    LOGOUT(state) {
      deleteToken();
      this.state.status = '';
      this.state.userAuthStatus = '',
        this.state.userRole = ''
    }
  },

  actions: {
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

    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        registerApi(user)
          .then(({ data }) => {
            commit("AUTH_SUCESS", data);
            resolve(data);
          })
          .catch(err => {
            commit("AUTH_ERROR", err);
            reject(err);
          });
      });
    },

    logout({ commit }) {
      return new Promise((resolve, reject) => {
        logOutApi()
          .then(resp => {
            commit("LOGOUT");
            resolve(resp);
          })
          .catch(err => reject(err));
      });
    },
  }
}

export default user
