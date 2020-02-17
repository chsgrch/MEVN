<template>
  <div class="o-main--register">
    <h3 class="h3-like">Регистрация</h3>
    <div class="o-main--register main--register__o-row">
      <div class="o-main--register main--register__o-row__col">
        <form @submit.prevent="register">
          <hr />
          <div id="col_o__register_info">
            <label for="register_info_c_name">Имя</label>
            <div>
              <input id="register_info_c_name" type="text" v-model="name" required autofocus />
            </div>
          </div>

          <div id="col_o__register_info">
            <label for="register_info_c_email">E-Mail</label>
            <div>
              <input id="register_info_c_email" type="email" v-model="email" required />
            </div>
          </div>

          <div id="col_o__register_info">
            <label for="register_info_c_password">Пароль</label>
            <div>
              <input id="register_info_c_password" type="password" v-model="password" required />
            </div>
          </div>

          <div id="col_o__register_info">
            <label for="register_info_c_password-confirm">Повторите ввод пароля</label>
            <div>
              <input
                id="register_info_c_password-confirm"
                type="password"
                v-model="password_confirmation"
                required
              />
            </div>
          </div>

          <div id="col_o__register_info">
            <input type="radio" id="userRadioB" value="user" v-model="role" />
            <label for="userRadioB">Пользователь</label>
            <br />
            <input type="radio" id="adminRadioB" value="admin" v-model="role" />
            <label for="adminRadioB">Администратор</label>
            <br />
          </div>
          <hr />
          <div id="col_o__register_info">
            <button type="submit">Регистрация</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { bus, getToken } from "../utils/auth";
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
      this.$store.dispatch("register", data).then(() => {
        this.$router.push("/");
        bus.$emit("auth_sucess", getToken());
      });
    }
  }
};
</script>

<style>
.o-main--register {
  display: flex;
  flex-direction: column;
}

.h3-like {
  text-align: center;
  padding-top: 30px;
}
.main--register__o-row {
  align-items: center;
  width: 100%;
}
.main--register__o-row__col {
  justify-content: center;
  width: 50%;
}
.main--register__o-row__col form {
  width: 100%;
}
#col_o__register_info {
  margin-top: 20px;
}

.main--register__o-row__col input#register_info_c_name,
input#register_info_c_password,
input#register_info_c_password-confirm,
input#register_info_c_email {
  width: 100%;
}
</style>