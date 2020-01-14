<template>
  <div class="vacancyBlock">
    <div class="card w-75 mt-4 vacancyBlockInner">
      <div class="card-body">
        <h5 class="card-title">{{propA.post}}</h5>
        <h6>Заработная плата: {{propA.salary}}</h6>
        <div class="accordion" :id="getId('accordionExample',propA._id)">
          <!-- ОБЯЗАННОСТИ -->
          <div class="card">
            <div class="card-header" :id="getId('headingOne', propA._id)">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  :data-target="getTargetId('collapseOne', propA._id)"
                  aria-expanded="true"
                  :aria-controls="getId('collapseOne', propA._id)"
                >Обязанности</button>
              </h5>
            </div>

            <div
              :id="getId('collapseOne', propA._id)"
              class="collapse"
              :aria-labelledby="getId('headingOne', propA._id)"
              :data-parent="getTargetId('accordionExample',propA._id)"
            >
              <div class="card-body" v-html="propA.duties"></div>
            </div>
          </div>
          <!-- ТРЕБОВАНИЯ -->
          <div class="card">
            <div class="card-header" :id="getId('headingTwo', propA._id)">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  :data-target="getTargetId('collapseTwo', propA._id)"
                  aria-expanded="false"
                  :aria-controls="getId('collapseTwo', propA._id)"
                >Требования</button>
              </h5>
            </div>
            <div
              :id="getId('collapseTwo', propA._id)"
              class="collapse"
              :aria-labelledby="getId('headingTwo', propA._id)"
              :data-parent="getTargetId('accordionExample',propA._id)"
            >
              <div class="card-body" v-html="propA.requirements"></div>
            </div>
          </div>
          <!-- УСЛОВИЯ -->
          <div class="card">
            <div class="card-header" :id="getId('headingThree', propA._id)">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  :data-target="getTargetId('collapseThree', propA._id)"
                  aria-expanded="false"
                  :aria-controls="getId('collapseThree', propA._id)"
                >Условия</button>
              </h5>
            </div>
            <div
              :id="getId('collapseThree', propA._id)"
              class="collapse"
              :aria-labelledby="getId('headingThree', propA._id)"
              :data-parent="getTargetId('accordionExample',propA._id)"
            >
              <div class="card-body" v-html="propA.conditions"></div>
            </div>
          </div>
        </div>

        <div>
          <button class="btn btn-primary ml-3" @click="modal=true">Откликнуться</button>
          <ModalDirection :jobParams="propA" v-if="modal" @close="modal=false"></ModalDirection>
          <button
            class="btn btn-primary ml-3"
            v-if="isAdmin"
            @click="vacancyDel(propA)"
          >Удалить вакансию</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function getVal(val) {
  return "#" + val;
}
function getId(val, id) {
  return "" + val + id;
}
function getTargetId(val, id) {
  return "#" + val + id;
}
function collectParameters(info) {
  alert("CLICK");
}
function vacancyDel(propA) {
  this.$store
    .dispatch("deleteVacancy", propA._id)
    .then(
      response => {
        console.log(`Vacancies: ${response}`);
        this.info = this.$store.getters.getAllVacancies;
      }
    )
    .catch(err => console.log(err));
}

export default {
  name: "SingleVacancy",
  components: {
    addVacancy: () => import("../components/addVacancy"),
    ModalDirection: () => import("../components/Modal")
  },
  methods: {
    getVal,
    getId,
    getTargetId,
    collectParameters,
    vacancyDel
  },
  props: {
    propA: {
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
      return this.$store.getters.userRole == "admin" ? true : false;
    }
  }
};
</script>

<style>
.vacancyBlock {
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
.vacancyBlockInner {
  margin: auto;
}
</style>