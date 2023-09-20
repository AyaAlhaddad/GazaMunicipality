
<template>
  <Sidebar4 />

  <section class="section-content">
    <div class="mycontent">
      <div class="albums-page">
        <div class="container">
          <div class="main-title">
            <h1 class="title">الألبومات</h1>
            <select
              class="form-select cs-select"
              aria-label="Default select example"
            >
              <option selected="">فرز</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select
              class="form-select cs-select"
              aria-label="Default select example"
            >
              <option selected="">السنة</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="cs-tabs">
            <div class="d-flex justify-content-between">
              <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active d-flex gap-2"
                    id="pills-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-1"
                    aria-selected="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.89"
                      height="16.191"
                      viewBox="0 0 18.89 16.191"
                    >
                      <path
                        id="icons8_image"
                        d="M3.024,2A2.031,2.031,0,0,0,1,4.024V16.167a2.031,2.031,0,0,0,2.024,2.024H17.866a2.031,2.031,0,0,0,2.024-2.024V4.024A2.031,2.031,0,0,0,17.866,2Zm0,1.349H17.866a.666.666,0,0,1,.675.675v9.8L13.813,8.836,11.177,11.8,7.114,7.518,2.349,12.884V4.024A.666.666,0,0,1,3.024,3.349ZM14.493,4.7a1.349,1.349,0,1,0,1.349,1.349A1.352,1.352,0,0,0,14.493,4.7ZM7.145,9.511,14.1,16.842H3.024a.666.666,0,0,1-.675-.675V14.918Zm6.694,1.323,4.7,4.954v.379a.666.666,0,0,1-.675.675H15.953L12.11,12.784Z"
                        transform="translate(-1 -2)"
                        fill="#392c23"
                      ></path>
                    </svg>
                    الصور
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link d-flex gap-2"
                    id="pills-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-2"
                    type="button"
                    role="tab"
                    aria-controls="pills-2"
                    aria-selected="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.882"
                      height="16.191"
                      viewBox="0 0 22.882 16.191"
                    >
                      <path
                        id="icons8_video_call"
                        d="M21.882,3.505l-5.5,3.118V3.129a2.072,2.072,0,0,0-2.064-2.064H1.064A2.072,2.072,0,0,0-1,3.129V15.192a2.072,2.072,0,0,0,2.064,2.064H14.313a2.072,2.072,0,0,0,2.064-2.064V11.7l5.5,3.118ZM1.064,2.441H14.313A.679.679,0,0,1,15,3.129V15.192a.679.679,0,0,1-.688.688H1.064a.679.679,0,0,1-.688-.688V3.129A.679.679,0,0,1,1.064,2.441Zm19.442,3.43v6.58l-4.128-2.338v-1.9Z"
                        transform="translate(1 -1.065)"
                        fill="#392c23"
                      ></path>
                    </svg>
                    الفيديو
                  </button>
                </li>
              </ul>
            
            </div>

            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-1"
                role="tabpanel"
                aria-labelledby="pills-1-tab"
              >
                <div
                  class="main-swiper"
                >
                  <!-- <swiper
                    :modules="modules"
                    :slides-per-view="3"
                    :space-between="10"
                    navigation
                    :pagination="{ clickable: true }"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                  > -->
                  <swiper
                
                  :space-between="10"
                    :modules="modules"
                    navigation
                    @swiper="onSwiper"
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
                    <swiper-slide ><alboumImg /></swiper-slide>
                    <swiper-slide ><alboumImg /></swiper-slide>
                    <swiper-slide ><alboumImg /></swiper-slide>
                    <swiper-slide ><alboumImg /></swiper-slide>
                  </swiper>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="pills-2"
                role="tabpanel"
                aria-labelledby="pills-2-tab"
              >
              <div class="main-swiper">
                <swiper
                  :modules="modules"
                 
                  navigation 
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
                  id="mySlider"
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
                  <swiper-slide><Videocom/></swiper-slide>
                  <swiper-slide><Videocom/></swiper-slide>
                  <swiper-slide><Videocom/></swiper-slide>
                  <swiper-slide><Videocom/></swiper-slide>
                </swiper>






</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import Sidebar4 from "@/components/sidebar4.vue";
import alboumImg from "@/components/alboum_img.vue";
import  Videocom from "@/components/Video_com.vue";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import { ref } from 'vue';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Sidebar4,
    alboumImg,
    Videocom,
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
};




</script>
