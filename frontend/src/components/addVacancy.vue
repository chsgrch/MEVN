<template>
  <div class="mainAddVacancy">
    <div class="pageHeadText">
      <h3>Добавить вакансию</h3>
    </div>
    <!-- <div class="bodyPageContextLogin"> -->
    <div class="inBodyContentLogin">
      <form class="login" @submit.prevent="addVacancy">
        <hr />
        <div id="userData">
          <label for="post">Должность<span class="red"> *</span></label>
            <input id="post" required v-model="post" type="text" placeholder="Должность" />
        </div>

        <div id="userData">
          <label for="salary">Зарплата<span class="red"> *</span></label>
          <input id="salary" required v-model="salary" type="text" placeholder="Зарплата" />
        </div>

        <div id="userData">
          <label for="duties">Обязанности<span class="red"> *</span></label>
          <input id="duties" required v-model="duties" type="textarea" placeholder="Обязанности" />
        </div>
        <div id="userData">
          <label for="requirements">Требования<span class="red"> *</span></label>
          <input id="requirements" required v-model="requirements" type="text" placeholder="Требования" />
        </div>
        <div id="userData">
          <label for="conditions">Условия<span class="red"> *</span></label>
          <input id="conditions" required v-model="conditions" type="text" placeholder="Условия" />
        </div>

        <div>
          <button class="btn btn-primary">Добавить</button>
          <br />
          <button class="btn btn-primary" @click="$emit('close')">Закрыть</button>
          <br/>
          <label v-if="statusAddVacancy" class="mt-3">Новая вакансия добавлена!</label>
        </div>
        <hr />
      </form>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>

export default {
  name: "addVacancy",
  props: {
    vacancyParams: {
      type: Object
    }
  },
  data() {
    return {
      post: "",
      salary: "",
      duties: "",
      requirements: "",
      conditions: "",
      statusAddVacancy: ""
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
        .dispatch("addVacancy", { post, salary, duties, requirements, conditions})
        .then(()=>this.statusAddVacancy="complete") //() => this.$router.push("/")
        .catch(err => {
            this.statusAddVacancy=null;
            console.log(err)
            });
    }
  }
};
</script>

<style>
.mainAddVacancy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#userData {
  margin-top: 20px;
}
.bodyPageContextLogin {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.inBodyContentLogin {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}
.inBodyContentLogin input#post,
input#salary, input#duties, input#requirements, input#conditions {
  border-radius: 5px;
  width: 100%;
}

.red{
    color: red;
}
</style>