<template>
  <div class='o-main'>
    <div class='o-main o-main__header-field'>
      <div class='header-field__img-field'>
        <img src='../img/favicon/fav.png' class='img-fluid header-img-like' alt='Header ico' />
      </div>
      <div class='o-main header-field__text-field'>
        <div class='o-main text-field__page-header'>
          <h2>ООО «Колос»</h2>
          <h2>технологии управления урожаем-мечтой!</h2>
        </div>
      </div>
    </div>
    <div class='o-main o-main__body-page'>
      <div class='o-main body-page__content-page-main'>
        <div class='content-page-main__slider'>
          <sliderControl></sliderControl>
        </div>

        <div class='content-page-main__text-block'>
          <strong>ООО “Колос”</strong> является российским производителем уникальных, натуральных, органо-минеральных питательных комплексов
          для выращивания растений в открытом и защищенном грунте. Линии «ПРК Белый Жемчуг», «ПРК Черный Жемчуг», благодаря высокой эффективности,
          пользуются большим спросом в России и за рубежом. Сотрудничество с международными компаниями: Atlantica Agricola (Испания) и Penergetic
          ( Швейцария) – обеспечивает высокий профессиональный уровень технологий питания растений. Благодаря нашим удобрениям удалось повысить показатели
          сбора урожая для таких зерновых культур, как пшеница, ячмень и гречиха. Ниже на графике данные представлены наглядно.
          <div class='text-block__sub-header'>
            <h2>График урожайности</h2>
          </div>
          <graph></graph>
          <br />
          <p>Представляем:</p>
          <ul>
            <li>Умные технологии выращивания экологически чистой продукции на основе почвенной и растительной диагностики;</li>
            <li>Удобрения оптом и в розницу для питания растений открытого и защищенного грунта, оригинальные стимуляторы, современные технологии минерального питания для фертигации – питания через капельные системы;</li>
            <li>Услуги по проведению почвенной и растительной диагностики. Рекомендации по минеральному питанию;</li>
          </ul>
        </div>

        <products></products>

        <div class='content-page-main__sub-header'>
          <h2>Наши сертификаты</h2>
        </div>
        <div class='content-page-main__sert'>
            <img
              src='../img/sertificates/svid_agroplus_lab.jpg'
              alt='svid_agroplus_lab.jpg'
              class='shadow scale img-sert-size'
              @click='showSingleUrlSert1'
            />
            <img
              src='../img/sertificates/svid_lab_1.jpg'
              alt='svid_lab_1.jpg'
              class='shadow scale img-sert-size'
              @click='showSingleUrlSert2'
            />
        </div>

        <div>
          <vue-easy-lightbox
            escDisabled
            moveDisabled
            :visible='visible'
            :imgs='imgs'
            :index='index'
            @hide='handleHide'
          ></vue-easy-lightbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPageContent',
  components: {
    graph: () => import('./graph/graphHarvest.js'),
    VueEasyLightbox: () => import('vue-easy-lightbox'),
    products: () => import('../views/Catalog'),
    sliderControl: () => import('./slider')
  },
  data: function() {
    return {
      visible: false,
      index: 0,
      imgs: ''
    };
  },
  methods: {
    showSingleUrlSert1() {
      this.imgs = 'http://localhost:8081/img/svid_agroplus_lab.c25ac7bd.jpg';
      this.show();
    },
    showSingleUrlSert2() {
      this.imgs = 'http://localhost:8081/img/svid_lab_1.68f071bb.jpg';
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
.o-main {
  display: flex;
  flex-direction: column;
}
.o-main__header-field {
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-right: 55px;
  padding-bottom: 20px;
  padding-left: 55px;
}
.header-field__text-field,
.header-field__img-field {
  min-width: calc(20%-100px);
}
.header-img-like {
  text-align: center;
  max-width: 90px;
  height: auto;
  padding-right: 10px;
  padding-bottom: 10px;
}
.text-field__page-header {
  text-align: center;
}
.o-main__body-page {
  flex-direction: row;
  justify-content: center;
}
.body-page__content-page-main {
  flex-direction: column;
  align-items: stretch;
  width: 80%;
}
.content-page-main__slider {
  width: 100%;
}
.content-page-main__text-block {
  text-align: justify;
}
.content-page-main__sub-header,
.text-block__sub-header {
  text-align: center;
  padding-top: 30px;
}
.content-page-main__sert {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.img-sert-size {
  width: 300px;
  padding: 20px;
  margin: 10px;
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
</style>