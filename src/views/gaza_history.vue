<script setup>
import Sidebar6 from "@/components/sidebar6.vue";
</script>
<template>
  <section class="section-content">
    <section>
      <Sidebar6 />
      <div class="mycontent">
        <div class="y-location-page">
          <div class="container">
            <div class="y-gaza-history-page">
              <div class="container">
                <h2 class="title">غزة تاريخ وحضارة</h2>
                <div class="row">
                  <div class="col-xxl-4 col-xl-6 col-sm-12">
                    <div
                      class="nav nav-pills y-nav"
                      id="pills-tab"
                      role="tablist"
                    >
                      <a
                        class="nav-link"
                        id="pills-see-tab"
                        data-bs-toggle="pill"
                        href="#history-gaza"
                        role="tab"
                        aria-controls="our-see"
                        aria-selected="false"
                      >
                        غزة التاريخ</a
                      >

                      <a
                        class="nav-link active"
                        id="pills-goal-tab"
                        data-bs-toggle="pill"
                        href="#our-goal"
                        role="tab"
                        aria-controls="our-goal"
                        aria-selected="true"
                      >
                        غزة الحضارة</a
                      >
                    </div>
                  </div>
                  <hr class="mb-5" />
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade our-see"
                      id="history-gaza"
                      role="tabpanel"
                      aria-labelledby="pills-see-tab"
                    ></div>
                    <div
                      class="tab-pane fade our-goal active show"
                      id="our-goal"
                      role="tabpanel"
                      aria-labelledby="pills-goal-tab"
                    ></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xxl-4 col-xl-6 col-md-12">
                    <div class="y-center">
                      <figure>
                        <img src="img/City1.png" alt="" />
                      </figure>
                      <h3>غزة الحاضر والمستقبل</h3>
                      <p>قلب فلسطين النابض</p>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-xl-6 col-md-12">
                    <div class="y-center">
                      <figure>
                        <img src="img/City2.png" alt="" />
                      </figure>
                      <h3>غزة في العصور الوسطى</h3>
                      <p>العراقة والتراث</p>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-xl-6 col-md-12">
                    <div class="y-center">
                      <figure>
                        <img src="img/City3.png" alt="" />
                      </figure>
                      <h3>غزة في العصر الإسلامي</h3>
                      <p>رجالاتها وشخصياتها</p>
                    </div>
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
