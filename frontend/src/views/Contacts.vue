<template>
  <div>
    <div class="headTextContacts">
      <h2>Контакты</h2>
    </div>
    <div class="mainContact">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <strong>ООО &#8220;ООО "Колос"&#8221; представительство в г.Краснодар</strong>
          <br />
          <strong>Адрес:</strong>&nbsp;350051, г.Краснодар, проезд Репина 5
          <br />
          <strong>Директор:</strong>&nbsp;Щиренко Ирина Петровна
          <br />
          <strong>Тел./факс:</strong>&nbsp; +7 (988) 202-19-46
          <br />
          <strong>e-mail: </strong>
          <a href="mailto:info@kolos.ru" class="mobile-mail__link">info@kolos.ru</a>
          <p>
            <strong>График работы:</strong>
            <br />Понедельник-пятница с 8:00 до 17:00.
            <br />Суббота, воскресенье: выходной.
            <br />
          </p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <a
            href="https://static-maps.yandex.ru/1.x/?ll=38.976382,45.075151&amp;size=450,450&amp;z=16&amp;l=map&pt=38.976382,45.075151,org"
            data-toggle="lightbox"
          >
            <img
              src="https://static-maps.yandex.ru/1.x/?ll=38.976382,45.075151&amp;size=650,450&amp;z=16&amp;l=map&pt=38.976382,45.075151,org"
              alt="yandex maps"
            />
          </a>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contacts"
};
</script>

<style>
.mainContact {
  padding: 30px;
}
.headTextContacts {
  text-align: center;
  padding-top: 20px;
}
</style>