<template>
  <div class='feedback-block'>
    <div class='card w-75 mt-4 feedback-block__card'>
      <p>
        <strong>Дата:</strong>
        {{new Date(feedback.create_date).getDate() + '.' + (new Date(feedback.create_date).getMonth()+1) + '.' + new Date(feedback.create_date).getFullYear()}}
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
export default {
  name: 'singleFeedback',
  props: {
    feedback: {
      type: Object
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