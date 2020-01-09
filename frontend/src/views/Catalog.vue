<template>
  <div>
    <div class="bodyPageContextCatalog">
      <div class="subHeader">
      </div>
      <div class="product">
        <!-- БАХЧЕВЫЕ -->
        <div class="block">
          <div class="card shadow scale" style="width: 18rem;">
            <img src="../img/product/bahcha.jpg" class="card-img-top" alt="bahcha" />
            <div class="card-body">
              <h5 class="card-title">ПРК БЕЛЫЙ ЖЕМЧУГ БАХЧЕВЫЕ</h5>
              <p
                class="card-text"
              >Увеличение урожайности и качества продукции. Повышение резистентности к фитофторозу и насекомым вредителям. Увеличение засухо- и солеустойчивости растений.</p>
              <router-link class="btn btn-primary" to="/gourds">Подробнее</router-link>
            </div>
          </div>
        </div>
        <!-- КУКУРУЗА -->
        <div class="block">
          <div class="card shadow scale" style="width: 18rem;">
            <img src="../img/product/kukuruza.jpg" class="card-img-top" alt="bahcha" />
            <div class="card-body">
              <h5 class="card-title">ПРК БЕЛЫЙ ЖЕМЧУГ КУКУРУЗА</h5>
              <p
                class="card-text"
              >Стимулирует развитие на ранних фазах, предотвращает хлороз, активизирует фотосинтез, повышает иммунный статус, снижает развитие грибных болезней.</p>
              <router-link class="btn btn-primary" to="/corn">Подробнее</router-link>
            </div>
          </div>
        </div>
        <!-- ПОДСОЛНЕЧНИК -->
        <div class="block">
          <div class="card shadow scale" style="width: 18rem;">
            <img src="../img/product/podsolnechnik.jpg" class="card-img-top" alt="bahcha" />
            <div class="card-body">
              <h5 class="card-title">ПРК БЕЛЫЙ ЖЕМЧУГ ПОДСОЛНЕЧНИК</h5>
              <p
                class="card-text"
              >Стимулирует развитие на ранних фазах, предотвращает хлороз, активизирует фотосинтез, повышает иммунный статус, снижает развитие грибных болезней.</p>
              <router-link class="btn btn-primary" to="/sunflower">Подробнее</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "catalog"
};
</script>

<style>
.bodyPageContextSunflower {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
}
.product {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
