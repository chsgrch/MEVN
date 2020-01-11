// import axios from "axios";
import { getFeedbackAllUserApi } from "../../api/reedbackApi";

const state = {
    feedback: []
  },
  getters = {
    getAllFeedback: state => state.feedback
  },
  mutations = {
    FEEDBACK_RECEIVED: (state, data) => {
      state.feedback = data;
    }
  },
  actions = {
    async getAllFeedback({ commit }) {
      return new Promise((resolve, reject) => {
        getFeedbackAllUserApi()
          .then(resp => {
            commit("FEEDBACK_RECEIVED", resp.data.data);
            resolve(resp.data.data);
          })
          .catch(err => {
            commit("get_feedback_error");
            reject(err);
          });
      });
    }
  };

export default {
  state,
  getters,
  mutations,
  actions
};
