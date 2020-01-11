import {
  addVacancyApi,
  deleteVacancyApi,
  getVacancyApi
} from "../../api/vacanciesApi";

const state = {
    vacancies: []
  },
  getters = {
    getAllVacancies: state => state.vacancies
  },
  mutations = {
    VACANCIES_RECEIVED(state, data) {
      state.vacancies = data;
    }
  },
  actions = {
    addVacancy({ commit }, vacancy) {
      return new Promise((resolve, reject) => {
        addVacancyApi(vacancy)
          .then(resp => {
            commit("VACANCIES_RECEIVED", resp.data.data);
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
        deleteVacancyApi(idVacancy)
          .then(resp => {
            commit("VACANCIES_RECEIVED", resp.data.data);
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
        getVacancyApi()
          .then(resp => {
            commit("VACANCIES_RECEIVED", resp.data.data);
            resolve(resp.data.data);
          })
          .catch(err => {
            commit("get_vacancies_error");
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
