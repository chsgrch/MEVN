import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import feedbackMod from "./modules/feedaback";
import vacancyMod from "./modules/vacancies";
import { state } from './initialState'
import { getters } from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  modules: {
    user,
    vacancyMod,
    feedbackMod
  }
});
export default store;