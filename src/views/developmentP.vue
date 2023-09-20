<!-- <script setup>
import almashariee from '@/components/almasharia_component.vue';

</script> -->
<template>
    <Sidebar5 />
    <section class="section-content">
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="mycontent developmentP">
                            <div class="container">
                                <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
                                    <div class="main-title">
                                        <h1 class="title">المشاريع التطويرية</h1>
                                        <select class="form-select cs-select" aria-label="">
                                            <option>فرز</option>
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

                                </div>
                                <swiper :modules="modules" 
                                :slides-per-view="4" 
                                :space-between="10" navigation
                                  @slideChange="onSlideChange"
                                  :breakpoints="{
      '456': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '908': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }"
>
                                    <swiper-slide>
                                        <div class="development-project-card">
                                            <figure>
                                                <img src="img/project-icon-1.svg" alt="" srcset="">
                                            </figure>
                                            <h2>تأهيل شبكة المياه في منطقة الصبرة
                                                ومناطق متفرقة في مدينة غزة</h2>
                                            <h6>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.83" height="23.213"
                                                        viewBox="0 0 16.83 23.213">
                                                        <path id="icons8_marker"
                                                            d="M11.415,1A8.431,8.431,0,0,0,3,9.415a10.142,10.142,0,0,0,1.269,4.234,39.189,39.189,0,0,0,2.663,4.53c1.92,2.886,3.833,5.233,3.833,5.233l.651.8.651-.8s1.913-2.347,3.839-5.233a40.1,40.1,0,0,0,2.656-4.53A10.142,10.142,0,0,0,19.83,9.415,8.431,8.431,0,0,0,11.415,1Zm0,1.683a6.72,6.72,0,0,1,6.732,6.732,9.392,9.392,0,0,1-1.1,3.5A40.247,40.247,0,0,1,14.5,17.251c-1.545,2.314-2.6,3.589-3.09,4.207-.493-.618-1.545-1.893-3.09-4.207a40.227,40.227,0,0,1-2.544-4.339,9.391,9.391,0,0,1-1.1-3.5A6.72,6.72,0,0,1,11.415,2.683Zm0,5.049A1.683,1.683,0,1,0,13.1,9.415,1.686,1.686,0,0,0,11.415,7.732Z"
                                                            transform="translate(-3 -1)" fill="#392c23"></path>
                                                    </svg>
                                                </span>
                                                فلسطين - غزة - الرمال
                                            </h6>
                                            <h5>مدة التنفيذ: عام</h5>
                                            <h4>التكلفة : 105,890.00 €</h4>
                                            <h3>نسبة الإنجاز</h3>
                                            <div class="progress cs-progress">
                                                <div class="progress-bar" role="progressbar" style="width: 25%"
                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <router-link to="/khadamat" class="show-more">
                                                عرض التفاصيل
                                                <span class="show-more-arrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8.996"
                                                        viewBox="0 0 14 8.996">
                                                        <path id="Path_382" data-name="Path 382"
                                                            d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                                                            transform="translate(-737 -1483.002)" fill="#3ec4b5"
                                                            fill-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </router-link>
                                        </div>

                                    </swiper-slide>

                                    <swiper-slide>
                                        <div style="width: 319.5px; margin-left: 16px;">
                                            <div class="development-project-card">
                                                <figure>
                                                    <img src="img/project-icon-2.svg" alt="" srcset="">
                                                </figure>
                                                <h2>توريد وتركيب حجر جبهة وبلاط انتر لوك في مناطق متفرقة من مدينة غزة</h2>
                                                <h6>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.83"
                                                            height="23.213" viewBox="0 0 16.83 23.213">
                                                            <path id="icons8_marker"
                                                                d="M11.415,1A8.431,8.431,0,0,0,3,9.415a10.142,10.142,0,0,0,1.269,4.234,39.189,39.189,0,0,0,2.663,4.53c1.92,2.886,3.833,5.233,3.833,5.233l.651.8.651-.8s1.913-2.347,3.839-5.233a40.1,40.1,0,0,0,2.656-4.53A10.142,10.142,0,0,0,19.83,9.415,8.431,8.431,0,0,0,11.415,1Zm0,1.683a6.72,6.72,0,0,1,6.732,6.732,9.392,9.392,0,0,1-1.1,3.5A40.247,40.247,0,0,1,14.5,17.251c-1.545,2.314-2.6,3.589-3.09,4.207-.493-.618-1.545-1.893-3.09-4.207a40.227,40.227,0,0,1-2.544-4.339,9.391,9.391,0,0,1-1.1-3.5A6.72,6.72,0,0,1,11.415,2.683Zm0,5.049A1.683,1.683,0,1,0,13.1,9.415,1.686,1.686,0,0,0,11.415,7.732Z"
                                                                transform="translate(-3 -1)" fill="#392c23"></path>
                                                        </svg>
                                                    </span>
                                                    فلسطين - غزة - الشجاعية
                                                </h6>
                                                <h5>مدة التنفيذ: 9 شهور</h5>
                                                <h4>التكلفة : 320,050.00 €</h4>
                                                <h3>نسبة الإنجاز</h3>
                                                <div class="progress cs-progress">
                                                    <div class="progress-bar" role="progressbar" style="width: 10%"
                                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <router-link to="/khadamat" class="show-more"> عرض التفاصيل
                                                    <span class="show-more-arrow">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8.996"
                                                            viewBox="0 0 14 8.996">
                                                            <path id="Path_382" data-name="Path 382"
                                                                d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                                                                transform="translate(-737 -1483.002)" fill="#3ec4b5"
                                                                fill-rule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </router-link>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide" role="group" aria-label="3 / 7"
                                            style="width: 319.5px; margin-left: 16px;">
                                            <div class="development-project-card">
                                                <figure>
                                                    <img src="img/project-icon-1.svg" alt="" srcset="">
                                                </figure>
                                                <h2>تأهيل شبكة المياه في منطقة الصبرة
                                                    ومناطق متفرقة في مدينة غزة</h2>
                                                <h6>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.83"
                                                            height="23.213" viewBox="0 0 16.83 23.213">
                                                            <path id="icons8_marker"
                                                                d="M11.415,1A8.431,8.431,0,0,0,3,9.415a10.142,10.142,0,0,0,1.269,4.234,39.189,39.189,0,0,0,2.663,4.53c1.92,2.886,3.833,5.233,3.833,5.233l.651.8.651-.8s1.913-2.347,3.839-5.233a40.1,40.1,0,0,0,2.656-4.53A10.142,10.142,0,0,0,19.83,9.415,8.431,8.431,0,0,0,11.415,1Zm0,1.683a6.72,6.72,0,0,1,6.732,6.732,9.392,9.392,0,0,1-1.1,3.5A40.247,40.247,0,0,1,14.5,17.251c-1.545,2.314-2.6,3.589-3.09,4.207-.493-.618-1.545-1.893-3.09-4.207a40.227,40.227,0,0,1-2.544-4.339,9.391,9.391,0,0,1-1.1-3.5A6.72,6.72,0,0,1,11.415,2.683Zm0,5.049A1.683,1.683,0,1,0,13.1,9.415,1.686,1.686,0,0,0,11.415,7.732Z"
                                                                transform="translate(-3 -1)" fill="#392c23"></path>
                                                        </svg>
                                                    </span>
                                                    فلسطين - غزة - الرمال
                                                </h6>
                                                <h5>مدة التنفيذ: 3 شهور</h5>
                                                <h4>التكلفة : 90,900.00 €</h4>
                                                <h3>نسبة الإنجاز</h3>
                                                <div class="progress cs-progress">
                                                    <div class="progress-bar" role="progressbar" style="width: 20%"
                                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <router-link to="/khadamat" class="show-more">
                                                    عرض التفاصيل
                                                    <span class="show-more-arrow">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8.996"
                                                            viewBox="0 0 14 8.996">
                                                            <path id="Path_382" data-name="Path 382"
                                                                d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                                                                transform="translate(-737 -1483.002)" fill="#3ec4b5"
                                                                fill-rule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </router-link>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide" role="group" aria-label="4 / 7"
                                            style="width: 319.5px; margin-left: 16px;">
                                            <div class="development-project-card">
                                                <figure>
                                                    <img src="img/project-icon-2.svg" alt="" srcset="">
                                                </figure>
                                                <h2>مشروع صيانة شارع السدرة وشارع
                                                    الصحابة بالمدينة</h2>
                                                <h6>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.83"
                                                            height="23.213" viewBox="0 0 16.83 23.213">
                                                            <path id="icons8_marker"
                                                                d="M11.415,1A8.431,8.431,0,0,0,3,9.415a10.142,10.142,0,0,0,1.269,4.234,39.189,39.189,0,0,0,2.663,4.53c1.92,2.886,3.833,5.233,3.833,5.233l.651.8.651-.8s1.913-2.347,3.839-5.233a40.1,40.1,0,0,0,2.656-4.53A10.142,10.142,0,0,0,19.83,9.415,8.431,8.431,0,0,0,11.415,1Zm0,1.683a6.72,6.72,0,0,1,6.732,6.732,9.392,9.392,0,0,1-1.1,3.5A40.247,40.247,0,0,1,14.5,17.251c-1.545,2.314-2.6,3.589-3.09,4.207-.493-.618-1.545-1.893-3.09-4.207a40.227,40.227,0,0,1-2.544-4.339,9.391,9.391,0,0,1-1.1-3.5A6.72,6.72,0,0,1,11.415,2.683Zm0,5.049A1.683,1.683,0,1,0,13.1,9.415,1.686,1.686,0,0,0,11.415,7.732Z"
                                                                transform="translate(-3 -1)" fill="#392c23"></path>
                                                        </svg>
                                                    </span>
                                                    فلسطين - غزة - الشجاعية
                                                </h6>
                                                <h5>مدة التنفيذ: عام ونصف</h5>
                                                <h4>التكلفة : 115,790.00 €</h4>
                                                <h3>نسبة الإنجاز</h3>
                                                <div class="progress cs-progress">
                                                    <div class="progress-bar" role="progressbar" style="width: 90%"
                                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <router-link to="/khadamat" class="show-more"> عرض التفاصيل
                                                    <span class="show-more-arrow">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8.996"
                                                            viewBox="0 0 14 8.996">
                                                            <path id="Path_382" data-name="Path 382"
                                                                d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                                                                transform="translate(-737 -1483.002)" fill="#3ec4b5"
                                                                fill-rule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </router-link>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide" role="group" aria-label="5 / 7"
                                            style="width: 319.5px; margin-left: 16px;">
                                            <div class="development-project-card">
                                                <figure>
                                                    <img src="img/project-icon-3.svg" alt="" srcset="">
                                                </figure>
                                                <h2>صيانة شبكات صرف صحي ومرافق في
                                                    مناطق متفرقة بمدينة غزة</h2>
                                                <h6>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.83"
                                                            height="23.213" viewBox="0 0 16.83 23.213">
                                                            <path id="icons8_marker"
                                                                d="M11.415,1A8.431,8.431,0,0,0,3,9.415a10.142,10.142,0,0,0,1.269,4.234,39.189,39.189,0,0,0,2.663,4.53c1.92,2.886,3.833,5.233,3.833,5.233l.651.8.651-.8s1.913-2.347,3.839-5.233a40.1,40.1,0,0,0,2.656-4.53A10.142,10.142,0,0,0,19.83,9.415,8.431,8.431,0,0,0,11.415,1Zm0,1.683a6.72,6.72,0,0,1,6.732,6.732,9.392,9.392,0,0,1-1.1,3.5A40.247,40.247,0,0,1,14.5,17.251c-1.545,2.314-2.6,3.589-3.09,4.207-.493-.618-1.545-1.893-3.09-4.207a40.227,40.227,0,0,1-2.544-4.339,9.391,9.391,0,0,1-1.1-3.5A6.72,6.72,0,0,1,11.415,2.683Zm0,5.049A1.683,1.683,0,1,0,13.1,9.415,1.686,1.686,0,0,0,11.415,7.732Z"
                                                                transform="translate(-3 -1)" fill="#392c23"></path>
                                                        </svg>
                                                    </span>
                                                    فلسطين - غزة - الشجاعية
                                                </h6>
                                                <h5>مدة التنفيذ: 6 شهور</h5>
                                                <h4>التكلفة : 55,000.00 €</h4>
                                                <h3>نسبة الإنجاز</h3>
                                                <div class="progress cs-progress">
                                                    <div class="progress-bar" role="progressbar" style="width: 65%"
                                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <router-link to="/khadamat" class="show-more"> عرض التفاصيل
                                                    <span class="show-more-arrow">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8.996"
                                                            viewBox="0 0 14 8.996">
                                                            <path id="Path_382" data-name="Path 382"
                                                                d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                                                                transform="translate(-737 -1483.002)" fill="#3ec4b5"
                                                                fill-rule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </router-link>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide" role="group" aria-label="6 / 7"
                                            style="width: 319.5px; margin-left: 16px;">
                                            <div class="development-project-card">
                                                <figure>
                                                    <img src="img/project-icon-1.svg" alt="" srcset="">
                                                </figure>
                                                <h2>تأهيل شبكة المياه في منطقة الصبرة
                                                    ومناطق متفرقة في مدينة غزة</h2>
                                                <h6>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.83"
                                                            height="23.213" viewBox="0 0 16.83 23.213">
                                                            <path id="icons8_marker"
                                                                d="M11.415,1A8.431,8.431,0,0,0,3,9.415a10.142,10.142,0,0,0,1.269,4.234,39.189,39.189,0,0,0,2.663,4.53c1.92,2.886,3.833,5.233,3.833,5.233l.651.8.651-.8s1.913-2.347,3.839-5.233a40.1,40.1,0,0,0,2.656-4.53A10.142,10.142,0,0,0,19.83,9.415,8.431,8.431,0,0,0,11.415,1Zm0,1.683a6.72,6.72,0,0,1,6.732,6.732,9.392,9.392,0,0,1-1.1,3.5A40.247,40.247,0,0,1,14.5,17.251c-1.545,2.314-2.6,3.589-3.09,4.207-.493-.618-1.545-1.893-3.09-4.207a40.227,40.227,0,0,1-2.544-4.339,9.391,9.391,0,0,1-1.1-3.5A6.72,6.72,0,0,1,11.415,2.683Zm0,5.049A1.683,1.683,0,1,0,13.1,9.415,1.686,1.686,0,0,0,11.415,7.732Z"
                                                                transform="translate(-3 -1)" fill="#392c23"></path>
                                                        </svg>
                                                    </span>
                                                    فلسطين - غزة - الرمال
                                                </h6>
                                                <h5>مدة التنفيذ: عام</h5>
                                                <h4>التكلفة : 105,890.00 €</h4>
                                                <h3>نسبة الإنجاز</h3>
                                                <div class="progress cs-progress">
                                                    <div class="progress-bar" role="progressbar" style="width: 25%"
                                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <router-link to="/khadamat" class="show-more"> عرض التفاصيل
                                                    <span class="show-more-arrow">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8.996"
                                                            viewBox="0 0 14 8.996">
                                                            <path id="Path_382" data-name="Path 382"
                                                                d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                                                                transform="translate(-737 -1483.002)" fill="#3ec4b5"
                                                                fill-rule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </router-link>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide" role="group" aria-label="7 / 7"
                                            style="width: 319.5px; margin-left: 16px;">
                                            <div class="development-project-card">
                                                <figure>
                                                    <img src="img/project-icon-2.svg" alt="" srcset="">
                                                </figure>
                                                <h2>توريد وتركيب حجر جبهة وبلاط انتر لوك في مناطق متفرقة من مدينة غزة</h2>
                                                <h6>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.83"
                                                            height="23.213" viewBox="0 0 16.83 23.213">
                                                            <path id="icons8_marker"
                                                                d="M11.415,1A8.431,8.431,0,0,0,3,9.415a10.142,10.142,0,0,0,1.269,4.234,39.189,39.189,0,0,0,2.663,4.53c1.92,2.886,3.833,5.233,3.833,5.233l.651.8.651-.8s1.913-2.347,3.839-5.233a40.1,40.1,0,0,0,2.656-4.53A10.142,10.142,0,0,0,19.83,9.415,8.431,8.431,0,0,0,11.415,1Zm0,1.683a6.72,6.72,0,0,1,6.732,6.732,9.392,9.392,0,0,1-1.1,3.5A40.247,40.247,0,0,1,14.5,17.251c-1.545,2.314-2.6,3.589-3.09,4.207-.493-.618-1.545-1.893-3.09-4.207a40.227,40.227,0,0,1-2.544-4.339,9.391,9.391,0,0,1-1.1-3.5A6.72,6.72,0,0,1,11.415,2.683Zm0,5.049A1.683,1.683,0,1,0,13.1,9.415,1.686,1.686,0,0,0,11.415,7.732Z"
                                                                transform="translate(-3 -1)" fill="#392c23"></path>
                                                        </svg>
                                                    </span>
                                                    فلسطين - غزة - الشجاعية
                                                </h6>
                                                <h5>مدة التنفيذ: 9 شهور</h5>
                                                <h4>التكلفة : 320,050.00 €</h4>
                                                <h3>نسبة الإنجاز</h3>
                                                <div class="progress cs-progress">
                                                    <div class="progress-bar" role="progressbar" style="width: 10%"
                                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <router-link to="/khadamat" class="show-more"> عرض التفاصيل
                                                    <span class="show-more-arrow">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8.996"
                                                            viewBox="0 0 14 8.996">
                                                        <path id="Path_382" data-name="Path 382"
                                                            d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                                                            transform="translate(-737 -1483.002)" fill="#3ec4b5"
                                                            fill-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </router-link>
                                        </div>
                                    </div>
                                </swiper-slide>




                            </swiper>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</section></template>
<script>
import Sidebar5 from '@/components/sidebar5.vue';

// import Swiper core and required modules
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
        SwiperSlide,Sidebar5,
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