<template>
  <section class="section-services">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-10 col-lg-8">
          <div class="header-section">
            <h2 class="title">Nos <span>partenaires</span></h2>
            <p class="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour</p>
          </div>
        </div>
      </div>
  <swiper
      :centeredSlides="true"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper"
      :breakpoints="swiperOptions.breakpoints"
  >

    <swiper-slide>
      <div class="card">
      <img src="~@/assets/associations/assoc1.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h1 class="card-title text-center">Association Marocaine </h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
     </div>
    </swiper-slide>
    <swiper-slide width="300px">
      <div class="card">
      <img src="~@/assets/associations/assoc1.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h1 class="card-title text-center">Fédération marocaine </h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide>
      <div class="card">
      <img src="~@/assets/associations/assoc2.png" class="card-img-top" alt="..." >
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide><div class="card">
      <img src="~@/assets/associations/assoc3.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide><div class="card">
      <img src="~@/assets/associations/assoc2.png" class="card-img-top" alt="..." >
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide><div class="card">
      <img src="~@/assets/associations/assoc1.png" class="card-img-top" alt="..." height="100PX"  >
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide><div class="card">
      <img src="~@/assets/associations/assoc2.png" class="card-img-top" alt="..."  height="100PX" >
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide><div class="card">
      <img src="~@/assets/associations/assoc1.png" class="card-img-top" alt="..." height="100PX" >
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide><div class="card">
      <img src="~@/assets/associations/assoc3.jpg" class="card-img-top" alt="..." height="100PX"  >
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
        <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
  </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
export default {
  name: `sliderassoc`,
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data(){
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 50
          },

          771: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      }
    }
  },
}
</script>

<style scoped>
swiper {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
img.card-img-top {
  height: 100PX;
  width: 100px;
  margin: auto;
}
button{
  border-radius: 20px;
}
h1{
  font-weight: bold;
  font-size: 20px;
  color: black;

}

.section-services .header-section {
  margin-bottom: 35px;
}

.section-services .header-section .title {
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 25px;
  text-transform: uppercase;
  font-weight: 700;
}

.section-services .header-section .title:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 1px;
  background-color: #f70037;
}

.section-services .header-section .title:after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 45px;
  height: 3px;
  background-color: #f70037;
}

.section-services .header-section .title span {
  color: #f70037;
}
.section-services {
  padding: 40px 40px 25px;
}

.section-services .single-service .part-1 .title {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.8em;
}

.section-services{
  padding: 30px 40px 40px;
}
.section-services .single-service .part-2 a {
  color: black;
  font-size: 14px;
  text-decoration: none;
}
h2.title {
  color: black;
}
.section-services .header-section {
  color: black;
}
h2.title {
  margin-top: 40px;
}


</style>