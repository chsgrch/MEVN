import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Vacancy from "../views/Vacancy.vue";
import gourds from "../views/ ProductGourds.vue";
import corn from "../views/PrductCorn.vue";
import sunflower from "../views/ProductSunflower.vue";
import catalog from "../views/Catalog.vue";
import contacts from "../views/Contacts.vue";
import partners from "../views/Partners.vue";

// import Router from "vue-router";
import store from "../store";
import Login from "../components/Login.vue";
import Secure from "../components/Secure.vue";
import Register from "../components/Register.vue";

import Lightbox from "vue-easy-lightbox";
Vue.use(Lightbox);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/jobs",
    name: "vacancy",
    component: Vacancy
  },

  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/secure",
    name: "secure",
    component: Secure,
    meta: {
      requiresAuth: true
    }
  },
  {
    //Бахчевые
    path: "/gourds",
    name: "gourds",
    component: gourds
  },
  {
    //Кукуруза
    path: "/corn",
    name: "corn",
    component: corn
  },
  {
    //Подсолнечник
    path: "/sunflower",
    name: "sunflower",
    component: sunflower
  },
  {
    //Каталог
    path: "/catalog",
    name: "catalog",
    component: catalog
  },
  {
    //Контакты
    path: "/contacts",
    name: "contacts",
    component: contacts
  },
  {
    path: "/partners",
    name: partners,
    component: partners
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
