import Vue from "vue";
import App from "./App";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import Axios from "axios";

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
