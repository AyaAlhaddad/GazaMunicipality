<script setup>
import Siddebar3 from "@/components/Sidbar3.vue";
</script>
<template>
  <Siddebar3 />
  <section class="section-content">
    <section>
      <div class="mycontent">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-8">
              <div class="main-title">
                <h1 class="title">الخدمات العامة</h1>
              </div>
              <p>
                تقدم بلدية غزة نحو 30 خدمة أساسية لسكان مدينة غزة البالغ تعدادهم
                قرابة &rlm;670 الف نسمة في نهاية عام 2018م بما يشكل 13% من سكان
                دولة فلسطين حيث تبلغ مساحة المدينة 56كم2، مما يجعلها من أكثر
                المدن كثافة سكانية
              </p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-xl-4 col-md-6">
              <div class="service-card">
                <figure>
                  <img src="img/icon-service-1.svg" alt="" srcset="" />
                </figure>
                <h2>توصيل المياه</h2>
                <p>
                  خدمة تزويد سكان مدينة غزة بالمياه الصالحة للاستخدام من كافة
                  المصادر المتاحة، وتعيين مواصفات لوازمها كالعدادات والشبكات
                  وتنظيم توزيعها وتحديد أسعارها وبدل الاشتراك فيها، والتأكد من
                  سلامتها .وجودتها ومنع تلوث مصادرها
                </p>
                <router-link to="/khadamat" class="show-more">
                  عرض التفاصيل

                  <span class="show-more-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="8.996"
                      viewBox="0 0 14 8.996"
                    >
                      <path
                        id="Path_382"
                        data-name="Path 382"
                        d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                        transform="translate(-737 -1483.002)"
                        fill="#3ec4b5"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </router-link>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="service-card">
                <figure>
                  <img src="img/icon-service-2.svg" alt="" srcset="" />
                </figure>
                <h2>الصرف الصحي</h2>
                <p>
                  تولي بلدية غزة قطاع الصرف الصحي اهتمامًا كبيرًا وتعمل على
                  زيادة رقعة المناطق المشمولة بشبكات التصريف والحد من ظاهرة
                  الآبار الامتصاصية التي تتسبب بتسرب المياه العادمة إلى الخزانات
                  الجوفية وإلحاق أضرار .بالأراضي الزراعية والتربة
                </p>
                <router-link to="/khadamat" class="show-more">
                  عرض التفاصيل
                  <span class="show-more-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="8.996"
                      viewBox="0 0 14 8.996"
                    >
                      <path
                        id="Path_382"
                        data-name="Path 382"
                        d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                        transform="translate(-737 -1483.002)"
                        fill="#3ec4b5"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </router-link>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="service-card">
                <figure>
                  <img src="img/icon-service-3.svg" alt="" srcset="" />
                </figure>
                <h2>خدمات النظافة</h2>
                <p>
                  تقدم خدمة جمع النفايات والفضلات من الشوارع والمنازل والمحلات
                  العامة وتجميعها في محطة الترحيل المؤقتة بمنطقة اليرموك وسط
                  المدينة، قبل نقلها وترحيلها إلى المكب الرئيس في منطقة جحر
                  الديك .شرق مدينة غزة، والتعامل معها
                </p>
                <router-link to="/khadamat" class="show-more">
                  عرض التفاصيل
                  <span class="show-more-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="8.996"
                      viewBox="0 0 14 8.996"
                    >
                      <path
                        id="Path_382"
                        data-name="Path 382"
                        d="M741.909,1491.729a1,1,0,0,1-1.413-.05l-3.231-3.5a1.006,1.006,0,0,1,0-1.36l3.231-3.5a1,1,0,0,1,1.47,1.36l-1.682,1.82H750a1,1,0,1,1,0,2h-9.716l1.682,1.82A1,1,0,0,1,741.909,1491.729Z"
                        transform="translate(-737 -1483.002)"
                        fill="#3ec4b5"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
