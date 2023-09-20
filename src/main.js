import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/style2.css'
import './assets/responsiv.css'
import'./assets/nav.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';


const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(VCalendar, {})


function initMap() {
    const ulurus = [];
    $('.list-clickable').each(function (index, element) {
        ulurus.push({ lat: $(element).data('lat'), lng: $(element).data('lng') });
    });
    var map = new google.maps.Map(document.getElementById("map"), {
        fullscreenControl: false,
        zoom: 14,
        center: { lat: 31.5016946, lng: 34.4668445 },
    });
    ulurus.forEach(uluru => {
        new google.maps.Marker({
            position: uluru,
            map: map,
        }).addListener("click", function () {
            let that = this;
            $('.list-clickable').each(function (index, element) {
                if ($(element).data('lat') == that.position.lat() && $(element).data('lng') == that.position.lng()) {
                    $('.map-content .map-content-body').html('');
                    $('.map-content .map-content-body').html($(element).find('.location-data').html());
                    $('.map-content').show();
                }
            });
        });
    });
    $('.map-content').hide();
    $('.list-clickable').removeClass('active');
    $(document).on('click', '.list-clickable', function (e) {
        if (innerWidth < 769) {
            $('.content').scrollTop($('.content').height())
        }
        e.preventDefault();
        // $('.map-content').show();
        $('.list-clickable').removeClass('active');
        $(this).addClass('active');
        lat = $(this).data('lat');
        lng = $(this).data('lng');
        if (lat != null && lng != null && lat != map.getCenter().lat() && lng != map.getCenter().lng) {
            map.setCenter({
                lat: lat,
                lng: lng
            });
            map.setZoom(14, true);
            setTimeout(() => {
                map.setZoom(18, true);
            }, 500);
        }

    });
    $(document).on('click', '#rashad-alshawwa', function (e) {
        if (innerWidth < 769) {
            $('.content').scrollTop($('.content').height())
        }
        e.preventDefault();
        $('.map-content').show();
        $('.list-clickable').removeClass('active');
        $(this).addClass('active');
        lat = $(this).data('lat');
        lng = $(this).data('lng');
        if (lat != null && lng != null && lat != map.getCenter().lat() && lng != map.getCenter().lng) {
            map.setCenter({
                lat: lat,
                lng: lng
            });
            map.setZoom(14, true);
            setTimeout(() => {
                map.setZoom(18, true);
            }, 500);
        }

    });
    const svgMarker = {
        path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "#cf2a45",
        fillOpacity: 0.8,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(15, 30),
    };

    new google.maps.Marker({
        position: map.getCenter(),
        icon: svgMarker,
        map: map,
    });

}

window.initMap = initMap;
// $('.map-content .map-content-body').html($('.location-data').html());
$(document).on('click', '.close-map-content', function () {
    $(this).closest('.map-content').hide();
    $('.list-clickable').removeClass('active');
});



import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
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
    console.log('slide change');
  };
  return {
    onSwiper,
    onSlideChange,
    modules: [Navigation, Pagination, Scrollbar, A11y],
  };
},
};


