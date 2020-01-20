<template>
  <footer>
    <div class='o-layout-footer'>
      <p class='o-layout-footer__text'>Copyright © {{new Date().getFullYear()}} Ваше имя все права защищены</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style>
footer {
  margin-top: 100px;
}
.o-layout-footer {
  padding: 5px;
  display: block;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #546e7a;
  color: white;
  text-align: center;
}
.o-layout-footer__text {
  margin-top: 0.625em;
}
</style>