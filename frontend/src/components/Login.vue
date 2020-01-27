<template>
  <div class='o-main--login'>
    <h3 class='h3-like'>Вход</h3>
    <div class='o-main--login main--login__o-row'>
      <div class='o-main--login main--login__o-row__col'>
        <form @submit.prevent='login'>
          <hr />
          <div id='col_o__login_info'>
            <label for='login_info_c_mail'>Email</label>
            <input id='login_info_c_mail' required v-model='email' type='email' placeholder='Имя' />
          </div>

          <div id='col_o__login_info'>
            <label for='login_info_c_pass'>Пароль</label>
            <input id='login_info_c_pass' required v-model='password' type='password' placeholder='Пароль' />
          </div>
          <hr />
          <button type='submit'>Вход</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch('login', { email, password })
        .then(() => {
          this.$router.push('/');
          })
    }
  }
};
</script>

<style>
.o-main--login{
  display: flex;
  flex-direction: column;
}

.h3-like{
  text-align: center;
  padding-top: 30px;
}

.main--login__o-row {
  align-items: center;
  width: 100%;
}

.main--login__o-row__col {
  justify-content: center;
  width: 45%;
}

.main--login__o-row__col form{
  width: 100%;
}

#col_o__login_info {
  margin-top: 20px;
}

.main--login__o-row__col input#login_info_c_mail,
input#login_info_c_pass {
  width: 100%;
}
</style>