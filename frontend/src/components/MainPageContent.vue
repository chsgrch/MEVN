<template>
  <div>
    <div class="hInfo">
      <div class="hBlock">
        <div class="headerIco">
          <img src="../img/favicon/fav.png" class="img-fluid" alt="Header ico" />
        </div>
      </div>
      <div class="hBlock">
        <div class="pageHeadText">
          <h2>ООО «Колос»</h2>
          <h2>технологии управления урожаем-мечтой!</h2>
        </div>
      </div>
    </div>
    <div class="bodyPageContextMain">
      <div class="inBodyContentMain">
        <div class="sliderClass">
          <sliderControl></sliderControl>
        </div>

        <div class="textBlock">
          <strong>ООО “Колос”</strong> является российским производителем уникальных, натуральных, органо-минеральных питательных комплексов
          для выращивания растений в открытом и защищенном грунте. Линии «ПРК Белый Жемчуг», «ПРК Черный Жемчуг», благодаря высокой эффективности,
          пользуются большим спросом в России и за рубежом. Сотрудничество с международными компаниями: Atlantica Agricola (Испания) и Penergetic
          ( Швейцария) – обеспечивает высокий профессиональный уровень технологий питания растений. Благодаря нашим удобрениям удалось повысить показатели
          сбора урожая для таких зерновых культур, как пшеница, ячмень и гречиха. Ниже на графике данные представлены наглядно.
          <div class="subHeader">
            <h2>График урожайности</h2>
          </div>
          <graph class="customGruph"></graph>Представляем:
          <ul>
            <li>Умные технологии выращивания экологически чистой продукции на основе почвенной и растительной диагностики;</li>
            <li>Удобрения оптом и в розницу для питания растений открытого и защищенного грунта, оригинальные стимуляторы, современные технологии минерального питания для фертигации – питания через капельные системы;</li>
            <li>Услуги по проведению почвенной и растительной диагностики. Рекомендации по минеральному питанию;</li>
            <li>Измерительные приборы: N-тестер (измерение динамики накопления хлорофилла в растении), рефрактометр (определение содержания сахара), влагомеры зерна (определение влажности зерна, крупы), пенетрометр (определение плотности почвы) и другие;</li>
            <li>Аквакат: бытовые и промышленные приборы по исправлению природной жесткости воды и её оживления.</li>
          </ul>
        </div>

        <products></products>

        <!-- <div class="subHeader">
          <h2>Наши сертификаты</h2>
        </div>
        <div class="sert">
          <div class="sert-child" @click="showSingleUrlSert1">
            <img
              src="../img/sertificates/svid_agroplus_lab.jpg"
              alt="svid_agroplus_lab.jpg"
              class="shadow scale"
            />
          </div>
          <div class="sert-child" @click="showSingleUrlSert2">
            <img src="../img/sertificates/svid_lab_1.jpg" alt="svid_lab_1.jpg" class="shadow scale" />
          </div>
        </div> -->

        <div>
          <vue-easy-lightbox
            escDisabled
            moveDisabled
            :visible="visible"
            :imgs="imgs"
            :index="index"
            @hide="handleHide"
          ></vue-easy-lightbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import graph from "./graph/graphHarvest.js";
import VueEasyLightbox from "vue-easy-lightbox";
import products from "../views/Catalog";
import sliderControl from "./slider";

export default {
  name: "MainPageContent",
  components: {
    graph,
    VueEasyLightbox,
    products,
    sliderControl
  },
  data: function() {
    return {
      visible: false,
      index: 0,
      imgs: ""
    };
  },
  methods: {
    showSingleUrlSert1() {
      this.imgs = "http://localhost:8081/img/svid_agroplus_lab.c25ac7bd.jpg";
      this.show();
    },
    showSingleUrlSert2() {
      this.imgs = "http://localhost:8081/img/svid_lab_1.68f071bb.jpg";
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style>
.hInfo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 55px;
  padding-right: 55px;
  padding-bottom: 20px;
}
.pageHeadText {
  text-align: center;
}
.headerIco {
  text-align: center;
  max-width: 90px;
  height: auto;
  padding-top: 25px;
  padding-right: 10px;
}
.hBlock {
  min-width: calc(20%-100px);
}
.bodyPageContextMain {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.inBodyContentMain {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 80%;
}
.sert {
  display: flex;
  justify-content: center;
}
.sert-child {
  padding: 15px;
  box-sizing: border-box;
  width: 30%;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
}

.card {
  margin: 20px;
}
.block {
  min-width: calc(20% - 20px);
}

.subProduct {
  padding: 15px;
  box-sizing: border-box;
  width: 30%;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
}
.textBlock {
  text-align: justify;
}
.subHeader {
  text-align: center;
  padding-top: 30px;
}
.shadow {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.scale {
  transition: 0.5s;
  display: block;
}
.scale:hover {
  transform: scale(1.03);
  z-index: 999;
}
img {
  max-width: 100%;
}
.slider {
  margin-bottom: 20px;
}
.sliderClass {
  width: 100%;
}
</style>