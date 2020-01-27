<template>
  <div>
    <nav
      class="navbar navbar-expand-xl navbar-light bg-light shadow navigation-wrap"
      style="background-color: white;"
    >
      <div class="container menu">
        <a class="navbar-brand" href="/">
          <img src="../img/favicon/fav.png" width="30" height="30" alt="Колос" />
        </a>
        <div>Колос</div>
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="d-md-flex d-block w-100">
          <div
            class="collapse navbar-collapse mx-auto w-auto justify-content-center"
            id="navbarNavAltMarkup"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">
                  Главная
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >О компании</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link class="dropdown-item" to="./about">Вопросы и ответы</router-link>
                  <router-link class="dropdown-item" to="./partners">Партнеры</router-link>
                  <router-link class="dropdown-item" to="./jobs">Вакансии</router-link>
                </div>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="./catalog">Каталог</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="./secure" v-if="isAdmin">Отклики</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="./contacts">Контакты</router-link>
              </li>
              <li class="nav-item">
                <div class="entryOrRegister">
                  <div class="entry">
                    <router-link to="/login" v-if="!isLoggedIn">Вход</router-link>
                  </div>
                  <div class="register">
                    <router-link to="/register" v-if="!isLoggedIn">Регистрация</router-link>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div>
                  <a href class="outCustom" v-if="isLoggedIn" v-on:click="logout">Выход</a>
                </div>
              </li>
              <li class="phones">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    class="icon-phone"
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  />
                </svg>
                <small class="name">Телефон</small>
                <div class="number">
                  <a href="tel:88002011287">8 (988)202-19-46</a>
                </div>
              </li>
              <li class="mobile-mail">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill-opacity="0.9"
                    class="icon-mail"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                  />
                  <path fill="none" d="M0 0h24v24H0z" />
                </svg>
                <small class="name">e-mail</small>
                <div class="mail">
                  <a href="mailto:info@kolos.ru" class="mobile-mail__link">info@kolos.ru</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: "Menu",
  computed: {
    isLoggedIn: function() {
      console.log(`-> isLoggedIn: ${this.$store.getters.getUserAuthStatus}`);
      return this.$store.getters.getUserAuthStatus;
    },
    isAdmin: function() {
      return this.$store.getters.getUserRole; //if user role admin => return true
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
.menu {
  text-transform: uppercase;
}
.phones,
.mobile-mail,
.entryOrRegister {
  margin-left: 20px;
}
.nav-link:hover,
.dropdown-item:hover {
  background-color: #d3d3d3;
  border-radius: 5x;
}
.name {
  margin-left: 10px;
}

.nav-item button {
  color: red;
}

a.outCustom:link,
a.outCustom:visited {
  background-color: grey;
  color: white;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a.outCustom:hover,
a.outCustom:active {
  background-color: red;
  color: white;
}
</style>