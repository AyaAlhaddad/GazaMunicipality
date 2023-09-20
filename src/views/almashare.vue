
<template>
  <Sidebar5/>
    <section class="section-content">
<section >
    <div class="container">
        <div class="row">
            <div class="col-12">
<div class="mycontent almashare">
    <div class="container">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div class="main-title">
                <h1 class="title">المشاريع القائمة</h1>
                <select class="form-select cs-select" aria-label="">
                    <option >فرز</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select cs-select" aria-label="">
                    <option>التقويم</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <!-- <div class="position-relative cs-slider-btn rtl mb-4">
                            <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-0c3588137eb42ba0" aria-disabled="false"></div>
                            <div class="swiper-button-prev swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-0c3588137eb42ba0" aria-disabled="true"></div>
                        </div> -->
        </div>
        <div
                  class="main-swiper"
                >
        <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="10"
      navigation
      @slideChange="onSlideChange"
      :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }"

    >
    <swiper-slide><almashariee/>  </swiper-slide>

    <swiper-slide><almashariee/></swiper-slide>
    <swiper-slide><almashariee/></swiper-slide>
    <swiper-slide><almashariee/></swiper-slide>        
    <swiper-slide> <almashariee/></swiper-slide>       

       </swiper>
       </div>
             </div>

    </div>
    </div>
</div>
</div>

</section>
</section>

    
</template>
<script>
import Sidebar5 from '@/components/sidebar5.vue';
import almashariee from '@/components/almasharia_component.vue';
   // import Swiper core and required modules
 import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
export default {
  components: {
        Swiper,
        SwiperSlide,
        Sidebar5,almashariee,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, Scrollbar, A11y],
        };
      },
};


</script>