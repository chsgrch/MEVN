<template>
  <div class="home">
    <MainPageContent/>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    MainPageContent: () => import("@/components/MainPageContent.vue")
  }
}
</script>
