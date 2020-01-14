<template>
  <div>
    <VacancyComponent/>
  </div>
</template>

<script>
export default {
  name: 'vacancyView',
  components: {
    VacancyComponent: () => import("@/components/VacancyComponent.vue")
  }
}
</script>

<style>

</style>