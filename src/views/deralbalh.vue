
<template>
  <section class="section-content">
    <section>
      <Sidebar6 />
      <div class="mycontent">
        <div class="electronic-museum-page">
          <div class="container">
            <div class="deir-alBalah-cemetert rp-0">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div
                    class="swiper deir-alBalah-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden"
                  >
                    <swiper
                      :modules="modules"
                      :slides-per-view="1"
                      :space-between="0"
                      navigation
                      :pagination="{ clickable: true }"
                      @slideChange="onSlideChange"
                    >
                      <swiper-slide>
                        <div
                          class="swiper-slide swiper-slide-prev"
                          role="group"
                          aria-label="1 / 4"
                          style="width: 716px; height: 100%"
                        >
                          <figure class="overlay-img-2">
                            <img
                              src="img/mask-group_1.png"
                              class="img-fluid"
                              alt=""
                              srcset=""
                            />
                          </figure>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div
                          class="swiper-slide swiper-slide-prev"
                          role="group"
                          aria-label="1 / 4"
                          style="width: 716px"
                        >
                          <figure class="overlay-img-2">
                            <img
                              src="img/mask-group_1.png"
                              class="img-fluid"
                              alt=""
                              srcset=""
                            />
                          </figure>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div
                          class="swiper-slide swiper-slide-prev"
                          role="group"
                          aria-label="1 / 4"
                          style="width: 716px"
                        >
                          <figure class="overlay-img-2">
                            <img
                              src="img/mask-group_1.png"
                              class="img-fluid"
                              alt=""
                              srcset=""
                            />
                          </figure>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div
                          class="swiper-slide swiper-slide-prev"
                          role="group"
                          aria-label="1 / 4"
                          style="width: 716px"
                        >
                          <figure class="overlay-img-2">
                            <img
                              src="img/mask-group_1.png"
                              class="img-fluid"
                              alt=""
                              srcset=""
                            />
                          </figure>
                        </div>
                      </swiper-slide>
                    </swiper>
                    <!-- <div class="swiper-wrapper" id="swiper-wrapper-a029a7bfe1f7f10fe" aria-live="polite" style="transform: translate3d(716px, 0px, 0px); transition-duration: 0ms;">
                                    <div class="swiper-slide swiper-slide-prev" role="group" aria-label="1 / 4" style="width: 716px;">
                                        <figure class="overlay-img-2">
                                            <img src="img/mask-group_1.png" class="img-fluid" alt="" srcset="">
                                        </figure>
                                    </div>
                                    <div class="swiper-slide swiper-slide-active" role="group" aria-label="2 / 4" style="width: 716px;">
                                        <figure class="overlay-img-2">
                                            <img src="img/mask-group_1.png" class="img-fluid" alt="" srcset="">
                                        </figure>
                                    </div>
                                    <div class="swiper-slide swiper-slide-next" role="group" aria-label="3 / 4" style="width: 716px;">
                                        <figure class="overlay-img-2">
                                            <img src="img/mask-group_1.png" class="img-fluid" alt="" srcset="">
                                        </figure>
                                    </div>
                                    <div class="swiper-slide" role="group" aria-label="4 / 4" style="width: 716px;">
                                        <figure class="overlay-img-2">
                                            <img src="img/mask-group_1.png" class="img-fluid" alt="" srcset="">
                                        </figure>
                                    </div>
                                </div>
                                <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-a029a7bfe1f7f10fe" aria-disabled="false"></div>
                                <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-a029a7bfe1f7f10fe" aria-disabled="false"></div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span> -->
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="details">
                    <RouterLink to="athar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.505"
                        height="23.952"
                        viewBox="0 0 23.505 23.952"
                      >
                        <path
                          id="Path_1076"
                          data-name="Path 1076"
                          d="M11642.752-1260.689l-10.423,10.641-1.328-1.284,10.458-10.677-.01-.01.01-.01L11631-1272.7l1.328-1.3,10.423,10.649,10.423-10.649,1.331,1.3-10.461,10.668.011.01-.011.01,10.461,10.677-1.331,1.284Z"
                          transform="translate(-11631.001 1274)"
                          fill="#392c23"
                        ></path>
                      </svg>
                    </RouterLink>
                    <div class="y-title">
                      <h2>مقبرة دير البلح</h2>
                      <h4>فلسطين - غزة - دير البلح</h4>
                      <hr style="color: #212529" />
                    </div>
                    <p>
                      تشتهر مدينة دير البلح بمجموعة من التوابيت المصنوعة على شكل
                      إنسان، التي يعود تاريخها إلى العصر البرونزي المتأخر
                      والمنسوب إلى ما يسمى بملوك الفلسطينيين، يعود تاريخ المقبرة
                      إلى الفترة ما بين القرن الرابع عشر قبل الميلاد و 1200 قبل
                      الميلاد، هذه المجموعة المدهشة من التوابيت ذات أغطية الوجوه
                      .المتحركة تشكل أكبر مجموعة من التوابيت المصنوعة على شكل
                      إنسان والتي اكتشفت في فلسطين وجدت التوابيت في مجموعات من
                      ثلاثة أو أكثر، وتبلغ المسافة بين كل مجموعة وأخرى بين
                      3-4أمتار، اكتشفت هذه التوابيت في قبور محفورة من حجر
                      الكركار أو الطين الأحمر الموجهة نحو البحر، اكتشف مع هذه
                      التوابيت كميات كبيرة من الأواني المصنوعة من الالباستر،
                      ومنها من الفخار الكنعاني والمايسيني والقبرصي .والمصري
                      ويبدو أنها كانت تستخدم قرابين للدفن تم التنقيب في مقبرة
                      دير البلح بين عامي 1972 و 1982م لمصلحة دائرة الآثار في
                      الجامعة العبرية بالقدس وجمعية استكشاف إسرائيل. لايوجد في
                      الواقع اليوم شيء من هذه الآثار لأن كل المكتشفات معروضة
                      الآن في متحف الروكفلر ومتحف إسرائيل في القدس. في العام
                      1971م نظم الجنرال موشيه دايان حملة تنقيب غير شرعية عن
                      الآثار في المنطقة وقد ضم كل المكتشفات التي وجدها إلى
                      مقتنياته الشخصية التي احتفظ بها حتى وفاته، وبعد ذلك بيعت
                      جميع هذه المقتنيات التي تضم مجموعة كبيرة من آثار دير البلح
                      من قبل ورثته .لمتحف إسرائيل
                    </p>
                  </div>
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
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import Sidebar6 from "@/components/sidebar6.vue";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    Sidebar6
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
