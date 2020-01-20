<template>
  <div class='o-body-catalog'>
    <h2 class='h2-like-catalog'>Наша продукция</h2>
    <div class='o-body-catalog o-body-catalog__product'>
      <!-- БАХЧЕВЫЕ -->
      <div class='block'>
        <div class='card shadow scale' style='width: 18rem;'>
          <img src='../img/product/bahcha.jpg' class='card-img-top' alt='bahcha' />
          <div class='card-body'>
            <h5 class='card-title'>ПРК БЕЛЫЙ ЖЕМЧУГ БАХЧЕВЫЕ</h5>
            <p
              class='card-text'
            >Увеличение урожайности и качества продукции. Повышение резистентности к фитофторозу и насекомым вредителям. Увеличение засухо- и солеустойчивости растений.</p>
            <router-link class='btn btn-primary' to='/gourds'>Подробнее</router-link>
          </div>
        </div>
      </div>
      <!-- КУКУРУЗА -->
      <div class='block'>
        <div class='card shadow scale' style='width: 18rem;'>
          <img src='../img/product/kukuruza.jpg' class='card-img-top' alt='bahcha' />
          <div class='card-body'>
            <h5 class='card-title'>ПРК БЕЛЫЙ ЖЕМЧУГ КУКУРУЗА</h5>
            <p
              class='card-text'
            >Стимулирует развитие на ранних фазах, предотвращает хлороз, активизирует фотосинтез, повышает иммунный статус, снижает развитие грибных болезней.</p>
            <router-link class='btn btn-primary' to='/corn'>Подробнее</router-link>
          </div>
        </div>
      </div>
      <!-- ПОДСОЛНЕЧНИК -->
      <div class='block'>
        <div class='card shadow scale' style='width: 18rem;'>
          <img src='../img/product/podsolnechnik.jpg' class='card-img-top' alt='bahcha' />
          <div class='card-body'>
            <h5 class='card-title'>ПРК БЕЛЫЙ ЖЕМЧУГ ПОДСОЛНЕЧНИК</h5>
            <p
              class='card-text'
            >Стимулирует развитие на ранних фазах, предотвращает хлороз, активизирует фотосинтез, повышает иммунный статус, снижает развитие грибных болезней.</p>
            <router-link class='btn btn-primary' to='/sunflower'>Подробнее</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'catalog'
};
</script>

<style>
.o-body-catalog {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.o-body-catalog__product {
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.h2-like-catalog {
  margin-top: 30px;
  text-align: center;
}
.card {
  margin: 10px;
}
</style>
