import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Vacancy from "../views/Vacancy";
import gourds from "../views/ ProductGourds";
import corn from "../views/PrductCorn";
import sunflower from "../views/ProductSunflower";
import catalog from "../views/Catalog";
import contacts from "../views/Contacts";
import partners from "../views/Partners";

// import Router from "vue-router";
import store from "../store";
import Login from "../components/Login";
import Secure from "../components/Secure";
import Register from "../components/Register";

import Lightbox from "vue-easy-lightbox";
import {getToken} from '../utils/auth'
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
    if (!!getToken()) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
