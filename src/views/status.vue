<script setup>
import Sidebar4 from "@/components/sidebar4.vue";
</script>
<template>
  <Sidebar4 />
  <section class="section-content">
    <div class="container">
      <div class="mycontent">
        <div class="status-page">
          <div class="container">
            <h2 class="title">أرقام وإحصائيات</h2>
            <div class="row mt-5">
              <div class="col-xl-2 col-lg-12">
                <div class="status-filter">
                  <div class="row">
                    <div class="col-xl-12 col-lg-2 col-sm-4">
                      <div class="y-filter">
                        <div class="y-dash"></div>
                        <p>تطور العمران</p>
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-2 col-sm-4">
                      <div class="y-filter active">
                        <div class="y-dash"></div>
                        <p>تطور السكان</p>
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-2 col-sm-4">
                      <div class="y-filter">
                        <div class="y-dash"></div>
                        <p>تطور البنية التحتية</p>
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-2 col-sm-4">
                      <div class="y-filter">
                        <div class="y-dash"></div>
                        <p>تطور الانتاج</p>
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-2 col-sm-4">
                      <div class="y-filter">
                        <div class="y-dash"></div>
                        <p>تطور الزراعة</p>
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-2 col-sm-4">
                      <div class="y-filter">
                        <div class="y-dash"></div>
                        <p>تطور الصناعة</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-12">
                <div class="y-chart">
                  <div class="row">
                    <div class="col-12">
                      <Bar
                        id="my-chart-id"
                        :options="chartOptions"
                        :data="chartData"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-12">
                <div class="stauts-data">
                  <h3 class="title">تطور السكان</h3>
                  <p>
                    مدينة ساحلية فلسطينية، وأكبر مدن قطاع غزة وتقع في شماله، في
                    الطرف الجنوبي للساحل الشرقي من البحر المتوسط. تبعد عن مدينة
                    القدس مسافة 78 كم إلى الجنوب الغربي، وهي مركز محافظة غزة
                    وأكبر مدن السلطة الفلسطينية من حيث تعداد السكان، حيث بلغ عدد
                    سكان محافظة غزة 700 ألف نسمة في عام 2013، ما يجعلها أكبر
                    تجمع للفلسطينيين في فلسطين تبلغ مساحتها 56 كم2، مما يجعلها
                    من أكثر المدن كثافة بالسكان في العالم تعتبر مدينة غزة من أهم
                    المدن الفلسطينية، لأهمية موقعها الاستراتيجي والأهمية
                    الاقتصادية والعمرانية للمدينة، بالإضافة إلى كونها المقر
                    المؤقت للسلطة الوطنية الفلسطينية، ووجود الكثير من مقراتها
                    ووزارتها فيها
                  </p>
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
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["2020", "2010", "2000", "1990", "1980"],
        datasets: [
          {
            data: [570000, 400000, 260000, 220000, 180000],
            borderWidth: 1,
            backgroundColor: "#3EC4B5",
          },
        ],
      },
      chartOptions: {
        scales: {
          y: {
            min: 100000,
            ticks: {
              stepSize: 100000,
            },
            position: "right",
          },
        },
      },
    };
  },
};
</script>
