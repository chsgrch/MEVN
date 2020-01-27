<template>
  <div class='o-main--all-vacancy'>
    <div class='o-main--all-vacancy o-main--all-vacancy__vacancy-area'>
      <div>
        <h2>Вакансии</h2>
      </div>
      <div>
        <button
          class='btn btn-primary'
          v-if='isAdmin'
          @click='addVacancyInModal=true'
        >Добавить вакансию</button>
      </div>
      <div id='add-vacancy-component'>
        <addVacancy v-if='addVacancyInModal' @close='addVacancyInModal=false'></addVacancy>
      </div>

      <div id='show-all-vacancyes'>
        <div v-for='item in this.$store.getters.getAllVacancies'>
          <SingleVacancy v-bind:vacancyProperty='item' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'VacancyComponent',
  components: {
    SingleVacancy: () => import('../components/SingleVacancy'),
    addVacancy: () => import('../components/addVacancy')
  },
  data: function() {
    return {
      value: 5,
      info: null,
      addVacancyInModal: false
    };
  },
  mounted() {
    //Get vacancies in store axios
    this.$store
      .dispatch('getVacancies')
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    isAdmin: function() {
      return this.$store.getters.userRole == 'admin' ? true : false;
    }
  }
};
</script>

<style>
.o-main--all-vacancy{
  display: flex;
  flex-direction: column;
}

.o-main--all-vacancy__vacancy-area h1 {
  text-align: center;
}
.o-main--all-vacancy__vacancy-area {
  padding-top: 20px;
  align-items: center;
}

.o-main--all-vacancy__vacancy-area #show-all-vacancyes {
  width: 100%;
  min-width: 520px;
}

.o-main--all-vacancy__vacancy-area #add-vacancy-component {
  width: 60%;
}
</style>