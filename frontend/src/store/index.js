import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user";
import feedback from "./modules/feedaback";
import vacancies from "./modules/vacancies";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    vacancies,
    feedback
  }
});
