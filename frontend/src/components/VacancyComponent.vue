<template>
  <div>
    <div class="mainVacancy">
      <div>
        <h2>Вакансии</h2>
      </div>
      <div>
        <button
          class="btn btn-primary"
          v-if="isAdmin"
          @click="addVacancyInModal=true"
        >Добавить вакансию</button>
      </div>
      <div id="addVacancyComponent">
        <addVacancy v-if="addVacancyInModal" @close="addVacancyInModal=false"></addVacancy>
      </div>

      <div id="addVacancy">
        <div v-for="item in this.$store.getters.getAllVacancies">
          <SingleVacancy v-bind:propA="item" />
        </div>
      </div>

      <!-- <SingleVacancy /> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VacancyComponent",
  components: {
    SingleVacancy: () => import("../components/SingleVacancy"),
    addVacancy: () => import("../components/addVacancy")
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
      .dispatch("getVacancies")
      .then(
        response => {
          console.log(`Vacancies: ${response}`);
        }
      )
      .catch(err => console.log(err));
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    isAdmin: function() {
      return this.$store.getters.userRole == "admin" ? true : false;
    }
  }
};
</script>

<style>
.mainVacancy h1 {
  text-align: center;
}
.mainVacancy {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mainVacancy #addVacancy {
  width: 100%;
}

.mainVacancy #addVacancyComponent {
  width: 60%;
}
</style>