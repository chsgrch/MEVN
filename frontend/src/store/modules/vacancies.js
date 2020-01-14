import {
  addVacancyApi,
  deleteVacancyApi,
  getVacancyApi
} from "../../api/vacanciesApi";

const vacancies = {
  mutations: {
    VACANCIES_RECEIVED(state, data) {
      this.state.vacancies = data;
    },
    GET_VACANCIES_ERROR(state, data) {
      this.state.vacancies = null
    }
  },

  actions: {
    addVacancy({ commit }, vacancy) {
      return new Promise((resolve, reject) => {
        addVacancyApi(vacancy)
          .then(({data}) => {
            commit("VACANCIES_RECEIVED", data.responseData);
            resolve(data.responseData);
          })
          .catch(err => {
            commit("GET_VACANCIES_ERROR", err);
            reject(err);
          });
      });
    },
    
    deleteVacancy({ commit }, idVacancy) {
      return new Promise((resolve, reject) => {
        deleteVacancyApi(idVacancy)
          .then(({data}) => {
            commit("VACANCIES_RECEIVED", data.responseData);
            resolve(data.responseData);
          })
          .catch(err => {
            commit("GET_VACANCIES_ERROR", err);
            reject(err);
          });
      });
    },

    getVacancies({ commit }) {
      return new Promise((resolve, reject) => {
        getVacancyApi()
          .then(({data}) => {
            commit("VACANCIES_RECEIVED", data.responseData);
            resolve(data.responseData);
          })
          .catch(err => {
            commit("GET_VACANCIES_ERROR", err);
            reject(err);
          });
      });
    }
  }
}

export default vacancies
