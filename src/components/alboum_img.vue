
  <template>

          <div class="album-pic-card">
            
            <figure class="position-relative">

    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      @slideChange="onSlideChange"
    >
<swiper-slide class="col-xl-3 col-sm-12 col-md-4"> <a href="img/slide.png" data-fancybox="gallery" data-caption="Caption Images 1">
          <img src="img/slide.png" alt="Image Gallery">
        </a>
</swiper-slide>
      <swiper-slide class="col-xl-3 col-sm-12 col-md-4"><a href="img/slide.png" data-fancybox="gallery" data-caption="Caption Images 2">
          <img src="img/slide.png" alt="Image Gallery">
        </a></swiper-slide>
      <swiper-slide class="col-xl-3 col-sm-12 col-md-4"> <a href="img/slide.png" data-fancybox="gallery" data-caption="Caption Images 3">
          <img src="img/slide.png" alt="Image Gallery">
        </a>
</swiper-slide >
      <swiper-slide class="col-xl-3 col-sm-12 col-md-4"><a href="img/slide.png" data-fancybox="gallery" data-caption="Caption Images 4">
          <img src="img/slide.png" alt="Image Gallery">
        </a></swiper-slide>
    </swiper>

<div class="time">
                                                            13:27:03 <svg xmlns="http://www.w3.org/2000/svg" width="20.157" height="20.158" viewBox="0 0 20.157 20.158">
                                                                <path id="icons8_clock_1" d="M11.079,1A10.079,10.079,0,1,0,21.158,11.079,10.094,10.094,0,0,0,11.079,1Zm0,1.551a8.528,8.528,0,1,1-8.528,8.528A8.517,8.517,0,0,1,11.079,2.551ZM10.3,4.1v7.753h4.652V10.3h-3.1V4.1Z" transform="translate(-1 -1)" fill="#fff"></path>
                                                            </svg>

                                                        </div>
                                                </figure>
      <div class="album-pic-body">
                                                        <div class="d-flex justify-content-between">
                                                            <h4> بلدية غزة تفتتح بئر مياه في منطقة
                                                                الشعف شرق حي التفاح</h4>
                                                            <div class="text-center">
                                                                <p class="mb-2">13</p>
                                                                <p class="mb-0">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.028" height="20.596" viewBox="0 0 24.028 20.596">
                                                                        <path id="icons8_image" d="M3.574,2A2.584,2.584,0,0,0,1,4.574V20.021A2.584,2.584,0,0,0,3.574,22.6H22.454a2.584,2.584,0,0,0,2.574-2.574V4.574A2.584,2.584,0,0,0,22.454,2Zm0,1.716H22.454a.847.847,0,0,1,.858.858v12.47L17.3,10.7,13.946,14.47,8.777,9.019,2.716,15.844V4.574A.847.847,0,0,1,3.574,3.716ZM18.163,5.433a1.716,1.716,0,1,0,1.716,1.716A1.72,1.72,0,0,0,18.163,5.433ZM8.817,11.554l8.843,9.326H3.574a.847.847,0,0,1-.858-.858V18.432Zm8.514,1.683,5.98,6.3v.483a.847.847,0,0,1-.858.858H20.02l-4.887-5.162Z" transform="translate(-1 -2)" fill="#848484"></path>
                                                                    </svg>

                                                                </p>
                                                            </div>
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
  name: 'alboumImg',
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
 
  

