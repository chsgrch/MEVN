<template>
  <div>
    <VacancyComponent/>
  </div>
</template>

<script>
export default {
  name: 'vacancyView',
  components: {
    VacancyComponent: () => import('@/components/VacancyComponent')
  }
}
</script>

<style>

</style>