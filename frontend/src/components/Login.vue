<template>
  <div>
    <div class="pageHeadText">
      <h3>Вход</h3>
    </div>
    <div class="bodyPageContextLogin">
      <div class="inBodyContentLogin">
        <form class="login" @submit.prevent="login">
          <hr />
          <div id="userData">
            <label for="mail">Email</label>
            <input id="mail" required v-model="email" type="email" placeholder="Имя" />
          </div>

          <div id="userData">
            <label for="pass">Пароль</label>
            <input id="pass" required v-model="password" type="password" placeholder="Пароль" />
          </div>
          <hr />
          <button type="submit">Вход</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
.pageHeadText {
  text-align: center;
  padding-top: 30px;
}
#userData {
  margin-top: 20px;
}
.bodyPageContextLogin {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.inBodyContentLogin {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 45%;
}
.inBodyContentLogin input#mail,
input#pass {
  width: 100%;
}
</style>