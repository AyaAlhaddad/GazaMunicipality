 <script setup>
import Sidebar2 from "@/components/Sidebar2.vue";
import chart from "@/components/chart.vue";
import plancard from "@/components/budgetCo.vue";

</script>
<template>
  <Sidebar2 />
  <section class="section-content">
    <div class="mycontent">
      <div class="container">
        <div class="row" style="margin-top: 90px">
          <div class="container">
            <div class="main-title">
              <h1 class="title">الميزانية والموازنة</h1>
            </div>
            <div class="cs-tabs">
              <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-1"
                    aria-selected="true"
                  >
                    الموازنة المقروءة
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-2"
                    type="button"
                    role="tab"
                    aria-controls="pills-2"
                    aria-selected="false"
                  >
                    الموازنة والميزانية
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade"
                  id="pills-1"
                  role="tabpanel"
                  aria-labelledby="pills-1-tab"
                >
                  <div class="row">
                    <div class="col-lg-3 order-xl-0 order-1 mt-xl-0 mt-5">

                      <div
                        class="swiper history-swiper history-swiper-1 swiper-initialized swiper-vertical swiper-pointer-events swiper-rtl"
                        dir="rtl"
                      >
                      <div class="vl"></div>

                        <div  class="swiper-wrapper history-slider "
                       
                          style="transition-duration: 0ms">
                       


    <Swiper
    :thumbs="thumbsSwiper"
     @swiper="setThumbsSwiper" 
     :direction="'vertical'" 
  :spaceBetween="30"
  slidesPerView="5"
      @slideChange="onSlideChange"
  
  :watchSlidesVisibility="true"
    :watchSlidesProgress="true" 
    class="mySwiper" style="height: 400px; margin-right: -19px;
">
  <swiper-slide>
    <div class="animate__animated animate__fadeInUpBig">
                              <p class="choose-date"
                                >1917 - 1906</p
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
    <div class="animate__animated animate__fadeInUpBig">
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
                              <p  class="choose-date"
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
  <swiper-slide> <div class="animate__animated animate__fadeInUpBig">
                              <p  class="choose-date"
                                >1917 - 1906</p
                              >
                            </div>
    </swiper-slide>
  <swiper-slide> <div class="animate__animated animate__fadeInUpBig">
                              <a href="" class="choose-date"
                                >1917 - 1906</a
                              >
                            </div>
  </swiper-slide>
  <swiper-slide> <div class="animate__animated animate__fadeInUpBig">
                              <a href="" class="choose-date"
                                >1917 - 1906</a
                              >
                            </div>
    </swiper-slide>
  </swiper>
  </div>
  </div>

</div>
   <div class="col-lg-9 mb-lg-0 mb-5" style="display: flex;
    justify-content: space-between;">
  <swiper :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" 
  :spaceBetween="10" 
  :thumbs="{ swiper: thumbsSwiper }" class="mySwiper2">

  <swiper-slide>
    <chart id="test1"></chart>
    <chart id="test2"></chart>
  </swiper-slide>
  <swiper-slide> 
    <chart id="test3"></chart>
                            <chart id="test4"></chart>
  </swiper-slide>
  <swiper-slide>
    <chart id="test5"></chart>
                            <chart id="test6"></chart>
  </swiper-slide>
  <swiper-slide>
    <chart id="test7"></chart>
                            <chart id="test8"></chart>
  </swiper-slide>
  <swiper-slide>
    <chart id="test9"></chart>
                            <chart id="test10"></chart>
  </swiper-slide>
  <swiper-slide>
    <chart id="test11"></chart>
                            <chart id="test12"></chart>
  </swiper-slide>
  <swiper-slide>
    <chart id="test13"></chart>
                            <chart id="test14"></chart>
  </swiper-slide>
  <swiper-slide>
    <chart id="test15"></chart>
                            <chart id="test16"></chart>
  </swiper-slide>
  <swiper-slide>
    <chart id="test17"></chart>
                            <chart id="test18"></chart>
  </swiper-slide>
  <swiper-slide>
    <chart id="test19"></chart>
                            <chart id="test20"></chart>
  </swiper-slide>
  </swiper>
  </div>
  </div>
</div>


  <div
                  class="tab-pane fade show active"
                  id="pills-2"
                  role="tabpanel"
                  aria-labelledby="pills-2-tab"
                >
                <div class="row">
                    <div
                      class="col-xxl-2 col-xl-3 order-xl-0 order-1 mt-xl-0 mt-5"
                    >
                      <div
                        class="swiper history-swiper history-swiper-2 swiper-initialized swiper-vertical swiper-pointer-events swiper-rtl swiper-backface-hidden"
                        dir="rtl"
                      >
                      <div class="vl"></div>

                        <div
                          class="swiper-wrapper history-slider lg:horizontal"
                          id="swiper-wrapper-354ca5121105eaa7f"
                          aria-live="polite"
                          style="
                            transition-duration: 0ms;
                            transform: translate3d(0px, -225px, 0px);

                          "
                        >

               
    <!-- <Swiper 
    :thumbs="thumbsSwiper2"
    @swiper="setThumbsSwiper2" 
  direction="vertical" 
  :spaceBetween="30"
  slidesPerView="5"
  :watchSlidesVisibility="true"
    :watchSlidesProgress="true" 
    class="mySwiper"
    style="margin-top: 230px; height: 400px; margin-right: -20px"
    
   >
  <swiper-slide     v-for="slider in sliders"
          :key="slider.id"
          class="swiper-slide"
         @click="goToSlide(slider.id)">
    <div class="animate__animated animate__fadeInUpBig">
                              <p class="choose-date"
                                >{{ slider.content }}</p
                              >
                            </div>
  </swiper-slide> -->
  <Swiper
    :thumbs="thumbsSwiper2"
    @swiper="setThumbsSwiper2"
    direction="vertical"
    :spaceBetween="30"
    slidesPerView="5"
    :watchSlidesVisibility="true"
    :watchSlidesProgress="true"
    class="mySwiper"
    style="margin-top: 230px; height: 400px; margin-right: -20px"
  >
    <swiper-slide v-for="slider in sliders" :key="slider.id" class="swiper-slide" @click="goToSlide(slider.id)">
      <div class="animate__animated animate__fadeInUpBig">
        <p class="choose-date">{{ slider.content }}</p>
      </div>
    </swiper-slide>
  </Swiper>
  <!-- <swiper-slide  :key="1">
    <div class="animate__animated animate__fadeInUpBig">
                              <p class="choose-date"
                                >1918 - 1906</p
                              >
                            </div>
  </swiper-slide>
  <swiper-slide  :key="2">
    <div class="animate__animated animate__fadeInUpBig">
                              <p  class="choose-date"
                                >1919 - 1906</p
                              >
                            </div>
  </swiper-slide>
  <swiper-slide   :key="3">
    <div class="animate__animated animate__fadeInUpBig">
                              <p class="choose-date"
                                >1920 - 1906</p
                              >
                            </div>
  </swiper-slide>
  <swiper-slide  :key="4">
    <div class="animate__animated animate__fadeInUpBig">
                              <p class="choose-date"
                                >1921 - 1906</p
                              >
                            </div>
  </swiper-slide>
  <swiper-slide   :key="5"> <div class="animate__animated animate__fadeInUpBig">
                              <p  class="choose-date"
                                >1922 - 1906</p
                              >
                            </div></swiper-slide>
  <swiper-slide  :key="6"> <div class="animate__animated animate__fadeInUpBig">
                              <p  class="choose-date"
                                >1923 - 1906</p
                              >
                            </div></swiper-slide>
  <swiper-slide  :key="7"> <div class="animate__animated animate__fadeInUpBig">
                              <p class="choose-date"
                                >1924 - 1906</p
                              >
                            </div>
    </swiper-slide>
  <swiper-slide  :key="8"> <div class="animate__animated animate__fadeInUpBig">
                              <p class="choose-date"
                                >1925 - 1906</p
                              >
                            </div>
  </swiper-slide>
  <swiper-slide  :key="9"> <div class="animate__animated animate__fadeInUpBig">
                              <p  class="choose-date"
                                >1917 - 1906</p
                              >
                            </div>
    </swiper-slide> -->
</div>
</div></div>
                    
<div class="col-xxl-10 col-xl-9 mb-lg-0 mb-5">

    <Swiper  :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" 
  :spaceBetween="10" 
  :thumbs="{ swiper: thumbsSwiper2 }" class="mySwiper2">

  <swiper-slide>
<plancard>

</plancard>
  </swiper-slide>
  <swiper-slide> 
    <plancard>

</plancard>
  </swiper-slide>
  <swiper-slide>
    <plancard>

</plancard>
  </swiper-slide>
  <swiper-slide>
    <plancard>

</plancard>
  </swiper-slide>
  <swiper-slide>
    <plancard>

</plancard>
  </swiper-slide>
  <swiper-slide>
    <plancard>

</plancard>
  </swiper-slide>
  <swiper-slide>
    <plancard>

</plancard>
  </swiper-slide>
  <swiper-slide>
    <plancard>

</plancard>
  </swiper-slide>
  <swiper-slide>
    <plancard>

</plancard>
  </swiper-slide>
  <swiper-slide>
    <plancard>

</plancard>
  </swiper-slide>
  </swiper></div>
                    </div></div></div>
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
import { ref } from 'vue';


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
    const swiperRef = ref(null);

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
      swiperRef,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };

 

  },

  data() {
    return {
      thumbsSwiper: null,
      thumbsSwiper2: null,
      activeSlider: null,
      sliders: [
        { id: 0, content: '1997-1998' },
        { id: 1, content: '1997-2000' },
        { id: 2, content: '1997-2002' },
        { id: 3, content: '1997-2003' } ,
        { id: 4, content: '1997-2004' },
        { id: 6, content: '1996' }
      ]
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    setThumbsSwiper2(swiper) {
      this.thumbsSwiper2 = swiper;
    },

       goToSlide(sliderId) {
      const sliderIndex = this.sliders.findIndex((slider) => slider.id === sliderId);
      if(sliderIndex%4 == 0){
        this.thumbsSwiper2.slideTo(sliderIndex);

      }
      // if (this.swiperRef) {
      // }
      // console.log("is active",sliderIndex)
    },

    handleSlideChange() {
      const activeIndex = this.swiperRef.activeIndex;
      this.activeSlider = this.sliders[activeIndex].id;
      console.log("is active2")

    },
    handleSwipe(direction) {
      if (direction === 'left') {
        this.swiperRef.slideNext();
        console.log("left")

      } else if (direction === 'right') {
        this.swiperRef.slidePrev();
        console.log("right")

      } else if (direction === 'up') {
        const currentIndex = this.sliders.findIndex((slider) => slider.id === this.activeSlider);
        const nextIndex = currentIndex + 1;
        if (nextIndex < this.sliders.length) {
          this.swiperRef.slideTo(nextIndex);
          console.log("up")

        }
        console.log("up")

      } else if (direction === 'down') {
        const currentIndex = this.sliders.findIndex((slider) => slider.id === this.activeSlider);
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          this.swiperRef.slideTo(prevIndex);

        }
        console.log("up1")

      }
    },
  },
  // watch: {
  //   activeSlider(newSliderId) {
  //     console.log('Active slider:', newSliderId);
  //   }
  // }
  watch: {
    activeSliderWatcher(newSliderId) {
      console.log('Active slider:', newSliderId);
    },
  },
  
  }
  

</script>




<style>




.swiper-slide {
  /* text-align: center; */
  font-size: 18px;
  /* background: #fff; */

  
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





.vl {
  border-left: 3px solid #D6D6D6;
  position: absolute;
  height: 400px;
  margin-right: 32px;
}


.mySwiper2 {
  
  width: 100%;

}




.mySwiper .swiper-slide {
  /* width: 25%; */
  height: 100%;
  opacity: 0.4;
}

.mySwiper  .swiper-slide-thumb-active {
  opacity: 1;
  color: #3ec4b5;
  margin-right: 50px;
  width: 190px;
}

p.choose-date :active{
    margin-right: 40px;
}
.mySwiper .swiper-slide-thumb-active ::after {
  content: "";
  position: absolute;
  top: 30%;
  right: -51px;
  transform: translate(0%, -50%);
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
  right: -9px;
  transition: 0.2s ease-in;
}



</style>


 <!-- <template>
  <div>
    <section class="section-content">
    <div class="mycontent">
      <div class="container">
        <div class="row" style="margin-top: 90px">
          <div class="container">
    <div class="swiper-container" ref="swiperContainer" style="height: 400px;">
      <div class="swiper-wrapper" style="height: 400px;">
        <div
          v-for="slider in sliders"
          :key="slider.id"
          class="swiper-slide"
          @click="goToSlide(slider.id)"
        >
          <div>{{ slider.content }}</div>
        </div>
      </div>
      <div class="swiper-pagination" ref="swiperPagination"></div>
      <div class="swiper-button-next" ref="swiperNext"></div>
      <div class="swiper-button-prev" ref="swiperPrev"></div>
    </div></div></div></div></div>
  </section>
</div>
</template> -->

<!-- <script>
import Swiper from 'swiper';

export default {
  data() {
    return {
      activeSlider: null,
      sliders: [
        { id: 1, content: '1997' },
        { id: 2, content: '1997' },
        { id: 3, content: '1997' },
        { id: 3, content: '1997' } ,
        { id: 3, content: '1997' },
        { id: 3, content: '' }
      ]
    };
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiperContainer, {
      direction: 'vertical', // Add the direction property here
      pagination: {
        el: this.$refs.swiperPagination,
        clickable: true
      },
      
      navigation: {
        nextEl: this.$refs.swiperNext,
        prevEl: this.$refs.swiperPrev
      }
    });
  },
  methods: {
    goToSlide(sliderId) {
      const sliderIndex = this.sliders.findIndex(slider => slider.id === sliderId);
      this.swiper.slideTo(sliderIndex);
    },
    handleSlideChange() {
      const activeIndex = this.swiper.activeIndex;
      this.activeSlider = this.sliders[activeIndex].id;
    },
    handleSwipe(direction) {
      if (direction === 'left') {
        this.swiper.slideNext();
      } else if (direction === 'right') {
        this.swiper.slidePrev();
      } else if (direction === 'up') {
        const currentIndex = this.sliders.findIndex(slider => slider.id === this.activeSlider);
        const nextIndex = currentIndex + 1;
        if (nextIndex < this.sliders.length) {
          this.swiper.slideTo(nextIndex);
        }
      } else if (direction === 'down') {
        const currentIndex = this.sliders.findIndex(slider => slider.id === this.activeSlider);
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          this.swiper.slideTo(prevIndex);
        }
      }
    }
  },
  watch: {
    activeSlider(newSliderId) {
      console.log('Active slider:', newSliderId);
    }
  }
};
</script> -->



