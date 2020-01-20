<template>
  <div class='o-view-sun-flowers'>
    <div class='o-view-sun-flowers o-view-sun-flowers__body'>
      <h2 class='h2-like-sun-flowers'>ПРК БЕЛЫЙ ЖЕМЧУГ ПОДСОЛНЕЧНИК</h2>
      <img src='../img/product/podsolnechnik.jpg' class='img-fluid' alt='Кукуруза' />
      <div class='body__sun-flower-info'>
        <p>
          <strong>Описание:</strong> Жидкая органо-минеральная смесь длительного действия.
        </p>
        <p>
          <strong>Препаративная форма:</strong> Суспензия группы минералов природного происхождения с добавлением морских кораллов, вулканического пепла.
        </p>
        <p>
          <strong>Назначение</strong>: Природный фотосинтезатор.
        </p>
        <p>
          <strong>Механизм действия:</strong> Стимулирует развитие на ранних фазах, предотвращает хлороз, активизирует фотосинтез, повышает иммунный статус, снижает развитие грибных болезней. Способствует увеличению вегетативной массы, формированию корзинки, полноценному вызреванию и выполненности семян.
        </p>
        <p>
          <strong>Эффективность:</strong> Данный продукт показывает впечатляющие результаты в системной программе питания линии ПРК &#8220;Белый Жемчуг&#8221;.
        </p>
        <p>
          <strong>Совместимость:</strong> Не рекомендуется смешивать с другими агрохимикатами, во избежание снижения эффективности.
          <br />Совместим с большинством СЗР, рекомендуется провести предварительный тест на смешиваемость с соблюдением рабочей концентрации. Перед применением встряхнуть упаковку и перемешать.
        </p>
        <p>
          <strong>Рекомендуется для применения на всех направлениях выращивания подсолнечника и других масличных культур</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sunflower'
};
</script>

<style>
.o-view-sun-flowers {
  display: flex;
  flex-direction: column;
}
.o-view-sun-flowers__body{
  justify-content: center;
  padding-top: 20px;
}
.h2-like-sun-flowers {
  text-align: center;
}
.body__sun-flower-info {
  padding: 30px;
  text-align: justify;
}
.img-fluid {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>