<template>
  <div class="slider">
    <div class="shadow">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="card-img-top d-block w-100"
              src="../img/slider/new/slide_1_.jpg"
              alt="slide_1"
            />
            <div class="carousel-caption d-none d-md-block" data-interval="3000">
              <div class="slider_text">
                <h5>Цели и задачи компании -</h5>
                <p>повысить эффективность применения удобрений при увеличении урожайности и качества продукции.</p>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-interval="3000">
            <img
              class="card-img-top d-block w-100"
              src="../img/slider/new/slide_2_.jpg"
              alt="slide_2"
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="slider_text">
                <h5>Кредо нашей компании -</h5>
                <p>компетентность, профессионализм, оперативность, бережное отношение к каждому клиенту</p>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-interval="3000">
            <img
              class="card-img-top d-block w-100"
              src="../img/slider/new/slide_3_.jpeg"
              alt="slide_3"
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="slider_text">
                <p>Гибкий подход позволяет нам дифференцированно подходить к каждому полю, каждой проблеме.</p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slider"
};
</script>

<style>
.slider {
  width: 100%;
}
.slider_text {
  background-color: #666666;
  opacity: 0.9;
  border-radius: 10px;
}

.slider_text p {
  color: white;
}
</style>