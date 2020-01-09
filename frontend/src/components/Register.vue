<template>
  <div>
    <div class="pageHeadText">
      <h3>Регистрация</h3>
    </div>
    <div class="bodyPageContext">
      <div class="inBodyContent">
        <form id="registerForm" @submit.prevent="register">
          <hr />
          <div id="userData">
            <label for="name">Имя</label>
            <div>
              <input id="name" type="text" v-model="name" required autofocus />
            </div>
          </div>

          <div id="userData">
            <label for="email">E-Mail</label>
            <div>
              <input id="email" type="email" v-model="email" required />
            </div>
          </div>

          <div id="userData">
            <label for="password">Пароль</label>
            <div>
              <input id="password" type="password" v-model="password" required />
            </div>
          </div>

          <div id="userData">
            <label for="password-confirm">Повторите ввод пароля</label>
            <div>
              <input id="password-confirm" type="password" v-model="password_confirmation" required />
            </div>
          </div>

          <div id="userData">
            <input type="radio" id="userRadioB" value="user" v-model="role" />
            <label for="userRadioB">Пользователь</label>
            <br />
            <input type="radio" id="adminRadioB" value="admin" v-model="role" />
            <label for="adminRadioB">Администратор</label>
            <br />
          </div>
          <hr />
          <div id="userData">
            <button type="submit">Регистрация</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      role: "user"
    };
  },
  methods: {
    register: function() {
      let data = {
        username: this.name,
        email: this.email,
        password: this.password,
        role: this.role
      };
      this.$store
        .dispatch("register", data)
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
.bodyPageContext {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.inBodyContent {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 45%;
}
.inBodyContent input#name,
input#password,
input#password-confirm,
input#email {
  width: 100%;
}
</style>


// #registerForm input#userData 
// 