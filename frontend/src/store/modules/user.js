import { loginApi, registerApi, logOutApi } from "../../api/userAuthApi";

const user = {

  mutations: {
    AUTH_REQUEST(state) {
      this.state.status = "loading";
    },
    AUTH_SUCESS(state, userRespData) {
      this.state.status = "success";
      this.state.token = userRespData.token;
      this.state.user = userRespData;
      this.state.role = userRespData.user.role;
      this.state.userName = userRespData.user.username
    },
    AUTH_ERROR(state) {
      this.state.status = "error";
    },
    LOGOUT(state) {
      this.state.status = "";
      this.state.token = "";
      this.state.role = "";
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
          .then(({data}) => {
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
        commit("LOGOUT");
        logOutApi()
          .then(resp => {
            resolve();
          })
          .catch(err => reject(err));
      });
    }
  }
}

export default user
