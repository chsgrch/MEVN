<template>
  <div class='o-body-partners'>
    <h2 class='h2-like-partners'>Партнеры</h2>
      <div class='o-body-partners__context'>
        <p>
          Наша клиентская база постоянно растет, поэтому мы стремимся расширять ассортимент предлагаемых товаров и географию продаж. Если Вы хотите
          <strong>стать нашим партнером</strong>, мы с удовольствием рассмотрим Ваш спрос и предложения. Для заключения договора о сотрудничестве необходимо отправить заявку самостоятельно
          <strong>на контактный e-mail</strong>:
          <a href='mailto:info@kolos.ru'>info@kolos.ru</a> с пометкой &#8220;Сотрудничество&#8221; или позвонить
          <strong>по контактному телефону:</strong> +7 (988) 202-19-46, если у Вас есть какие-либо вопросы.
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'partners'
};
</script>

<style>
.o-body-partners {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
}
.o-body-partners__context {
  text-align: justify;
}
.h2-like-partners {
  padding-top: 30px;
  text-align: center;
}
</style>