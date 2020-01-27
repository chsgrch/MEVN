<template>
  <div>
    <div class='o-main--feedback'>
      <h2>Отклики пользователей</h2>

      <div id='o-main--feedback__add-feedback-cycle'>
        <div v-for='item in this.$store.getters.getAllFeedback'>
          <SingleFeedback v-bind:feedback='item' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'userFeedback',
  components: {
    SingleFeedback: () => import('../components/SingleFeedback')
  },
  mounted() {
    //Get vacancies in store axios
    this.$store
      .dispatch('getAllFeedback')
      .then()
  }
};
</script>

<style>
.o-main--feedback h2 {
  text-align: center;
}
.o-main--feedback {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.o-main--feedback #o-main--feedback__add-feedback-cycle {
  width: 100%;
}
</style>