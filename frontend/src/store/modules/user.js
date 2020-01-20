import { loginApi, registerApi, logOutApi } from "../../api/userAuthApi";

const user = {

  mutations: {
    AUTH_REQUEST(state) {
      this.state.status = "loading";
      localStorage.setItem("status", this.state.status);
    },
    AUTH_SUCESS(state, userRespData) {
      this.state.status = "success";
      this.state.token = userRespData.token;
      this.state.user = userRespData;
      this.state.role = userRespData.user.role;
      this.state.userName = userRespData.user.username

      //save user data in local storage
      console.log(`-> status is: ${this.state.status}, \n-> token is: ${this.state.token}, \n-> role is: ${this.state.role}, \nuserName is ${this.state.userName}`);
      localStorage.setItem("status", this.state.status);
      localStorage.setItem("token", this.state.token);
      localStorage.setItem("user", this.state.user);
      localStorage.setItem("role", this.state.role);
      localStorage.setItem("userName", this.state.userName);
    },
    AUTH_ERROR(state) {
      this.state.status = "error";
    },
    LOGOUT(state) {
      this.state.status = "";
      this.state.token = "";
      this.state.role = "";

      //clear user data from local storage
      localStorage.removeItem("status");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      localStorage.removeItem("userName");
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
