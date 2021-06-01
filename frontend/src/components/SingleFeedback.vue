<template>
  <div class='feedback-block'>
    <div class='card w-75 mt-4 feedback-block__card'>
      <p>
        <strong>Дата:</strong>
        {{feedback.create_date | moment}}
      </p>
      <p>
        <strong>Фамилия:</strong>
        {{feedback.surname}}
      </p>
      <p>
        <strong>Имя:</strong>
        {{feedback.name}}
      </p>
      <p>
        <strong>e-mail:</strong>
        {{feedback.mail}}
      </p>
      <p>
        <strong>Вакансия:</strong>
        {{feedback.vacansy}}
      </p>
    </div>
  </div>
</template>
    
<script>
import moment from 'moment'
export default {
  name: 'singleFeedback',
  props: {
    feedback: {
      type: Object
    }
  },
  filters: {
    moment(date){
      return moment(date).locale('ru').format('ll');
    }
  }
};
</script>

<style>
.card {
  margin: 20px;
}
.o-main--feedback__add-feedback-cycle {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 300px;
}
.feedback-block__card {
  margin: auto;
  padding: 30px;
}
</style>