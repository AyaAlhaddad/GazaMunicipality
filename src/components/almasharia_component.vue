<template >
          <div class="album-pic-card">

                      <div class="projectcard">
                        <figure class="overlayimg">
                            <img src="img/project-img-1.png" alt="" srcset="">
                        </figure>
                        <div class="details">
                            <div class="d-flex align-items-center gap-2">
                                <div class="category">
                                    طرق
                                </div>
                                <div class="price">
                                    65,000 €
                                </div>
                            </div>
                            <h3>مشروع صيانة طرق بمركز مدينة غزة</h3>
                            <h4>الممول: صندوق تطوير وإقراض البلديات</h4>
                            <h6 class="d-flex gap-2 align-items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.83" height="23.213" viewBox="0 0 16.83 23.213">
                                        <path id="icons8_marker" d="M11.415,1A8.431,8.431,0,0,0,3,9.415a10.142,10.142,0,0,0,1.269,4.234,39.189,39.189,0,0,0,2.663,4.53c1.92,2.886,3.833,5.233,3.833,5.233l.651.8.651-.8s1.913-2.347,3.839-5.233a40.1,40.1,0,0,0,2.656-4.53A10.142,10.142,0,0,0,19.83,9.415,8.431,8.431,0,0,0,11.415,1Zm0,1.683a6.72,6.72,0,0,1,6.732,6.732,9.392,9.392,0,0,1-1.1,3.5A40.247,40.247,0,0,1,14.5,17.251c-1.545,2.314-2.6,3.589-3.09,4.207-.493-.618-1.545-1.893-3.09-4.207a40.227,40.227,0,0,1-2.544-4.339,9.391,9.391,0,0,1-1.1-3.5A6.72,6.72,0,0,1,11.415,2.683Zm0,5.049A1.683,1.683,0,1,0,13.1,9.415,1.686,1.686,0,0,0,11.415,7.732Z" transform="translate(-3 -1)" fill="#fff"></path>
                                    </svg>
                                </span>
                                <span> فلسطين - غزة - الشجاعية</span>
                            </h6>
                        </div>
                    </div>
                    </div>
</template>
<script>
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
  name: 'almashariee',
  components: {
        Swiper,
        SwiperSlide,
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
 