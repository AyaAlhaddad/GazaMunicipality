<script setup>
import Sidebar6 from "@/components/sidebar6.vue";
</script>
<template>
  <section class="section-content">
    <section>
      <Sidebar6 />
      <div class="mycontent">
        <div class="electronic-museum-page">
          <div class="container">
            <h2 class="title">المتحف الإلكتروني</h2>
            <div class="row">
              <div class="col-lg-6 my-4">
                <p class="">
                  تزخر مدينة غزة الفلسطينية بتراث أثري وتاريخي يعود لآلاف
                  السنين، ومنذ نشأتها في عام ثلاثة آلاف قبل الميلاد، تعتبر من
                  أقدم المدن الأثرية والتاريخية، المعبرة عن تجذر الحضارة
                  الفلسطينية العربية منذ أنشأها الكنعانيون، يضم المتحف مئات
                  القطع الأثرية، من فخار، زجاج، عاج، أعمدة كورالثية، زينة نساء،
                  وغيرها، وتعود تلك القطع إلى عدد من العصور، منها العصر
                  اليوناني، الروماني، البيزنطي، والإسلامي بما يحتويه من العصر
                  .الأيوبي والأموي والمملوكي والعثماني
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-xxl-4 col-xl-6 col-md-12">
                <router-link to="/athar">
                  <div class="y-center">
                    <figure>
                      <img src="img/khan-younis.png" alt="" width="410" />
                    </figure>
                  </div>
                  <h3 class="y-title">الأثار في غزة</h3>
                </router-link>
              </div>
              <div class="col-xxl-4 col-xl-6 col-md-12">
                <router-link to="/athar">
                  <div class="y-center">
                    <figure>
                      <img
                        src="img/tatreez_filisteene_2.png"
                        alt=""
                        width="410"
                      />
                    </figure>
                  </div>
                  <h3 class="y-title">الحرف اليدوية</h3>
                </router-link>
              </div>
              <div class="col-xxl-4 col-xl-6 col-md-12">
                <router-link to="/athar">
                  <div class="y-center">
                    <figure>
                      <img
                        src="img/dd79491e05350e578a5456c44a2b78b0cfe3dd86-241119132234.png"
                        alt=""
                        width="410"
                      />
                    </figure>
                  </div>
                  <h3 class="y-title">الفلكلور الفلسطيني</h3>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
