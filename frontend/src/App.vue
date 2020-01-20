<template>
  <div id="app">
    <Header />
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
    Menu: () => import('@/components/Menu'),
    Header: () => import('@/components/Header'),
    Footer: () => import('@/components/Footer')
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout);
        }
        throw err;
      });
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

@font-face {
  font-family: "pfdindisplaypro-thin";
  src: url("./resources/fonts/pfdindisplaypro-thin.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}
h3,
h2,
h1 {
  font-family: "pfdindisplaypro-thin", Arial, "Helvetica Neue", Helvetica,
    sans-serif;
  margin-bottom: 20px;
  font-size: 40px;
}

small {
  font-family: "pfdindisplaypro-thin", Arial, "Helvetica Neue", Helvetica,
    sans-serif;
}
</style>
