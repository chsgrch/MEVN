import { getFeedbackAllUserApi } from "../../api/feedbackApi";

const feedbackModule = {

  mutations: {
    FEEDBACK_RECEIVED(state, data) {
      this.state.feedback = data
    },
    GET_FEETBACK_ERROR(state, data) {
      this.state.feedback = null
    }
  },
  actions: {
    async getAllFeedback({ commit }) {
      return new Promise((resolve, reject) => {
        getFeedbackAllUserApi()
          .then(({data}) => {
            commit("FEEDBACK_RECEIVED", data.responseData);
            resolve(data.responseData);
          })
          .catch(err => {
            commit("GET_FEETBACK_ERROR", err);
            reject(err);
          });
      });
    }
  }
}

export default feedbackModule