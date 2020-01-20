<template>
<div class='o-main--add-vacancy'>
<h3 class='h3-like'>Добавить вакансию</h3>
  <div class='o-main--add-vacancy main--add-vacancy__o-row'>
      <form @submit.prevent='addVacancy'>
        <hr />
        <div id='col__o_vacancy_info'>
          <label for='vacancy_info__c_post'>
            Должность
            <span class='red'>*</span>
          </label>
          <input id='vacancy_info__c_post' required v-model='post' type='text' placeholder='Должность' />
        </div>
        <div id='col__o_vacancy_info'>
          <label for='vacancy_info__c_salary'>
            Зарплата
            <span class='red'>*</span>
          </label>
          <input id='vacancy_info__c_salary' required v-model='salary' type='text' placeholder='Зарплата' />
        </div>
        <div id='col__o_vacancy_info'>
          <label for='vacancy_info__c_duties'>
            Обязанности
            <span class='red'>*</span>
          </label>
          <input id='vacancy_info__c_duties' required v-model='duties' type='textarea' placeholder='Обязанности' />
        </div>
        <div id='col__o_vacancy_info'>
          <label for='vacancy_info__c_requirements'>
            Требования
            <span class='red'>*</span>
          </label>
          <input
            id='vacancy_info__c_requirements'
            required
            v-model='requirements'
            type='text'
            placeholder='Требования'
          />
        </div>
        <div id='col__o_vacancy_info'>
          <label for='vacancy_info__c_conditions'>
            Условия
            <span class='red'>*</span>
          </label>
          <input id='vacancy_info__c_conditions' required v-model='conditions' type='text' placeholder='Условия' />
        </div>
        <div>
          <button class='btn btn-primary'>Добавить</button>
          <br />
          <button class='btn btn-primary' @click='$emit('close')'>Закрыть</button>
          <br />
          <label v-if='statusAddVacancy' class='mt-3'>Новая вакансия добавлена!</label>
        </div>
        <hr />
      </form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'addVacancy',
  props: {
    vacancyParams: {
      type: Object
    }
  },
  data() {
    return {
      post: '',
      salary: '',
      duties: '',
      requirements: '',
      conditions: '',
      statusAddVacancy: ''
    };
  },
  methods: {
    addVacancy: function() {
      let post = this.post;
      let salary = this.salary;
      let duties = this.duties;
      let requirements = this.requirements;
      let conditions = this.conditions;

      this.$store
        .dispatch('addVacancy', {
          post,
          salary,
          duties,
          requirements,
          conditions
        })
        .then(() => (this.statusAddVacancy = 'complete'))
        .catch(err => {
          this.statusAddVacancy = null;
          console.log(err);
        });
    }
  }
};
</script>

<style>
.o-main--add-vacancy{
  display: flex;
  flex-direction: column;
}

.o-main--add-vacancy .h3-like {
  text-align: center;
  padding-top: 30px;
}

.main--add-vacancy__o-row {
  align-items: center;
  width: 100%;
}

.main--add-vacancy__o-row form{
  width: 100%;
}

#col__o_vacancy_info {
  margin-top: 20px;
}

.main--add-vacancy__o-row input#vacancy_info__c_post,
input#vacancy_info__c_salary,
input#vacancy_info__c_duties,
input#vacancy_info__c_requirements,
input#vacancy_info__c_conditions {
  border-radius: 5px;
  width: 100%;
}

.red {
  color: red;
}
</style>