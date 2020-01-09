<template>
  <div>
    <div class="mainFeedback">
      <h2>Отклики пользователей</h2>

      <div id="addFeedbackInfo">
        <div v-for="item in this.$store.getters.getAllFeedback">
          <SingleFeedback v-bind:feedback="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "userFeedback",
  components: {
    SingleFeedback: () => import("../components/SingleFeedback")
  },
  mounted() {
    //Get vacancies in store axios
    this.$store
      .dispatch("getAllFeedback")
      .then(
        response => {
          console.log(`Vacancies: ${response}`);
        }
      )
      .catch(err => console.log(err));
  }
};
</script>

<style>
.mainFeedback h2 {
  text-align: center;
}
.mainFeedback {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mainFeedback #addFeedbackInfo {
  width: 100%;
}
</style>