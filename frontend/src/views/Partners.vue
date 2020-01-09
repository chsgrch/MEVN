<template>
  <div>
    <div class="headPartnersText">
      <h2>Партнеры</h2>
    </div>
    <div class="bodyPageContextPartners">
      <div class="inBodyContentPartners">
        <p>
          Наша клиентская база постоянно растет, поэтому мы стремимся расширять ассортимент предлагаемых товаров и географию продаж. Если Вы хотите
          <strong>стать нашим партнером</strong>, мы с удовольствием рассмотрим Ваш спрос и предложения. Для заключения договора о сотрудничестве необходимо отправить заявку самостоятельно
          <strong>на контактный e-mail</strong>:
          <a href="mailto:info@kolos.ru">info@kolos.ru</a> с пометкой &#8220;Сотрудничество&#8221; или позвонить
          <strong>по контактному телефону:</strong> +7 (988) 202-19-46, если у Вас есть какие-либо вопросы.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "partners"
};
</script>

<style>
.bodyPageContextPartners {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
}
.inBodyContentPartners {
  text-align: justify;
}
.headPartnersText {
  padding-top: 30px;
  text-align: center;
}
</style>