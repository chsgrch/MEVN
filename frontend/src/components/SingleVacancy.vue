<template>
  <div class='o-main-vacansy'>
    <div class='card w-75 mt-4 o-main-vacansy__card'>
      <div class='card-body'>
        <h5 class='card-title'>{{vacancyProperty.post}}</h5>
        <h6>Заработная плата: {{vacancyProperty.salary}}</h6>
        <div class='accordion' :id="getId('accordionExample',vacancyProperty._id)">
          <!-- ОБЯЗАННОСТИ -->
          <div class='card'>
            <div class='card-header' :id="getId('headingOne', vacancyProperty._id)">
              <h5 class='mb-0'>
                <button
                  class='btn btn-link'
                  type='button'
                  data-toggle='collapse'
                  :data-target="getTargetId('collapseOne', vacancyProperty._id)"
                  aria-expanded='true'
                  :aria-controls="getId('collapseOne', vacancyProperty._id)"
                >Обязанности</button>
              </h5>
            </div>

            <div
              :id="getId('collapseOne', vacancyProperty._id)"
              class='collapse'
              :aria-labelledby="getId('headingOne', vacancyProperty._id)"
              :data-parent="getTargetId('accordionExample',vacancyProperty._id)"
            >
              <div class='card-body' v-html='vacancyProperty.duties'></div>
            </div>
          </div>
          <!-- ТРЕБОВАНИЯ -->
          <div class='card'>
            <div class='card-header' :id="getId('headingTwo', vacancyProperty._id)">
              <h5 class='mb-0'>
                <button
                  class='btn btn-link collapsed'
                  type='button'
                  data-toggle='collapse'
                  :data-target="getTargetId('collapseTwo', vacancyProperty._id)"
                  aria-expanded='false'
                  :aria-controls="getId('collapseTwo', vacancyProperty._id)"
                >Требования</button>
              </h5>
            </div>
            <div
              :id="getId('collapseTwo', vacancyProperty._id)"
              class='collapse'
              :aria-labelledby="getId('headingTwo', vacancyProperty._id)"
              :data-parent="getTargetId('accordionExample',vacancyProperty._id)"
            >
              <div class='card-body' v-html="vacancyProperty.requirements"></div>
            </div>
          </div>
          <!-- УСЛОВИЯ -->
          <div class='card'>
            <div class='card-header' :id="getId('headingThree', vacancyProperty._id)">
              <h5 class='mb-0'>
                <button
                  class='btn btn-link collapsed'
                  type='button'
                  data-toggle='collapse'
                  :data-target="getTargetId('collapseThree', vacancyProperty._id)"
                  aria-expanded='false'
                  :aria-controls="getId('collapseThree', vacancyProperty._id)"
                >Условия</button>
              </h5>
            </div>
            <div
              :id="getId('collapseThree', vacancyProperty._id)"
              class='collapse'
              :aria-labelledby="getId('headingThree', vacancyProperty._id)"
              :data-parent="getTargetId('accordionExample',vacancyProperty._id)"
            >
              <div class='card-body' v-html='vacancyProperty.conditions'></div>
            </div>
          </div>
        </div>

        <div>
          <button class='btn btn-primary ml-3' @click="modal=true">Откликнуться</button>
          <ModalDirection :jobParams="vacancyProperty" v-if="modal" @close="modal=false"></ModalDirection>
          <button
            class='btn btn-primary ml-3'
            v-if='isAdmin'
            @click="vacancyDel(vacancyProperty)"
          >Удалить вакансию</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function getVal(val) {
  return '#' + val;
}
function getId(val, id) {
  return '' + val + id;
}
function getTargetId(val, id) {
  return '#' + val + id;
}
function collectParameters(info) {
  alert('CLICK');
}
function vacancyDel(vacancyProperty) {
  this.$store
    .dispatch('deleteVacancy', vacancyProperty._id)
    .then(
      response => {
        this.info = this.$store.getters.getAllVacancies;
      }
    )
}

export default {
  name: 'SingleVacancy',
  components: {
    addVacancy: () => import('../components/addVacancy'),
    ModalDirection: () => import('../components/Modal')
  },
  methods: {
    getVal,
    getId,
    getTargetId,
    collectParameters,
    vacancyDel
  },
  props: {
    vacancyProperty: {
      type: Object
    }
  },
  data: function() {
    return {
      modal: false
    };
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
.o-main-vacansy {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.card-text {
  text-align: justify;
}
.btn-primary {
  margin-top: 20px;
}
.o-main-vacansy__card {
  margin: auto;
}
</style>