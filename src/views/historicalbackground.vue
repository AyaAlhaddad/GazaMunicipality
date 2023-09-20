<script setup>
import Sidebar2 from "@/components/Sidebar2.vue";
import historicalCo from "@/components/historicalCo.vue";
</script>

<template>
  <Sidebar2 />
  <section class="section-content">
    <div class="mycontent">
      <div class="container">
        <div class="historical">
          <div class="container">
            <h1 class="title">الخلفية التاريخية</h1>
            <div
                      
                      >
                        <div
                         

                        >
  <swiper :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" 
  :spaceBetween="10" 
  :thumbs="{ swiper: thumbsSwiper }" 
  class="mySwiper2">

  <swiper-slide>
    <historicalCo></historicalCo>

  </swiper-slide>
  <swiper-slide> 
    <historicalCo></historicalCo>

  </swiper-slide>
  <swiper-slide>
    <historicalCo></historicalCo>

  </swiper-slide>
  <swiper-slide>
    <historicalCo></historicalCo>

  </swiper-slide>
  <swiper-slide>
    <historicalCo></historicalCo>

  </swiper-slide>
  <swiper-slide>
    <historicalCo></historicalCo>

  </swiper-slide>
  
  <swiper-slide>
    <historicalCo></historicalCo>

  </swiper-slide>
  
  
  </swiper></div></div>
            <div class="row">
              <div class="col-10 mt-xl-0 mt-5">
                <div
                  class="swiper-container"
                >

                  <div
                    class="swiper-wrapper history-slider2 horizontal"
                    id="swiper-wrapper-0c10de21037e101061f1"
                    aria-live="polite"
                  >

                  <Swiper
    :thumbs="thumbsSwiper"
     @swiper="setThumbsSwiper" 
  :spaceBetween="30"
      @slideChange="onSlideChange"
  
  :watchSlidesVisibility="true"
    :watchSlidesProgress="true" 
    class="mySwiper"

  :breakpoints="{

'1065':{
  slidesPerView: 5,
  spaceBetween: 30,
},
'640': {
  
  slidesPerView: 2,
  spaceBetween: 20,


},
'768': {
  slidesPerView: 2,
  spaceBetween: 20,


},

}"
   >
  <swiper-slide>
    <div class="animate__animated animate__fadeInUpBig">
      <p href=""
                              >نشأة البلدية</p
                              >
                            </div>
  </swiper-slide>
  <swiper-slide>
    <div class="animate__animated animate__fadeInUpBig">
                              <p  class="choose-date"
                                >1917 - 1906</p
                              >
                            </div>
  </swiper-slide>
  <swiper-slide>
    <div class="animate__animated animate__fadeInUpBig ">
                              <p  class="choose-date"
                                >1917 - 1906</p
                              >
                            </div>
  </swiper-slide>
  <swiper-slide>
    <div class="animate__animated animate__fadeInUpBig">
                              <p class="choose-date"
                                >1917 - 1906</p
                              >
                            </div>
  </swiper-slide>
  <swiper-slide>
    <div class="animate__animated animate__fadeInUpBig">
                              <p class="choose-date"
                                >1917 - 1906</p
                              >
                            </div>
  </swiper-slide>
  <swiper-slide> <div class="animate__animated animate__fadeInUpBig">
                              <p  class="choose-date"
                                >1917 - 1906</p
                              >
                            </div></swiper-slide>

                            <swiper-slide> <div class="animate__animated animate__fadeInUpBig">
                              <p  class="choose-date"
                                >1917 - 1906</p
                              >
                            </div></swiper-slide>
  

  </swiper>

  
                  </div>

               
                </div>
              </div>
              <div class="swiper-pagination"></div>
              <span
                class="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);


export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const fancyboxConfig = {
      infobar: false,
      buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
      ]
    };
    const swiperOptions ={
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
        // when window width is <= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    };
       // Apply Fancybox configuration in the mounted lifecycle hook
       const mounted = () => {
      $(".js-fancybox").fancybox(fancyboxConfig);
    };

    
    return {
      onSwiper,
      onSlideChange,
      mounted,
      swiperOptions,

      modules: [Navigation, Pagination, Scrollbar, A11y],
    };

 

  },

  data() {
    return {
      thumbsSwiper: null,
      thumbsSwiper2: null,
    };
  },
  
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    setThumbsSwiper2(swiper) {
      this.thumbsSwiper2 = swiper;
    },
  },

  }
  

</script>
<style scoped>




.swiper-slide {
      text-align: center;
      font-size: 18px;
    }
.swiper-container {
      position: relative;
      /* width: 1300px; */
      height: 94px;
      margin: 0 auto;
    }
.swiper-container:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #D6D6D6;
    }

.mySwiper .swiper-slide {
    /* width: 25%; */
    height: 127px;
    opacity: 0.4;
}

.vl {
  border-bottom: 3px solid #D6D6D6;
  position: absolute;
  /* height: 400px;
  margin-right: 32px; */



}
hr.new1 {
  border-top: 1px solid red;
}


.mySwiper2 {
  
  width: 100%;

}




.mySwiper .swiper-slide {
  /* width: 25%; */
  height: 137px;
  opacity: 0.4;
}

.mySwiper  .swiper-slide-thumb-active {
  opacity: 1;
  margin-top: -35px;
  width: 190px;
}
a.swiper-slide-thumb-active{
  color: #3ec4b5;
}


.mySwiper .swiper-slide-thumb-active ::after {
  content: "";
  position: absolute;
  top: 90%;
  right: 63px;
  transform: rotate(90deg);
  width: 100px;
  height: 3px;
  background-color: #3ec4b5;
}
.mySwiper .swiper-slide-thumb-active ::before {
  content: "";
  position: absolute;
  width: 22px;
  height: 22px;
  border: 8px solid #cf2a45;
  border-radius: 50%;
  background-color: white;
  z-index: 1;
  outline: white;
  outline-style: solid;
  outline-color: white;
  outline-width: 2px;
  right: 101px;
  top:116px;
  transition: 0.2s ease-in;
}


</style>