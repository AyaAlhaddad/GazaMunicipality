
<template>
  <Sidebar4 />
  <section class="section-content">
    <div class="container">
      <div class="mycontent reports">
        <div class="container">
          <div
            class="d-flex justify-content-between align-items-center flex-wrap gap-3"
          >
            <div class="main-title">
              <div>
                <h1 class="title mb-2">تقارير وإصدارات</h1>
                <p>
                  ننشر في بلدية غزة صحيفة هنا غزة والإصدارات والتقارير المالية
                  والتفصيلية التي تفصّل أنشطتنا ومشاريعنا
                </p>
              </div>
            </div>

            <div
              class="swiper reports-slider"
            >
              <swiper
                :modules="modules"
                :slides-per-view="2"
                :space-between="10"
                navigation
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                style="overflow:initial;
                "
                :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }"

              >
                <swiper-slide style="width: 554px;">
             
                    <div class="report-card" style="background-color: #024c78;">
                      <figure>
                        <img src="img/report-1.png" class="mb-2" alt="" />
                        <img
                          src="img/report-logo.svg"
                          class="mb-2"
                        />
                      </figure>
                      <div class="text-center mt-4">
                        <h4>صحيفة هنا غزة العدد 37</h4>
                        <a href="#">
                          تنزيل
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="12"
                            viewBox="0 0 9 12"
                          >
                            <path
                              id="icons8_download"
                              d="M7,2V9.293L4.352,6.648l-.7.7L7.5,11.207l3.856-3.855-.711-.7L8,9.293V2ZM3,13v1h9V13Z"
                              transform="translate(-3 -2)"
                              fill="#fff"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
               
                </swiper-slide>
                <swiper-slide>
                
                    <div class="report-card" style="background-color: #32302c">
                      <figure>
                        <img src="img/report-2.png" class="mb-2" alt="" />
                        <img
                          src="img/report-logo.svg"
                          class="mb-2"
                        />
                      </figure>
                      <div class="text-center mt-4">
                        <h4>
                          أضرار العدوان الإسرائيلي على البنية التحتية في مدينة
                          غزة
                        </h4>
                        <a href="#">
                          تنزيل
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="12"
                            viewBox="0 0 9 12"
                          >
                            <path
                              id="icons8_download"
                              d="M7,2V9.293L4.352,6.648l-.7.7L7.5,11.207l3.856-3.855-.711-.7L8,9.293V2ZM3,13v1h9V13Z"
                              transform="translate(-3 -2)"
                              fill="#fff"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                 
                </swiper-slide>
                <swiper-slide>
                
                    <div class="report-card" style="background-color: #0e2735">
                      <figure style="">
                        <img src="img/report-3.png" class="mb-2" alt="" />
                        <img
                          src="img/report-logo.svg"
                          class="mb-2"
                        />
                      </figure>
                    </div>
                
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar4 from "@/components/sidebar4.vue";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,Sidebar4,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
