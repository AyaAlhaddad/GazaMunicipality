<script setup>
import Sidebar2 from "@/components/Sidebar2.vue";
</script>
<template>
  <Sidebar2 />
  <section class="section-content">
    <div class="mycontent">
      <div class="container">
        <div class="row" style="margin-top: 90px">
          <h1 class="title">المجلس البلدي</h1>
          <div class="cs-tabs">
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-1"
                  type="button"
                  role="tab"
                  aria-controls="pills-1"
                  aria-selected="true"
                >
                  كلمة رئيس البلدية
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-2"
                  type="button"
                  role="tab"
                  aria-controls="pills-2"
                  aria-selected="false"
                >
                  أعضاء المجلس البلدي
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-3"
                  type="button"
                  role="tab"
                  aria-controls="pills-3"
                  aria-selected="false"
                >
                  جلسات المجلس
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-4-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-4"
                  type="button"
                  role="tab"
                  aria-controls="pills-4"
                  aria-selected="false"
                >
                  جلسات لجنة التنظيم
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-5-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-5"
                  type="button"
                  role="tab"
                  aria-controls="pills-5"
                  aria-selected="false"
                >
                  لجان الأحياء
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-1"
                role="tabpanel"
                aria-labelledby="pills-1-tab"
              >
                <div class="row mb-5">
                  <div class="col-xxl-4 col-xl-5">
                    <div
                      class="manager-card d-flex align-items-center gap-4 flex-wrap"
                    >
                      <figure class="mb-0">
                        <img src="img/manager-img.png" alt="" srcset="" />
                      </figure>
                      <div>
                        <h2>د.يحيى رشدي السراج</h2>
                        <h4>رئيس بلدية غزة</h4>
                        <figure class="mt-3 mb-0 text-center">
                          <img src="img/signuture.svg" alt="" srcset="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-9 col-md-8 col-11 mx-xl-0 mx-auto"
                  >
                    <p class="manager-word">
                      "أن تكون مدينة غزة، مركزا اقتصاديا وحضاريا وثقافيا ،
                      وتقديم خدمات متميزة ضمن بيئة مستدامة ومشاركة مجتمعية
                      واعية، يسود فيها الأمن والعدالة .الإجتماعية"
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="details-card">
                      <h2 class="details-card-title">نبذة مختصرة</h2>
                      <div class="details-card-description">
                        <p>
                          ولد د. يحيى رشدي السراج، في عام 1962م، في مدينة غزة
                          جنوب غرب .فلسطين، متزوج ولديه سبعة من الأبناء
                        </p>
                        <p>
                          أنهى د. السراج دراسة المراحل الأساسية والثانوية في
                          مدارس الإمام الشافعي والزيتون وفلسطين في مدينة غزة،
                          قبل الانتقال إلى مدينة نابلس شمال الضفة الغربية لإتمام
                          درجة البكالوريوس من جامعة النجاح الوطنية وحصل على درجة
                          الماجستير من جامعة ليدز البريطانية، وتمكن من الحصول
                          على درجة الدكتوراه من جامعة برادفورد عام 1995، حتى
                          أصبح أستاذا مشاركا .في هندسة الطرق والمواصلات
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="details-card">
                      <h2 class="details-card-title">المناصب التي شغلها</h2>
                      <div class="details-card-description">
                        <p class="mb-1">
                          عمل عضوا في العديد من المؤسسات المهنية والعامة، مثل :
                        </p>
                        <p class="mb-1">- عضو لجنة الوفاق والمصالحة الوطنية</p>
                        <p class="mb-1">- عضو اللجنة الشعبية لمواجهة الحصار</p>
                        <p class="mb-1">
                          - عضو مجلس استشاري لعدد من المؤسسات الدولية والأهلية
                        </p>
                        <p class="mb-1">
                          - عضو مؤسس في جمعية نطوف للبيئة وتنمية المجتمع
                        </p>
                        <p class="mb-1">
                          - عضو نقابة المهندسين الفلسطينيين في قطاع غزة
                        </p>
                        <p class="mb-1">
                          - عضو مجلس إدارة فرع غزة في نقابة المهندسين 1998 –
                          2007
                        </p>
                        <p class="mb-1">
                          - في بريطانيا (IHT ) عضو سابق في هيئة مهندسي الطرق
                          والمواصلات
                        </p>
                        <p class="mb-1">
                          - في الولايات المتحدة (ITE ) عضو سابق في هيئة مهندسي
                          المواصلات عام 2002s Who International Society’Whoأدرج
                          اسمه في سجل من هو مؤسس موقع إلكتروني متخصص بإحصائيات
                          ودراسات الطرق والمواصلات بفلسطين
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="details-card">
                      <h2 class="details-card-title">الاتصال والتواصل</h2>
                      <h4 class="details-card-subtitle mt-5">
                        للاتصال والتواصل مع مكتب رئيس بلدية غزة :
                      </h4>
                      <div class="table-responsive">
                        <table class="table table-bordered">
                          <tbody>
                            <tr>
                              <td>هاتف رقم</td>
                              <th>2844055</th>
                            </tr>
                            <tr>
                              <td>فاكس رقم</td>
                              <th>2824400</th>
                            </tr>
                            <tr>
                              <td>صندوق بريد</td>
                              <th>16</th>
                            </tr>
                            <tr>
                              <td>البريد الإلكتروني</td>
                              <th>gm@mogaza.org</th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-2"
                role="tabpanel"
                aria-labelledby="pills-2-tab"
              >
                <div class="members">
                  <div class="row">
                    <div class="col-xxl-5 col-xl-6">
                      <h4>أعضاء المجلس البلدي الحاليين</h4>
                      <p class="mb-5">
                        تسلم المجلس البلدي إدارة بلدية غزة مطلع آب/أغسطس 2016،
                        في وقت تعاني فيه البلدية أزمة مالية كبيرة وترهلا إداريا
                        وقلة في الموارد والإمكانات. ويضم المجلس البلدي 11 عضوا
                        نشيطا يحملون شهادات ودرجات علمية عالية في تخصصات متنوعة،
                        يمثلون أحياء ومناطق المدينة، ولديهم الرغبة والدافعية
                      </p>
                      <div
                        class="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-5 row-cols-3"
                      >
                        <div class="col">
                          <a href="#">
                            <div class="member-card member" :class="{ active: isActive == 0 }" @click="showMember(0)">
                              <figure>
                                <img src="img/member-1.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. د. يحيى السراج</h2>
                              <h6>رئيس بلدية غزة</h6>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card member" :class="{ active: isActive == 1 }" @click="showMember(1)">
                              <figure>
                                <img src="img/member-2.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. بدر صبرة</h2>
                              <h6>عضو مجلس بلدي</h6>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card member" :class="{ active: isActive == 2 }" @click="showMember(2)">
                              <figure>
                                <img src="img/member-3.png" alt="" srcset="" />
                              </figure>
                              <h2>د. جميل طرزي</h2>
                              <h6>عضو مجلس بلدي</h6>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card member" :class="{ active: isActive == 3 }"   @click="showMember(3)">
                              <figure>
                                <img src="img/member-4.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. مروان الغول</h2>
                              <h6>عضو مجلس بلدي</h6>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card member" :class="{ active: isActive == 4 }"  @click="showMember(4)">
                              <figure>
                                <img src="img/member-5.png" alt="" srcset="" />
                              </figure>
                              <h2>م. هاشم سكيك</h2>
                              <h6>عضو مجلس بلدي</h6>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card member" :class="{ active: isActive == 5 }"  @click="showMember(5)">
                              <figure>
                                <img src="img/member-6.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. مصطفى قزعاط</h2>
                              <h6>عضو مجلس بلدي</h6>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card member" :class="{ active: isActive == 6 }"  @click="showMember(6)">
                              <figure>
                                <img src="img/member-7.png" alt="" srcset="" />
                              </figure>
                              <h2>م. إسماعيل حمادة</h2>
                              <h6>عضو مجلس بلدي</h6>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card member" :class="{ active: isActive == 7 }"  @click="showMember(7)">
                              <figure>
                                <img src="img/member-8.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. تامر الريس</h2>
                              <h6>عضو مجلس بلدي</h6>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card member" :class="{ active: isActive == 8 }"   @click="showMember(8)">
                              <figure>
                                <img src="img/member-9.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. لؤي عياد</h2>
                              <h6>عضو مجلس بلدي</h6>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card member" :class="{ active: isActive == 9 }"   @click="showMember(9)">
                              <figure>
                                <img src="img/member-10.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. فداء المدهون</h2>
                              <h6>عضو مجلس بلدي</h6>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="col-xxl-6 offset-xxl-1 col-xl-6">
                      <div class="member-card-details">
                        <div class="member-card">
                          <figure>
                            <img src="img/member-5.png" alt="" srcset="" />
                          </figure>
                          <h2>م. هاشم عرفة سكيك</h2>
                          <h6>عضو مجلس بلدي</h6>
                        </div>
                        <p>
                          ماجستير إدارة تشييد، مدير عام شركة بالكون للمقاولات
                          والتجارة العامة، عضو مجلس إدارة اتحاد المقاولين، أمين
                          سر مركز التحكيم الهندسي، أمين سر مركز فض الخلافات
                        </p>
                      </div>
                    </div> -->

                    <div class="col-xxl-6 offset-xxl-1 col-xl-6">
                      <div class="member-card-details">
                        <div class="member-card">
                          <figure>
                            <img :src="memberCardDetails.src_img" alt="" srcset="" /> 
                          </figure>
                          <h2>{{memberCardDetails.title}}</h2>
                          <h6>{{memberCardDetails.desc}}</h6>
                        </div>
                        <p>
                          ماجستير إدارة تشييد، مدير عام شركة بالكون للمقاولات
                          والتجارة العامة، عضو مجلس إدارة اتحاد المقاولين، أمين
                          سر مركز التحكيم الهندسي، أمين سر مركز فض الخلافات
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-3"
                role="tabpanel"
                aria-labelledby="pills-3-tab"
              >
                <div class="row">
                  <div class="col-xxl-6 col-xl-6">
                    <form action="" method="get">
                      <div class="cs-input-icon">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control cs-search-input"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput"
                            >ابحث برقم الجلسة ...</label
                          >
                        </div>
                        <span class="input-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <path
                              id="Subtraction_55"
                              data-name="Subtraction 55"
                              d="M18,20a1.988,1.988,0,0,1-1.415-.586L13.792,16.62a9,9,0,1,1,2.828-2.828l1.933,1.932.6.6.258.258A2,2,0,0,1,18,20ZM9,3a6,6,0,1,0,6,6A6.007,6.007,0,0,0,9,3Z"
                              transform="translate(0)"
                              fill="#392c23"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </form>
                    <div class="session-content">
                      <div class="date mt-4 mb-2">&rlm;16 ديسمبر, 2021</div>
                      <h6>
                        مجلس بلدية غزة يناقش مع نشطاء شباب جهود دعم المبادرات
                        الشبابية (عنوان القرار الصادر يوضع هنا)
                      </h6>
                      <div class="d-flex gap-2 mt-4">
                        <a href="#" class="btn cs-btn success">عرض الجلسة</a>
                        <a
                          href="#"
                          class="btn cs-btn d-flex justify-content-center gap-2"
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                            >
                              <path
                                id="icons8_print"
                                d="M6.969,0a3.016,3.016,0,0,0-3,3V8H3a3,3,0,0,0-3,3v6a3,3,0,0,0,3,3h.969v3a3.016,3.016,0,0,0,3,3h12a3.016,3.016,0,0,0,3-3V20H23a3,3,0,0,0,3-3V11a3,3,0,0,0-3-3H21.969V3a3.016,3.016,0,0,0-3-3Zm0,2h12a.987.987,0,0,1,1,1V8h-14V3A.987.987,0,0,1,6.969,2ZM21.5,10A1.5,1.5,0,1,1,20,11.5,1.5,1.5,0,0,1,21.5,10ZM5.969,15h14v8a.987.987,0,0,1-1,1h-12a.987.987,0,0,1-1-1ZM8,17v2H18V17Zm0,3v2h7V20Z"
                                fill="#392c23"
                              ></path>
                            </svg>
                          </span>
                          طباعة الجلسة
                        </a>
                      </div>
                      <h5 class="mt-4">القرارات الصادرة عن الجلسة</h5>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="point">
                            <span>1</span>
                            <p>.توفير خدمات حياتية أفضل للمواطنين</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="point">
                            <span>2</span>
                            <p>.تشجيع المشاركة المجتمعية في إدارة العمل</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="point">
                            <span>3</span>
                            <p>.خلق جو صحي للعمل والاستقرار الوظيفي</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="point">
                            <span>4</span>
                            <p>.تشجيع المشروعات التنموية والتطويري</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="point">
                            <span>5</span>
                            <p>.المساعدة في خلق فرص عمل</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="point">
                            <span>6</span>
                            <p>.تشجيع المشروعات التنموية والتطويري</p>
                          </div>
                        </div>
                      </div>
                      <h5 class="mt-4">الأعضاء الحاضرين</h5>
                      <div
                        class="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-5 row-cols-3"
                      >
                        <div class="col">
                          <a href="#">
                            <div class="member-card">
                              <figure>
                                <img src="img/member-1.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. د. يحيى السراج</h2>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card">
                              <figure>
                                <img src="img/member-2.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. بدر صبرة</h2>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card">
                              <figure>
                                <img src="img/member-3.png" alt="" srcset="" />
                              </figure>
                              <h2>د. جميل طرزي</h2>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card">
                              <figure>
                                <img src="img/member-4.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. مروان الغول</h2>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card">
                              <figure>
                                <img src="img/member-5.png" alt="" srcset="" />
                              </figure>
                              <h2>م. هاشم سكيك</h2>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-4 offset-xxl-2 col-xl-6">
  <!-- <VCalendar /> -->
  <!-- <VDatePicker v-model="date" /> -->
  <VCalendar :attributes="attributes" />
                    <div class="d-flex gap-4 mt-5">
                      <div class="cs-status">
                        <span
                          class="cs-status-icon"
                          style="background-color: #3ec4b5"
                        ></span>
                        <h6>الحالية</h6>
                      </div>
                      <div class="cs-status">
                        <span
                          class="cs-status-icon"
                          style="background-color: #cf2a45"
                        ></span>
                        <h6>السابقة</h6>
                      </div>
                      <div class="cs-status">
                        <span
                          class="cs-status-icon"
                          style="background-color: #32c33a"
                        ></span>
                        <h6>القادمة</h6>
                      </div>
                    </div>
                    <a href="#" class="btn cs-btn mt-4">عرض كافة الجلسات</a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-4"
                role="tabpanel"
                aria-labelledby="pills-4-tab"
              >
                <div class="row">
                  <div class="col-xxl-6 col-xl-6">
                    <form action="" method="get">
                      <div class="cs-input-icon">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control cs-search-input"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput"
                            >ابحث برقم الجلسة ...</label
                          >
                        </div>
                        <span class="input-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <path
                              id="Subtraction_55"
                              data-name="Subtraction 55"
                              d="M18,20a1.988,1.988,0,0,1-1.415-.586L13.792,16.62a9,9,0,1,1,2.828-2.828l1.933,1.932.6.6.258.258A2,2,0,0,1,18,20ZM9,3a6,6,0,1,0,6,6A6.007,6.007,0,0,0,9,3Z"
                              transform="translate(0)"
                              fill="#392c23"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </form>
                    <div class="session-content">
                      <div class="date mt-4 mb-2">&rlm;16 ديسمبر, 2021</div>
                      <h6>
                        مجلس بلدية غزة يناقش مع نشطاء شباب جهود دعم المبادرات
                        الشبابية (عنوان القرار الصادر يوضع هنا)
                      </h6>
                      <div class="d-flex gap-2 mt-4">
                        <a href="#" class="btn cs-btn success">عرض الجلسة</a>
                        <a
                          href="#"
                          class="btn cs-btn d-flex justify-content-center gap-2"
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                            >
                              <path
                                id="icons8_print"
                                d="M6.969,0a3.016,3.016,0,0,0-3,3V8H3a3,3,0,0,0-3,3v6a3,3,0,0,0,3,3h.969v3a3.016,3.016,0,0,0,3,3h12a3.016,3.016,0,0,0,3-3V20H23a3,3,0,0,0,3-3V11a3,3,0,0,0-3-3H21.969V3a3.016,3.016,0,0,0-3-3Zm0,2h12a.987.987,0,0,1,1,1V8h-14V3A.987.987,0,0,1,6.969,2ZM21.5,10A1.5,1.5,0,1,1,20,11.5,1.5,1.5,0,0,1,21.5,10ZM5.969,15h14v8a.987.987,0,0,1-1,1h-12a.987.987,0,0,1-1-1ZM8,17v2H18V17Zm0,3v2h7V20Z"
                                fill="#392c23"
                              ></path>
                            </svg>
                          </span>
                          طباعة الجلسة
                        </a>
                      </div>
                      <h5 class="mt-4">القرارات الصادرة عن الجلسة</h5>
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="point">
                            <span>1</span>
                            <p>.توفير خدمات حياتية أفضل للمواطنين</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="point">
                            <span>2</span>
                            <p>.تشجيع المشاركة المجتمعية في إدارة العمل</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="point">
                            <span>3</span>
                            <p>.خلق جو صحي للعمل والاستقرار الوظيفي</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="point">
                            <span>4</span>
                            <p>.تشجيع المشروعات التنموية والتطويري</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="point">
                            <span>5</span>
                            <p>.المساعدة في خلق فرص عمل</p>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="point">
                            <span>6</span>
                            <p>.تشجيع المشروعات التنموية والتطويري</p>
                          </div>
                        </div>
                      </div>
                      <h5 class="mt-4">الأعضاء الحاضرين</h5>
                      <div
                        class="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-5 row-cols-3"
                      >
                        <div class="col">
                          <a href="#">
                            <div class="member-card">
                              <figure>
                                <img src="img/member-1.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. د. يحيى السراج</h2>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card">
                              <figure>
                                <img src="img/member-2.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. بدر صبرة</h2>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card">
                              <figure>
                                <img src="img/member-3.png" alt="" srcset="" />
                              </figure>
                              <h2>د. جميل طرزي</h2>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card">
                              <figure>
                                <img src="img/member-4.png" alt="" srcset="" />
                              </figure>
                              <h2>أ. مروان الغول</h2>
                            </div>
                          </a>
                        </div>
                        <div class="col">
                          <a href="#">
                            <div class="member-card">
                              <figure>
                                <img src="img/member-5.png" alt="" srcset="" />
                              </figure>
                              <h2>م. هاشم سكيك</h2>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-4 offset-xxl-2 col-xl-6">
                    <VCalendar :attributes="attributes" />

                    <div class="d-flex gap-4 mt-5">
                      <div class="cs-status">
                        <span
                          class="cs-status-icon"
                          style="background-color: #3ec4b5"
                        ></span>
                        <h6>الحالية</h6>
                      </div>
                      <div class="cs-status">
                        <span
                          class="cs-status-icon"
                          style="background-color: #cf2a45"
                        ></span>
                        <h6>السابقة</h6>
                      </div>
                      <div class="cs-status">
                        <span
                          class="cs-status-icon"
                          style="background-color: #32c33a"
                        ></span>
                        <h6>القادمة</h6>
                      </div>
                    </div>
                    <a href="#" class="btn cs-btn mt-4">عرض كافة الجلسات</a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-5"
                role="tabpanel"
                aria-labelledby="pills-5-tab"
              >
                <div class="row">
                  <div class="col-lg-4">
                    <div class="sidebar-map cs-scroll">
                      <h2>لجان الأحياء</h2>
                      <div class="map-list">
                        <a
                          href="#"
                          class="list list-clickable"
                          data-lat="31.5075659339788"
                          data-lng="34.464420823310356"
                        >
                          <span class="count">1</span>
                          <div class="map-list-info">
                            <h6>لجنة حي منطقة الشيخ رضوان</h6>
                            <div class="d-flex align-items-center gap-2">
                              <span class="phone-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12.865"
                                  height="11.875"
                                  viewBox="0 0 12.865 11.875"
                                >
                                  <path
                                    id="icons8_telephone"
                                    d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                    transform="translate(-1 -2)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <p>0599486227</p>
                            </div>
                          </div>
                          <div class="location-data">
                            <div class="location-content">
                              <h2>لجنة حي منطقة الزيتون</h2>
                              <div class="d-flex gap-4">
                                <div class="location-content-phone">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12.865"
                                      height="11.875"
                                      viewBox="0 0 12.865 11.875"
                                    >
                                      <path
                                        id="icons8_telephone"
                                        d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                        transform="translate(-1 -2)"
                                        fill="#392c23"
                                      ></path>
                                    </svg>
                                  </span>
                                  <p>0599843331</p>
                                </div>
                                <div class="location-content-phone">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12.865"
                                      height="11.875"
                                      viewBox="0 0 12.865 11.875"
                                    >
                                      <path
                                        id="icons8_telephone"
                                        d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                        transform="translate(-1 -2)"
                                        fill="#392c23"
                                      ></path>
                                    </svg>
                                  </span>
                                  <p>0599843331</p>
                                </div>
                              </div>
                              <h2 class="mt-4">أعضاء لجنة الحي</h2>
                              <div
                                class="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-5 row-cols-3"
                              >
                                <div class="col">
                                  <div class="member-card">
                                    <figure>
                                      <img
                                        src="img/member-1.png"
                                        alt=""
                                        srcset=""
                                      />
                                    </figure>
                                    <h2>أ. د. يحيى السراج</h2>
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="member-card">
                                    <figure>
                                      <img
                                        src="img/member-2.png"
                                        alt=""
                                        srcset=""
                                      />
                                    </figure>
                                    <h2>أ. بدر صبرة</h2>
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="member-card">
                                    <figure>
                                      <img
                                        src="img/member-3.png"
                                        alt=""
                                        srcset=""
                                      />
                                    </figure>
                                    <h2>د. جميل طرزي</h2>
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="member-card">
                                    <figure>
                                      <img
                                        src="img/member-4.png"
                                        alt=""
                                        srcset=""
                                      />
                                    </figure>
                                    <h2>أ. مروان الغول</h2>
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="member-card">
                                    <figure>
                                      <img
                                        src="img/member-5.png"
                                        alt=""
                                        srcset=""
                                      />
                                    </figure>
                                    <h2>م. هاشم سكيك</h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          class="list list-clickable"
                          data-lat="31.5016946"
                          data-lng="34.4668445"
                        >
                          <span class="count">2</span>
                          <div class="map-list-info">
                            <h6>لجنة حي منطقة الزيتون</h6>
                            <div class="d-flex align-items-center gap-2">
                              <span class="phone-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12.865"
                                  height="11.875"
                                  viewBox="0 0 12.865 11.875"
                                >
                                  <path
                                    id="icons8_telephone"
                                    d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                    transform="translate(-1 -2)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <p>0599486227</p>
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          class="list list-clickable"
                          data-lat="31.5316946"
                          data-lng="34.4368445"
                        >
                          <span class="count">3</span>
                          <div class="map-list-info">
                            <h6>لجنة حي منطقة الشاطي الجنوبي</h6>
                            <div class="d-flex align-items-center gap-2">
                              <span class="phone-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12.865"
                                  height="11.875"
                                  viewBox="0 0 12.865 11.875"
                                >
                                  <path
                                    id="icons8_telephone"
                                    d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                    transform="translate(-1 -2)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <p>0599486227</p>
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          class="list list-clickable"
                          data-lat="31.5316946"
                          data-lng="34.4678445"
                        >
                          <span class="count">4</span>
                          <div class="map-list-info">
                            <h6>لجنة حي منطقة الشاطي الشمالي وحي النصر</h6>
                            <div class="d-flex align-items-center gap-2">
                              <span class="phone-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12.865"
                                  height="11.875"
                                  viewBox="0 0 12.865 11.875"
                                >
                                  <path
                                    id="icons8_telephone"
                                    d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                    transform="translate(-1 -2)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <p>0599486227</p>
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          class="list list-clickable"
                          data-lat="31.5216946"
                          data-lng="34.4668445"
                        >
                          <span class="count">5</span>
                          <div class="map-list-info">
                            <h6>لجنة حي منطقة المحطة - التفاح الغربي</h6>
                            <div class="d-flex align-items-center gap-2">
                              <span class="phone-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12.865"
                                  height="11.875"
                                  viewBox="0 0 12.865 11.875"
                                >
                                  <path
                                    id="icons8_telephone"
                                    d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                    transform="translate(-1 -2)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <p>0599486227</p>
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          class="list list-clickable"
                          data-lat="31.5016946"
                          data-lng="34.4668445"
                        >
                          <span class="count">6</span>
                          <div class="map-list-info">
                            <h6>لجنة حي منطقة الدرج</h6>
                            <div class="d-flex align-items-center gap-2">
                              <span class="phone-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12.865"
                                  height="11.875"
                                  viewBox="0 0 12.865 11.875"
                                >
                                  <path
                                    id="icons8_telephone"
                                    d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                    transform="translate(-1 -2)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <p>0599486227</p>
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          class="list list-clickable"
                          data-lat="31.5016946"
                          data-lng="34.4668445"
                        >
                          <span class="count">6</span>
                          <div class="map-list-info">
                            <h6>لجنة حي منطقة الدرج</h6>
                            <div class="d-flex align-items-center gap-2">
                              <span class="phone-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12.865"
                                  height="11.875"
                                  viewBox="0 0 12.865 11.875"
                                >
                                  <path
                                    id="icons8_telephone"
                                    d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                    transform="translate(-1 -2)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <p>0599486227</p>
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          class="list list-clickable"
                          data-lat="31.5016946"
                          data-lng="34.4668445"
                        >
                          <span class="count">6</span>
                          <div class="map-list-info">
                            <h6>لجنة حي منطقة الدرج</h6>
                            <div class="d-flex align-items-center gap-2">
                              <span class="phone-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12.865"
                                  height="11.875"
                                  viewBox="0 0 12.865 11.875"
                                >
                                  <path
                                    id="icons8_telephone"
                                    d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                    transform="translate(-1 -2)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <p>0599486227</p>
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          class="list list-clickable"
                          data-lat="31.5016946"
                          data-lng="34.4668445"
                        >
                          <span class="count">6</span>
                          <div class="map-list-info">
                            <h6>لجنة حي منطقة الدرج</h6>
                            <div class="d-flex align-items-center gap-2">
                              <span class="phone-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12.865"
                                  height="11.875"
                                  viewBox="0 0 12.865 11.875"
                                >
                                  <path
                                    id="icons8_telephone"
                                    d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                    transform="translate(-1 -2)"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <p>0599486227</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="position-relative h-100 mt-lg-0 mt-3">
                      <div
                        id="map"
                        style="position: relative; overflow: hidden"
                      >
                        <div
                          style="
                            height: 100%;
                            width: 100%;
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            background-color: rgb(229, 227, 223);
                          "
                        >
                          <div
                            class="gm-style"
                            style="
                              position: absolute;
                              z-index: 0;
                              left: 0px;
                              top: 0px;
                              height: 100%;
                              width: 100%;
                              padding: 0px;
                              border-width: 0px;
                              margin: 0px;
                            "
                          >
                            <div>
                              <button
                                draggable="false"
                                aria-label="Keyboard shortcuts"
                                title="Keyboard shortcuts"
                                type="button"
                                style="
                                  background: none transparent;
                                  display: block;
                                  border: none;
                                  margin: 0px;
                                  padding: 0px;
                                  text-transform: none;
                                  appearance: none;
                                  position: absolute;
                                  cursor: pointer;
                                  user-select: none;
                                  z-index: 1000002;
                                  outline-offset: 3px;
                                  right: 0px;
                                  bottom: 0px;
                                  transform: translateX(100%);
                                "
                              ></button>
                            </div>
                            <div
                              tabindex="0"
                              aria-label="Map"
                              aria-roledescription="map"
                              role="region"
                              style="
                                position: absolute;
                                z-index: 0;
                                left: 0px;
                                top: 0px;
                                height: 100%;
                                width: 100%;
                                padding: 0px;
                                border-width: 0px;
                                margin: 0px;
                                cursor: url('https://maps.gstatic.com/mapfiles/openhand_8_8.cur'),
                                  default;
                                touch-action: none;
                              "
                              aria-describedby="803BC29E-F32B-4BF2-9A3F-BAA15E5F7452"
                            >
                              <div
                                style="
                                  z-index: 1;
                                  position: absolute;
                                  left: 50%;
                                  top: 50%;
                                  width: 100%;
                                  will-change: transform;
                                  transform: translate(0px, 0px);
                                "
                              >
                                <div
                                  style="
                                    position: absolute;
                                    left: 0px;
                                    top: 0px;
                                    z-index: 100;
                                    width: 100%;
                                  "
                                >
                                  <div
                                    style="
                                      position: absolute;
                                      left: 0px;
                                      top: 0px;
                                      z-index: 0;
                                    "
                                  >
                                    <div
                                      style="
                                        position: absolute;
                                        z-index: 984;
                                        transform: matrix(1, 0, 0, 1, -43, -69);
                                      "
                                    >
                                      <div
                                        style="
                                          position: absolute;
                                          left: 0px;
                                          top: 0px;
                                          width: 256px;
                                          height: 256px;
                                        "
                                      >
                                        <div
                                          style="width: 256px; height: 256px"
                                        ></div>
                                      </div>
                                      <div
                                        style="
                                          position: absolute;
                                          left: -256px;
                                          top: 0px;
                                          width: 256px;
                                          height: 256px;
                                        "
                                      >
                                        <div
                                          style="width: 256px; height: 256px"
                                        ></div>
                                      </div>
                                      <div
                                        style="
                                          position: absolute;
                                          left: -256px;
                                          top: -256px;
                                          width: 256px;
                                          height: 256px;
                                        "
                                      >
                                        <div
                                          style="width: 256px; height: 256px"
                                        ></div>
                                      </div>
                                      <div
                                        style="
                                          position: absolute;
                                          left: 0px;
                                          top: -256px;
                                          width: 256px;
                                          height: 256px;
                                        "
                                      >
                                        <div
                                          style="width: 256px; height: 256px"
                                        ></div>
                                      </div>
                                      <div
                                        style="
                                          position: absolute;
                                          left: 256px;
                                          top: -256px;
                                          width: 256px;
                                          height: 256px;
                                        "
                                      >
                                        <div
                                          style="width: 256px; height: 256px"
                                        ></div>
                                      </div>
                                      <div
                                        style="
                                          position: absolute;
                                          left: 256px;
                                          top: 0px;
                                          width: 256px;
                                          height: 256px;
                                        "
                                      >
                                        <div
                                          style="width: 256px; height: 256px"
                                        ></div>
                                      </div>
                                      <div
                                        style="
                                          position: absolute;
                                          left: 256px;
                                          top: 256px;
                                          width: 256px;
                                          height: 256px;
                                        "
                                      >
                                        <div
                                          style="width: 256px; height: 256px"
                                        ></div>
                                      </div>
                                      <div
                                        style="
                                          position: absolute;
                                          left: 0px;
                                          top: 256px;
                                          width: 256px;
                                          height: 256px;
                                        "
                                      >
                                        <div
                                          style="width: 256px; height: 256px"
                                        ></div>
                                      </div>
                                      <div
                                        style="
                                          position: absolute;
                                          left: -256px;
                                          top: 256px;
                                          width: 256px;
                                          height: 256px;
                                        "
                                      >
                                        <div
                                          style="width: 256px; height: 256px"
                                        ></div>
                                      </div>
                                      <div
                                        style="
                                          position: absolute;
                                          left: -512px;
                                          top: 256px;
                                          width: 256px;
                                          height: 256px;
                                        "
                                      >
                                        <div
                                          style="width: 256px; height: 256px"
                                        ></div>
                                      </div>
                                      <div
                                        style="
                                          position: absolute;
                                          left: -512px;
                                          top: 0px;
                                          width: 256px;
                                          height: 256px;
                                        "
                                      >
                                        <div
                                          style="width: 256px; height: 256px"
                                        ></div>
                                      </div>
                                      <div
                                        style="
                                          position: absolute;
                                          left: -512px;
                                          top: -256px;
                                          width: 256px;
                                          height: 256px;
                                        "
                                      >
                                        <div
                                          style="width: 256px; height: 256px"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  style="
                                    position: absolute;
                                    left: 0px;
                                    top: 0px;
                                    z-index: 101;
                                    width: 100%;
                                  "
                                ></div>
                                <div
                                  style="
                                    position: absolute;
                                    left: 0px;
                                    top: 0px;
                                    z-index: 102;
                                    width: 100%;
                                  "
                                ></div>
                                <div
                                  style="
                                    position: absolute;
                                    left: 0px;
                                    top: 0px;
                                    z-index: 103;
                                    width: 100%;
                                  "
                                >
                                  <div
                                    style="
                                      width: 26px;
                                      height: 37px;
                                      overflow: hidden;
                                      position: absolute;
                                      left: -42px;
                                      top: -321px;
                                      z-index: -284;
                                    "
                                  >
                                    <img
                                      alt=""
                                      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi3_hdpi.png"
                                      draggable="false"
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: 0px;
                                        width: 26px;
                                        height: 37px;
                                        user-select: none;
                                        border: 0px;
                                        padding: 0px;
                                        margin: 0px;
                                        max-width: none;
                                        opacity: 1;
                                      "
                                    />
                                  </div>
                                  <div
                                    style="
                                      width: 26px;
                                      height: 37px;
                                      overflow: hidden;
                                      position: absolute;
                                      left: 71px;
                                      top: 0px;
                                      z-index: 37;
                                    "
                                  >
                                    <img
                                      alt=""
                                      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi3_hdpi.png"
                                      draggable="false"
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: 0px;
                                        width: 26px;
                                        height: 37px;
                                        user-select: none;
                                        border: 0px;
                                        padding: 0px;
                                        margin: 0px;
                                        max-width: none;
                                        opacity: 1;
                                      "
                                    />
                                  </div>
                                  <div
                                    style="
                                      width: 26px;
                                      height: 37px;
                                      overflow: hidden;
                                      position: absolute;
                                      left: -1327px;
                                      top: -1640px;
                                      z-index: -1603;
                                    "
                                  >
                                    <img
                                      alt=""
                                      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi3_hdpi.png"
                                      draggable="false"
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: 0px;
                                        width: 26px;
                                        height: 37px;
                                        user-select: none;
                                        border: 0px;
                                        padding: 0px;
                                        margin: 0px;
                                        max-width: none;
                                        opacity: 1;
                                      "
                                    />
                                  </div>
                                  <div
                                    style="
                                      width: 26px;
                                      height: 37px;
                                      overflow: hidden;
                                      position: absolute;
                                      left: 118px;
                                      top: -1640px;
                                      z-index: -1603;
                                    "
                                  >
                                    <img
                                      alt=""
                                      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi3_hdpi.png"
                                      draggable="false"
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: 0px;
                                        width: 26px;
                                        height: 37px;
                                        user-select: none;
                                        border: 0px;
                                        padding: 0px;
                                        margin: 0px;
                                        max-width: none;
                                        opacity: 1;
                                      "
                                    />
                                  </div>
                                  <div
                                    style="
                                      width: 26px;
                                      height: 37px;
                                      overflow: hidden;
                                      position: absolute;
                                      left: 71px;
                                      top: -1094px;
                                      z-index: -1057;
                                    "
                                  >
                                    <img
                                      alt=""
                                      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi3_hdpi.png"
                                      draggable="false"
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: 0px;
                                        width: 26px;
                                        height: 37px;
                                        user-select: none;
                                        border: 0px;
                                        padding: 0px;
                                        margin: 0px;
                                        max-width: none;
                                        opacity: 1;
                                      "
                                    />
                                  </div>
                                  <div
                                    style="
                                      width: 26px;
                                      height: 37px;
                                      overflow: hidden;
                                      position: absolute;
                                      left: 71px;
                                      top: 0px;
                                      z-index: 37;
                                    "
                                  >
                                    <img
                                      alt=""
                                      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi3_hdpi.png"
                                      draggable="false"
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: 0px;
                                        width: 26px;
                                        height: 37px;
                                        user-select: none;
                                        border: 0px;
                                        padding: 0px;
                                        margin: 0px;
                                        max-width: none;
                                        opacity: 1;
                                      "
                                    />
                                  </div>
                                  <div
                                    style="
                                      width: 26px;
                                      height: 37px;
                                      overflow: hidden;
                                      position: absolute;
                                      left: 71px;
                                      top: 0px;
                                      z-index: 37;
                                    "
                                  >
                                    <img
                                      alt=""
                                      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi3_hdpi.png"
                                      draggable="false"
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: 0px;
                                        width: 26px;
                                        height: 37px;
                                        user-select: none;
                                        border: 0px;
                                        padding: 0px;
                                        margin: 0px;
                                        max-width: none;
                                        opacity: 1;
                                      "
                                    />
                                  </div>
                                  <div
                                    style="
                                      width: 26px;
                                      height: 37px;
                                      overflow: hidden;
                                      position: absolute;
                                      left: 71px;
                                      top: 0px;
                                      z-index: 37;
                                    "
                                  >
                                    <img
                                      alt=""
                                      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi3_hdpi.png"
                                      draggable="false"
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: 0px;
                                        width: 26px;
                                        height: 37px;
                                        user-select: none;
                                        border: 0px;
                                        padding: 0px;
                                        margin: 0px;
                                        max-width: none;
                                        opacity: 1;
                                      "
                                    />
                                  </div>
                                  <div
                                    style="
                                      width: 26px;
                                      height: 37px;
                                      overflow: hidden;
                                      position: absolute;
                                      left: 71px;
                                      top: 0px;
                                      z-index: 37;
                                    "
                                  >
                                    <img
                                      alt=""
                                      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi3_hdpi.png"
                                      draggable="false"
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: 0px;
                                        width: 26px;
                                        height: 37px;
                                        user-select: none;
                                        border: 0px;
                                        padding: 0px;
                                        margin: 0px;
                                        max-width: none;
                                        opacity: 1;
                                      "
                                    />
                                  </div>
                                  <div
                                    style="
                                      position: absolute;
                                      left: 0px;
                                      top: 0px;
                                      z-index: -1;
                                    "
                                  >
                                    <div
                                      style="
                                        position: absolute;
                                        z-index: 984;
                                        transform: matrix(1, 0, 0, 1, -43, -69);
                                      "
                                    >
                                      <div
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          overflow: hidden;
                                          position: absolute;
                                          left: 0px;
                                          top: 0px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          overflow: hidden;
                                          position: absolute;
                                          left: -256px;
                                          top: 0px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          overflow: hidden;
                                          position: absolute;
                                          left: -256px;
                                          top: -256px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          overflow: hidden;
                                          position: absolute;
                                          left: 0px;
                                          top: -256px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          overflow: hidden;
                                          position: absolute;
                                          left: 256px;
                                          top: -256px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          overflow: hidden;
                                          position: absolute;
                                          left: 256px;
                                          top: 0px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          overflow: hidden;
                                          position: absolute;
                                          left: 256px;
                                          top: 256px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          overflow: hidden;
                                          position: absolute;
                                          left: 0px;
                                          top: 256px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          overflow: hidden;
                                          position: absolute;
                                          left: -256px;
                                          top: 256px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          overflow: hidden;
                                          position: absolute;
                                          left: -512px;
                                          top: 256px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          overflow: hidden;
                                          position: absolute;
                                          left: -512px;
                                          top: 0px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          overflow: hidden;
                                          position: absolute;
                                          left: -512px;
                                          top: -256px;
                                        "
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  style="
                                    position: absolute;
                                    left: 0px;
                                    top: 0px;
                                    z-index: 0;
                                  "
                                >
                                  <div
                                    style="
                                      position: absolute;
                                      z-index: 984;
                                      transform: matrix(1, 0, 0, 1, -43, -69);
                                    "
                                  >
                                    <div
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: 0px;
                                        width: 256px;
                                        height: 256px;
                                        transition: opacity 200ms linear 0s;
                                      "
                                    >
                                      <img
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i39042!3i26720!4i256!2m3!1e0!2sm!3i639377553!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1379903&amp;key=AIzaSyCnSjxcc93CfspNFGfT7xX1KCVvtAvDneA&amp;token=13616"
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      />
                                    </div>
                                    <div
                                      style="
                                        position: absolute;
                                        left: -256px;
                                        top: -256px;
                                        width: 256px;
                                        height: 256px;
                                        transition: opacity 200ms linear 0s;
                                      "
                                    >
                                      <img
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i39041!3i26719!4i256!2m3!1e0!2sm!3i639377553!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1379903&amp;key=AIzaSyCnSjxcc93CfspNFGfT7xX1KCVvtAvDneA&amp;token=97213"
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      />
                                    </div>
                                    <div
                                      style="
                                        position: absolute;
                                        left: -256px;
                                        top: 0px;
                                        width: 256px;
                                        height: 256px;
                                        transition: opacity 200ms linear 0s;
                                      "
                                    >
                                      <img
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i39041!3i26720!4i256!2m3!1e0!2sm!3i639377553!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1379903&amp;key=AIzaSyCnSjxcc93CfspNFGfT7xX1KCVvtAvDneA&amp;token=90710"
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      />
                                    </div>
                                    <div
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: -256px;
                                        width: 256px;
                                        height: 256px;
                                        transition: opacity 200ms linear 0s;
                                      "
                                    >
                                      <img
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i39042!3i26719!4i256!2m3!1e0!2sm!3i639377553!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1379903&amp;key=AIzaSyCnSjxcc93CfspNFGfT7xX1KCVvtAvDneA&amp;token=20119"
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      />
                                    </div>
                                    <div
                                      style="
                                        position: absolute;
                                        left: 256px;
                                        top: 0px;
                                        width: 256px;
                                        height: 256px;
                                        transition: opacity 200ms linear 0s;
                                      "
                                    >
                                      <img
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i39043!3i26720!4i256!2m3!1e0!2sm!3i639377553!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1379903&amp;key=AIzaSyCnSjxcc93CfspNFGfT7xX1KCVvtAvDneA&amp;token=67593"
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      />
                                    </div>
                                    <div
                                      style="
                                        position: absolute;
                                        left: -256px;
                                        top: 256px;
                                        width: 256px;
                                        height: 256px;
                                        transition: opacity 200ms linear 0s;
                                      "
                                    >
                                      <img
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i39041!3i26721!4i256!2m3!1e0!2sm!3i639377553!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1379903&amp;key=AIzaSyCnSjxcc93CfspNFGfT7xX1KCVvtAvDneA&amp;token=56643"
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      />
                                    </div>
                                    <div
                                      style="
                                        position: absolute;
                                        left: -512px;
                                        top: 256px;
                                        width: 256px;
                                        height: 256px;
                                        transition: opacity 200ms linear 0s;
                                      "
                                    >
                                      <img
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i39040!3i26721!4i256!2m3!1e0!2sm!3i639377553!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1379903&amp;key=AIzaSyCnSjxcc93CfspNFGfT7xX1KCVvtAvDneA&amp;token=2666"
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      />
                                    </div>
                                    <div
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: 256px;
                                        width: 256px;
                                        height: 256px;
                                        transition: opacity 200ms linear 0s;
                                      "
                                    >
                                      <img
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i39042!3i26721!4i256!2m3!1e0!2sm!3i639377553!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1379903&amp;key=AIzaSyCnSjxcc93CfspNFGfT7xX1KCVvtAvDneA&amp;token=110620"
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      />
                                    </div>
                                    <div
                                      style="
                                        position: absolute;
                                        left: 256px;
                                        top: -256px;
                                        width: 256px;
                                        height: 256px;
                                        transition: opacity 200ms linear 0s;
                                      "
                                    >
                                      <img
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i39043!3i26719!4i256!2m3!1e0!2sm!3i639377553!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1379903&amp;key=AIzaSyCnSjxcc93CfspNFGfT7xX1KCVvtAvDneA&amp;token=74096"
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      />
                                    </div>
                                    <div
                                      style="
                                        position: absolute;
                                        left: -512px;
                                        top: -256px;
                                        width: 256px;
                                        height: 256px;
                                        transition: opacity 200ms linear 0s;
                                      "
                                    >
                                      <img
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i39040!3i26719!4i256!2m3!1e0!2sm!3i639377553!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1379903&amp;key=AIzaSyCnSjxcc93CfspNFGfT7xX1KCVvtAvDneA&amp;token=43236"
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      />
                                    </div>
                                    <div
                                      style="
                                        position: absolute;
                                        left: 256px;
                                        top: 256px;
                                        width: 256px;
                                        height: 256px;
                                        transition: opacity 200ms linear 0s;
                                      "
                                    >
                                      <img
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i39043!3i26721!4i256!2m3!1e0!2sm!3i639377553!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1379903&amp;key=AIzaSyCnSjxcc93CfspNFGfT7xX1KCVvtAvDneA&amp;token=33526"
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      />
                                    </div>
                                    <div
                                      style="
                                        position: absolute;
                                        left: -512px;
                                        top: 0px;
                                        width: 256px;
                                        height: 256px;
                                        transition: opacity 200ms linear 0s;
                                      "
                                    >
                                      <img
                                        draggable="false"
                                        alt=""
                                        role="presentation"
                                        src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i39040!3i26720!4i256!2m3!1e0!2sm!3i639377553!2m3!1e2!6m1!3e5!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!5m1!5f2!23i1379903&amp;key=AIzaSyCnSjxcc93CfspNFGfT7xX1KCVvtAvDneA&amp;token=36733"
                                        style="
                                          width: 256px;
                                          height: 256px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                style="
                                  z-index: 3;
                                  position: absolute;
                                  height: 100%;
                                  width: 100%;
                                  padding: 0px;
                                  border-width: 0px;
                                  margin: 0px;
                                  left: 0px;
                                  top: 0px;
                                  touch-action: pan-x pan-y;
                                "
                              >
                                <div
                                  style="
                                    z-index: 4;
                                    position: absolute;
                                    left: 50%;
                                    top: 50%;
                                    width: 100%;
                                    will-change: transform;
                                    transform: translate(0px, 0px);
                                  "
                                >
                                  <div
                                    style="
                                      position: absolute;
                                      left: 0px;
                                      top: 0px;
                                      z-index: 104;
                                      width: 100%;
                                    "
                                  ></div>
                                  <div
                                    style="
                                      position: absolute;
                                      left: 0px;
                                      top: 0px;
                                      z-index: 105;
                                      width: 100%;
                                    "
                                  ></div>
                                  <div
                                    style="
                                      position: absolute;
                                      left: 0px;
                                      top: 0px;
                                      z-index: 106;
                                      width: 100%;
                                    "
                                  >
                                    <span
                                      id="8275C115-FB20-43A9-ACB0-18E6B2181B49"
                                      style="display: none"
                                      >To navigate, press the arrow keys.</span
                                    >
                                    <div
                                      role="button"
                                      tabindex="-1"
                                      style="
                                        width: 26px;
                                        height: 37px;
                                        overflow: hidden;
                                        position: absolute;
                                        left: -42px;
                                        top: -321px;
                                        z-index: -284;
                                      "
                                    >
                                      <img
                                        alt=""
                                        src="https://maps.gstatic.com/mapfiles/transparent.png"
                                        draggable="false"
                                        usemap="#gmimap0"
                                        style="
                                          width: 26px;
                                          height: 37px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      /><map name="gmimap0" id="gmimap0"
                                        ><area
                                          log="miw"
                                          coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5"
                                          shape="poly"
                                          tabindex="-1"
                                          title=""
                                          style="
                                            display: inline;
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            cursor: pointer;
                                            touch-action: none;
                                          "
                                      /></map>
                                    </div>
                                    <div
                                      role="button"
                                      tabindex="-1"
                                      style="
                                        width: 26px;
                                        height: 37px;
                                        overflow: hidden;
                                        position: absolute;
                                        left: 71px;
                                        top: 0px;
                                        z-index: 37;
                                      "
                                      aria-describedby="8275C115-FB20-43A9-ACB0-18E6B2181B49"
                                    >
                                      <img
                                        alt=""
                                        src="https://maps.gstatic.com/mapfiles/transparent.png"
                                        draggable="false"
                                        usemap="#gmimap1"
                                        style="
                                          width: 26px;
                                          height: 37px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      /><map name="gmimap1" id="gmimap1"
                                        ><area
                                          log="miw"
                                          coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5"
                                          shape="poly"
                                          tabindex="-1"
                                          title=""
                                          style="
                                            display: inline;
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            cursor: pointer;
                                            touch-action: none;
                                          "
                                      /></map>
                                    </div>
                                    <div
                                      role="button"
                                      tabindex="-1"
                                      style="
                                        width: 26px;
                                        height: 37px;
                                        overflow: hidden;
                                        position: absolute;
                                        left: -1327px;
                                        top: -1640px;
                                        z-index: -1603;
                                      "
                                    >
                                      <img
                                        alt=""
                                        src="https://maps.gstatic.com/mapfiles/transparent.png"
                                        draggable="false"
                                        usemap="#gmimap2"
                                        style="
                                          width: 26px;
                                          height: 37px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      /><map name="gmimap2" id="gmimap2"
                                        ><area
                                          log="miw"
                                          coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5"
                                          shape="poly"
                                          tabindex="-1"
                                          title=""
                                          style="
                                            display: inline;
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            cursor: pointer;
                                            touch-action: none;
                                          "
                                      /></map>
                                    </div>
                                    <div
                                      role="button"
                                      tabindex="-1"
                                      style="
                                        width: 26px;
                                        height: 37px;
                                        overflow: hidden;
                                        position: absolute;
                                        left: 118px;
                                        top: -1640px;
                                        z-index: -1603;
                                      "
                                    >
                                      <img
                                        alt=""
                                        src="https://maps.gstatic.com/mapfiles/transparent.png"
                                        draggable="false"
                                        usemap="#gmimap3"
                                        style="
                                          width: 26px;
                                          height: 37px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      /><map name="gmimap3" id="gmimap3"
                                        ><area
                                          log="miw"
                                          coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5"
                                          shape="poly"
                                          tabindex="-1"
                                          title=""
                                          style="
                                            display: inline;
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            cursor: pointer;
                                            touch-action: none;
                                          "
                                      /></map>
                                    </div>
                                    <div
                                      role="button"
                                      tabindex="-1"
                                      style="
                                        width: 26px;
                                        height: 37px;
                                        overflow: hidden;
                                        position: absolute;
                                        left: 71px;
                                        top: -1094px;
                                        z-index: -1057;
                                      "
                                    >
                                      <img
                                        alt=""
                                        src="https://maps.gstatic.com/mapfiles/transparent.png"
                                        draggable="false"
                                        usemap="#gmimap4"
                                        style="
                                          width: 26px;
                                          height: 37px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      /><map name="gmimap4" id="gmimap4"
                                        ><area
                                          log="miw"
                                          coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5"
                                          shape="poly"
                                          tabindex="-1"
                                          title=""
                                          style="
                                            display: inline;
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            cursor: pointer;
                                            touch-action: none;
                                          "
                                      /></map>
                                    </div>
                                    <div
                                      role="button"
                                      tabindex="0"
                                      style="
                                        width: 26px;
                                        height: 37px;
                                        overflow: hidden;
                                        position: absolute;
                                        left: 71px;
                                        top: 0px;
                                        z-index: 37;
                                      "
                                      aria-describedby="8275C115-FB20-43A9-ACB0-18E6B2181B49"
                                    >
                                      <img
                                        alt=""
                                        src="https://maps.gstatic.com/mapfiles/transparent.png"
                                        draggable="false"
                                        usemap="#gmimap5"
                                        style="
                                          width: 26px;
                                          height: 37px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      /><map name="gmimap5" id="gmimap5"
                                        ><area
                                          log="miw"
                                          coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5"
                                          shape="poly"
                                          tabindex="-1"
                                          title=""
                                          style="
                                            display: inline;
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            cursor: pointer;
                                            touch-action: none;
                                          "
                                      /></map>
                                    </div>
                                    <div
                                      role="button"
                                      tabindex="-1"
                                      style="
                                        width: 26px;
                                        height: 37px;
                                        overflow: hidden;
                                        position: absolute;
                                        left: 71px;
                                        top: 0px;
                                        z-index: 37;
                                      "
                                      aria-describedby="8275C115-FB20-43A9-ACB0-18E6B2181B49"
                                    >
                                      <img
                                        alt=""
                                        src="https://maps.gstatic.com/mapfiles/transparent.png"
                                        draggable="false"
                                        usemap="#gmimap6"
                                        style="
                                          width: 26px;
                                          height: 37px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      /><map name="gmimap6" id="gmimap6"
                                        ><area
                                          log="miw"
                                          coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5"
                                          shape="poly"
                                          tabindex="-1"
                                          title=""
                                          style="
                                            display: inline;
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            cursor: pointer;
                                            touch-action: none;
                                          "
                                      /></map>
                                    </div>
                                    <div
                                      role="button"
                                      tabindex="-1"
                                      style="
                                        width: 26px;
                                        height: 37px;
                                        overflow: hidden;
                                        position: absolute;
                                        left: 71px;
                                        top: 0px;
                                        z-index: 37;
                                      "
                                      aria-describedby="8275C115-FB20-43A9-ACB0-18E6B2181B49"
                                    >
                                      <img
                                        alt=""
                                        src="https://maps.gstatic.com/mapfiles/transparent.png"
                                        draggable="false"
                                        usemap="#gmimap7"
                                        style="
                                          width: 26px;
                                          height: 37px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      /><map name="gmimap7" id="gmimap7"
                                        ><area
                                          log="miw"
                                          coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5"
                                          shape="poly"
                                          tabindex="-1"
                                          title=""
                                          style="
                                            display: inline;
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            cursor: pointer;
                                            touch-action: none;
                                          "
                                      /></map>
                                    </div>
                                    <div
                                      role="button"
                                      tabindex="-1"
                                      style="
                                        width: 26px;
                                        height: 37px;
                                        overflow: hidden;
                                        position: absolute;
                                        left: 71px;
                                        top: 0px;
                                        z-index: 37;
                                      "
                                      aria-describedby="8275C115-FB20-43A9-ACB0-18E6B2181B49"
                                    >
                                      <img
                                        alt=""
                                        src="https://maps.gstatic.com/mapfiles/transparent.png"
                                        draggable="false"
                                        usemap="#gmimap8"
                                        style="
                                          width: 26px;
                                          height: 37px;
                                          user-select: none;
                                          border: 0px;
                                          padding: 0px;
                                          margin: 0px;
                                          max-width: none;
                                        "
                                      /><map name="gmimap8" id="gmimap8"
                                        ><area
                                          log="miw"
                                          coords="13,0,4,3.5,0,12,2.75,21,13,37,23.5,21,26,12,22,3.5"
                                          shape="poly"
                                          tabindex="-1"
                                          title=""
                                          style="
                                            display: inline;
                                            position: absolute;
                                            left: 0px;
                                            top: 0px;
                                            cursor: pointer;
                                            touch-action: none;
                                          "
                                      /></map>
                                    </div>
                                  </div>
                                  <div
                                    style="
                                      position: absolute;
                                      left: 0px;
                                      top: 0px;
                                      z-index: 107;
                                      width: 100%;
                                    "
                                  ></div>
                                </div>
                              </div>
                              <div
                                class="gm-style-moc"
                                style="
                                  z-index: 4;
                                  position: absolute;
                                  height: 100%;
                                  width: 100%;
                                  padding: 0px;
                                  border-width: 0px;
                                  margin: 0px;
                                  left: 0px;
                                  top: 0px;
                                  opacity: 0;
                                  transition-duration: 0.2s;
                                "
                              >
                                <p class="gm-style-mot"></p>
                              </div>
                              <div
                                class="LGLeeN-keyboard-shortcuts-view"
                                id="803BC29E-F32B-4BF2-9A3F-BAA15E5F7452"
                                style="display: none"
                              >
                                <table>
                                  <tbody>
                                    <tr>
                                      <td style="text-align: right">
                                        <kbd
                                          class="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                          aria-label="Left arrow"
                                          >←</kbd
                                        >
                                      </td>
                                      <td aria-label="Move left.">Move left</td>
                                    </tr>
                                    <tr>
                                      <td style="text-align: right">
                                        <kbd
                                          class="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                          aria-label="Right arrow"
                                          >→</kbd
                                        >
                                      </td>
                                      <td aria-label="Move right.">
                                        Move right
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="text-align: right">
                                        <kbd
                                          class="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                          aria-label="Up arrow"
                                          >↑</kbd
                                        >
                                      </td>
                                      <td aria-label="Move up.">Move up</td>
                                    </tr>
                                    <tr>
                                      <td style="text-align: right">
                                        <kbd
                                          class="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                          aria-label="Down arrow"
                                          >↓</kbd
                                        >
                                      </td>
                                      <td aria-label="Move down.">Move down</td>
                                    </tr>
                                    <tr>
                                      <td style="text-align: right">
                                        <kbd
                                          class="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                          >+</kbd
                                        >
                                      </td>
                                      <td aria-label="Zoom in.">Zoom in</td>
                                    </tr>
                                    <tr>
                                      <td style="text-align: right">
                                        <kbd
                                          class="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                          >-</kbd
                                        >
                                      </td>
                                      <td aria-label="Zoom out.">Zoom out</td>
                                    </tr>
                                    <tr>
                                      <td style="text-align: right">
                                        <kbd
                                          class="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                          >Home</kbd
                                        >
                                      </td>
                                      <td aria-label="Jump left by 75%.">
                                        Jump left by 75%
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="text-align: right">
                                        <kbd
                                          class="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                          >End</kbd
                                        >
                                      </td>
                                      <td aria-label="Jump right by 75%.">
                                        Jump right by 75%
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="text-align: right">
                                        <kbd
                                          class="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                          >Page Up</kbd
                                        >
                                      </td>
                                      <td aria-label="Jump up by 75%.">
                                        Jump up by 75%
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="text-align: right">
                                        <kbd
                                          class="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                          >Page Down</kbd
                                        >
                                      </td>
                                      <td aria-label="Jump down by 75%.">
                                        Jump down by 75%
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <iframe
                              aria-hidden="true"
                              frameborder="0"
                              tabindex="-1"
                              style="
                                z-index: -1;
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                top: 0px;
                                left: 0px;
                                border: none;
                              "
                            ></iframe>
                            <div
                              style="
                                pointer-events: none;
                                width: 100%;
                                height: 100%;
                                box-sizing: border-box;
                                position: absolute;
                                z-index: 1000002;
                                opacity: 0;
                                border: 2px solid rgb(26, 115, 232);
                              "
                            ></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div>
                              <button
                                draggable="false"
                                aria-label="Toggle fullscreen view"
                                title="Toggle fullscreen view"
                                type="button"
                                aria-pressed="false"
                                class="gm-control-active gm-fullscreen-control"
                                style="
                                  background: none rgb(255, 255, 255);
                                  border: 0px;
                                  margin: 10px;
                                  padding: 0px;
                                  text-transform: none;
                                  appearance: none;
                                  position: absolute;
                                  cursor: pointer;
                                  user-select: none;
                                  border-radius: 2px;
                                  height: 40px;
                                  width: 40px;
                                  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                                  overflow: hidden;
                                  top: 0px;
                                  right: 0px;
                                "
                              >
                                <img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                  alt=""
                                  style="height: 18px; width: 18px"
                                /><img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                  alt=""
                                  style="height: 18px; width: 18px"
                                /><img
                                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                  alt=""
                                  style="height: 18px; width: 18px"
                                />
                              </button>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div>
                              <div
                                class="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
                                draggable="false"
                                data-control-width="40"
                                data-control-height="113"
                                style="
                                  margin: 10px;
                                  user-select: none;
                                  position: absolute;
                                  bottom: 127px;
                                  right: 40px;
                                "
                              >
                                <div
                                  class="gmnoprint"
                                  data-control-width="40"
                                  data-control-height="40"
                                  style="display: none; position: absolute"
                                >
                                  <div
                                    style="
                                      background-color: rgb(255, 255, 255);
                                      box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                                      border-radius: 2px;
                                      width: 40px;
                                      height: 40px;
                                    "
                                  >
                                    <button
                                      draggable="false"
                                      aria-label="Rotate map clockwise"
                                      title="Rotate map clockwise"
                                      type="button"
                                      class="gm-control-active"
                                      style="
                                        background: none;
                                        display: none;
                                        border: 0px;
                                        margin: 0px;
                                        padding: 0px;
                                        text-transform: none;
                                        appearance: none;
                                        position: relative;
                                        cursor: pointer;
                                        user-select: none;
                                        left: 0px;
                                        top: 0px;
                                        overflow: hidden;
                                        width: 40px;
                                        height: 40px;
                                      "
                                    >
                                      <img
                                        alt=""
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                        style="width: 20px; height: 20px"
                                      /><img
                                        alt=""
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                        style="width: 20px; height: 20px"
                                      /><img
                                        alt=""
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                        style="width: 20px; height: 20px"
                                      />
                                    </button>
                                    <div
                                      style="
                                        position: relative;
                                        overflow: hidden;
                                        width: 30px;
                                        height: 1px;
                                        margin: 0px 5px;
                                        background-color: rgb(230, 230, 230);
                                        display: none;
                                      "
                                    ></div>
                                    <button
                                      draggable="false"
                                      aria-label="Rotate map counterclockwise"
                                      title="Rotate map counterclockwise"
                                      type="button"
                                      class="gm-control-active"
                                      style="
                                        background: none;
                                        display: none;
                                        border: 0px;
                                        margin: 0px;
                                        padding: 0px;
                                        text-transform: none;
                                        appearance: none;
                                        position: relative;
                                        cursor: pointer;
                                        user-select: none;
                                        left: 0px;
                                        top: 0px;
                                        overflow: hidden;
                                        width: 40px;
                                        height: 40px;
                                        transform: scaleX(-1);
                                      "
                                    >
                                      <img
                                        alt=""
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                        style="width: 20px; height: 20px"
                                      /><img
                                        alt=""
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                        style="width: 20px; height: 20px"
                                      /><img
                                        alt=""
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                                        style="width: 20px; height: 20px"
                                      />
                                    </button>
                                    <div
                                      style="
                                        position: relative;
                                        overflow: hidden;
                                        width: 30px;
                                        height: 1px;
                                        margin: 0px 5px;
                                        background-color: rgb(230, 230, 230);
                                        display: none;
                                      "
                                    ></div>
                                    <button
                                      draggable="false"
                                      aria-label="Tilt map"
                                      title="Tilt map"
                                      type="button"
                                      class="gm-tilt gm-control-active"
                                      style="
                                        background: none;
                                        display: block;
                                        border: 0px;
                                        margin: 0px;
                                        padding: 0px;
                                        text-transform: none;
                                        appearance: none;
                                        position: relative;
                                        cursor: pointer;
                                        user-select: none;
                                        top: 0px;
                                        left: 0px;
                                        overflow: hidden;
                                        width: 40px;
                                        height: 40px;
                                      "
                                    >
                                      <img
                                        alt=""
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                                        style="width: 18px"
                                      /><img
                                        alt=""
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                                        style="width: 18px"
                                      /><img
                                        alt=""
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                                        style="width: 18px"
                                      />
                                    </button>
                                  </div>
                                </div>
                                <div
                                  style="
                                    position: absolute;
                                    left: 20px;
                                    top: 0px;
                                  "
                                ></div>
                                <div
                                  class="gmnoprint"
                                  data-control-width="40"
                                  data-control-height="81"
                                  style="
                                    position: absolute;
                                    left: 0px;
                                    top: 32px;
                                  "
                                >
                                  <div
                                    draggable="false"
                                    style="
                                      user-select: none;
                                      box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                                      border-radius: 2px;
                                      cursor: pointer;
                                      background-color: rgb(255, 255, 255);
                                      width: 40px;
                                      height: 81px;
                                    "
                                  >
                                    <button
                                      draggable="false"
                                      aria-label="Zoom in"
                                      title="Zoom in"
                                      type="button"
                                      class="gm-control-active"
                                      style="
                                        background: none;
                                        display: block;
                                        border: 0px;
                                        margin: 0px;
                                        padding: 0px;
                                        text-transform: none;
                                        appearance: none;
                                        position: relative;
                                        cursor: pointer;
                                        user-select: none;
                                        overflow: hidden;
                                        width: 40px;
                                        height: 40px;
                                        top: 0px;
                                        left: 0px;
                                      "
                                    >
                                      <img
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                                        alt=""
                                        style="height: 18px; width: 18px"
                                      /><img
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                                        alt=""
                                        style="height: 18px; width: 18px"
                                      /><img
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                                        alt=""
                                        style="height: 18px; width: 18px"
                                      /><img
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23d1d1d1%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                                        alt=""
                                        style="height: 18px; width: 18px"
                                      />
                                    </button>
                                    <div
                                      style="
                                        position: relative;
                                        overflow: hidden;
                                        width: 30px;
                                        height: 1px;
                                        margin: 0px 5px;
                                        background-color: rgb(230, 230, 230);
                                        top: 0px;
                                      "
                                    ></div>
                                    <button
                                      draggable="false"
                                      aria-label="Zoom out"
                                      title="Zoom out"
                                      type="button"
                                      class="gm-control-active"
                                      style="
                                        background: none;
                                        display: block;
                                        border: 0px;
                                        margin: 0px;
                                        padding: 0px;
                                        text-transform: none;
                                        appearance: none;
                                        position: relative;
                                        cursor: pointer;
                                        user-select: none;
                                        overflow: hidden;
                                        width: 40px;
                                        height: 40px;
                                        top: 0px;
                                        left: 0px;
                                      "
                                    >
                                      <img
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                                        alt=""
                                        style="height: 18px; width: 18px"
                                      /><img
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                                        alt=""
                                        style="height: 18px; width: 18px"
                                      /><img
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                                        alt=""
                                        style="height: 18px; width: 18px"
                                      /><img
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23d1d1d1%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                                        alt=""
                                        style="height: 18px; width: 18px"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div
                                style="
                                  margin: 0px 5px;
                                  z-index: 1000000;
                                  position: absolute;
                                  left: 0px;
                                  bottom: 0px;
                                "
                              >
                                <a
                                  target="_blank"
                                  rel="noopener"
                                  title="Open this area in Google Maps (opens a new window)"
                                  aria-label="Open this area in Google Maps (opens a new window)"
                                  href="https://maps.google.com/maps?ll=31.502359,34.465039&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3"
                                  style="display: inline"
                                  ><div style="width: 66px; height: 26px">
                                    <img
                                      alt="Google"
                                      src="data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2069%2029%22%3E%3Cg%20opacity%3D%22.6%22%20fill%3D%22%23fff%22%20stroke%3D%22%23fff%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M17.4706%207.33616L18.0118%206.79504%2017.4599%206.26493C16.0963%204.95519%2014.2582%203.94522%2011.7008%203.94522c-4.613699999999999%200-8.50262%203.7551699999999997-8.50262%208.395779999999998C3.19818%2016.9817%207.0871%2020.7368%2011.7008%2020.7368%2014.1712%2020.7368%2016.0773%2019.918%2017.574%2018.3689%2019.1435%2016.796%2019.5956%2014.6326%2019.5956%2012.957%2019.5956%2012.4338%2019.5516%2011.9316%2019.4661%2011.5041L19.3455%2010.9012H10.9508V14.4954H15.7809C15.6085%2015.092%2015.3488%2015.524%2015.0318%2015.8415%2014.403%2016.4629%2013.4495%2017.1509%2011.7008%2017.1509%209.04835%2017.1509%206.96482%2015.0197%206.96482%2012.341%206.96482%209.66239%209.04835%207.53119%2011.7008%207.53119%2013.137%207.53119%2014.176%208.09189%2014.9578%208.82348L15.4876%209.31922%2016.0006%208.80619%2017.4706%207.33616z%22/%3E%3Cpath%20d%3D%22M24.8656%2020.7286C27.9546%2020.7286%2030.4692%2018.3094%2030.4692%2015.0594%2030.4692%2011.7913%2027.953%209.39011%2024.8656%209.39011%2021.7783%209.39011%2019.2621%2011.7913%2019.2621%2015.0594c0%203.25%202.514499999999998%205.6692%205.6035%205.6692zM24.8656%2012.8282C25.8796%2012.8282%2026.8422%2013.6652%2026.8422%2015.0594%2026.8422%2016.4399%2025.8769%2017.2905%2024.8656%2017.2905%2023.8557%2017.2905%2022.8891%2016.4331%2022.8891%2015.0594%2022.8891%2013.672%2023.853%2012.8282%2024.8656%2012.8282z%22/%3E%3Cpath%20d%3D%22M35.7511%2017.2905v0H35.7469C34.737%2017.2905%2033.7703%2016.4331%2033.7703%2015.0594%2033.7703%2013.672%2034.7343%2012.8282%2035.7469%2012.8282%2036.7608%2012.8282%2037.7234%2013.6652%2037.7234%2015.0594%2037.7234%2016.4439%2036.7554%2017.2962%2035.7511%2017.2905zM35.7387%2020.7286C38.8277%2020.7286%2041.3422%2018.3094%2041.3422%2015.0594%2041.3422%2011.7913%2038.826%209.39011%2035.7387%209.39011%2032.6513%209.39011%2030.1351%2011.7913%2030.1351%2015.0594%2030.1351%2018.3102%2032.6587%2020.7286%2035.7387%2020.7286z%22/%3E%3Cpath%20d%3D%22M51.953%2010.4357V9.68573H48.3999V9.80826C47.8499%209.54648%2047.1977%209.38187%2046.4808%209.38187%2043.5971%209.38187%2041.0168%2011.8998%2041.0168%2015.0758%2041.0168%2017.2027%2042.1808%2019.0237%2043.8201%2019.9895L43.7543%2020.0168%2041.8737%2020.797%2041.1808%2021.0844%2041.4684%2021.7772C42.0912%2023.2776%2043.746%2025.1469%2046.5219%2025.1469%2047.9324%2025.1469%2049.3089%2024.7324%2050.3359%2023.7376%2051.3691%2022.7367%2051.953%2021.2411%2051.953%2019.2723v-8.8366zm-7.2194%209.9844L44.7334%2020.4196C45.2886%2020.6201%2045.878%2020.7286%2046.4808%2020.7286%2047.1616%2020.7286%2047.7866%2020.5819%2048.3218%2020.3395%2048.2342%2020.7286%2048.0801%2021.0105%2047.8966%2021.2077%2047.6154%2021.5099%2047.1764%2021.7088%2046.5219%2021.7088%2045.61%2021.7088%2045.0018%2021.0612%2044.7336%2020.4201zM46.6697%2012.8282C47.6419%2012.8282%2048.5477%2013.6765%2048.5477%2015.084%2048.5477%2016.4636%2047.6521%2017.2987%2046.6697%2017.2987%2045.6269%2017.2987%2044.6767%2016.4249%2044.6767%2015.084%2044.6767%2013.7086%2045.6362%2012.8282%2046.6697%2012.8282zM55.7387%205.22083v-.75H52.0788V20.4412H55.7387V5.220829999999999z%22/%3E%3Cpath%20d%3D%22M63.9128%2016.0614L63.2945%2015.6492%2062.8766%2016.2637C62.4204%2016.9346%2061.8664%2017.3069%2061.0741%2017.3069%2060.6435%2017.3069%2060.3146%2017.2088%2060.0544%2017.0447%2059.9844%2017.0006%2059.9161%2016.9496%2059.8498%2016.8911L65.5497%2014.5286%2066.2322%2014.2456%2065.9596%2013.5589%2065.7406%2013.0075C65.2878%2011.8%2063.8507%209.39832%2060.8278%209.39832%2057.8445%209.39832%2055.5034%2011.7619%2055.5034%2015.0676%2055.5034%2018.2151%2057.8256%2020.7369%2061.0659%2020.7369%2063.6702%2020.7369%2065.177%2019.1378%2065.7942%2018.2213L66.2152%2017.5963%2065.5882%2017.1783%2063.9128%2016.0614zM61.3461%2012.8511L59.4108%2013.6526C59.7903%2013.0783%2060.4215%2012.7954%2060.9017%2012.7954%2061.067%2012.7954%2061.2153%2012.8161%2061.3461%2012.8511z%22/%3E%3C/g%3E%3Cpath%20d%3D%22M11.7008%2019.9868C7.48776%2019.9868%203.94818%2016.554%203.94818%2012.341%203.94818%208.12803%207.48776%204.69522%2011.7008%204.69522%2014.0331%204.69522%2015.692%205.60681%2016.9403%206.80583L15.4703%208.27586C14.5751%207.43819%2013.3597%206.78119%2011.7008%206.78119%208.62108%206.78119%206.21482%209.26135%206.21482%2012.341%206.21482%2015.4207%208.62108%2017.9009%2011.7008%2017.9009%2013.6964%2017.9009%2014.8297%2017.0961%2015.5606%2016.3734%2016.1601%2015.7738%2016.5461%2014.9197%2016.6939%2013.7454h-4.9931V11.6512h7.0298C18.8045%2012.0207%2018.8456%2012.4724%2018.8456%2012.957%2018.8456%2014.5255%2018.4186%2016.4637%2017.0389%2017.8434%2015.692%2019.2395%2013.9838%2019.9868%2011.7008%2019.9868z%22%20fill%3D%22%234285F4%22/%3E%3Cpath%20d%3D%22M29.7192%2015.0594C29.7192%2017.8927%2027.5429%2019.9786%2024.8656%2019.9786%2022.1884%2019.9786%2020.0121%2017.8927%2020.0121%2015.0594%2020.0121%2012.2096%2022.1884%2010.1401%2024.8656%2010.1401%2027.5429%2010.1401%2029.7192%2012.2096%2029.7192%2015.0594zM27.5922%2015.0594C27.5922%2013.2855%2026.3274%2012.0782%2024.8656%2012.0782S22.1391%2013.2937%2022.1391%2015.0594C22.1391%2016.8086%2023.4038%2018.0405%2024.8656%2018.0405S27.5922%2016.8168%2027.5922%2015.0594z%22%20fill%3D%22%23E94235%22/%3E%3Cpath%20d%3D%22M40.5922%2015.0594C40.5922%2017.8927%2038.4159%2019.9786%2035.7387%2019.9786%2033.0696%2019.9786%2030.8851%2017.8927%2030.8851%2015.0594%2030.8851%2012.2096%2033.0614%2010.1401%2035.7387%2010.1401%2038.4159%2010.1401%2040.5922%2012.2096%2040.5922%2015.0594zM38.4734%2015.0594C38.4734%2013.2855%2037.2087%2012.0782%2035.7469%2012.0782%2034.2851%2012.0782%2033.0203%2013.2937%2033.0203%2015.0594%2033.0203%2016.8086%2034.2851%2018.0405%2035.7469%2018.0405%2037.2087%2018.0487%2038.4734%2016.8168%2038.4734%2015.0594z%22%20fill%3D%22%23FABB05%22/%3E%3Cpath%20d%3D%22M51.203%2010.4357v8.8366C51.203%2022.9105%2049.0595%2024.3969%2046.5219%2024.3969%2044.132%2024.3969%2042.7031%2022.7955%2042.161%2021.4897L44.0417%2020.7095C44.3784%2021.5143%2045.1997%2022.4588%2046.5219%2022.4588%2048.1479%2022.4588%2049.1499%2021.4487%2049.1499%2019.568V18.8617H49.0759C48.5914%2019.4612%2047.6552%2019.9786%2046.4808%2019.9786%2044.0171%2019.9786%2041.7668%2017.8352%2041.7668%2015.0758%2041.7668%2012.3%2044.0253%2010.1319%2046.4808%2010.1319%2047.6552%2010.1319%2048.5914%2010.6575%2049.0759%2011.2323H49.1499V10.4357H51.203zM49.2977%2015.084C49.2977%2013.3512%2048.1397%2012.0782%2046.6697%2012.0782%2045.175%2012.0782%2043.9267%2013.3429%2043.9267%2015.084%2043.9267%2016.8004%2045.175%2018.0487%2046.6697%2018.0487%2048.1397%2018.0487%2049.2977%2016.8004%2049.2977%2015.084z%22%20fill%3D%22%234285F4%22/%3E%3Cpath%20d%3D%22M54.9887%205.22083V19.6912H52.8288V5.220829999999999H54.9887z%22%20fill%3D%22%2334A853%22/%3E%3Cpath%20d%3D%22M63.4968%2016.6854L65.1722%2017.8023C64.6301%2018.6072%2063.3244%2019.9869%2061.0659%2019.9869%2058.2655%2019.9869%2056.2534%2017.827%2056.2534%2015.0676%2056.2534%2012.1439%2058.2901%2010.1483%2060.8278%2010.1483%2063.3818%2010.1483%2064.6301%2012.1768%2065.0408%2013.2773L65.2625%2013.8357%2058.6843%2016.5623C59.1853%2017.5478%2059.9737%2018.0569%2061.0741%2018.0569%2062.1746%2018.0569%2062.9384%2017.5067%2063.4968%2016.6854zM58.3312%2014.9115L62.7331%2013.0884C62.4867%2012.4724%2061.764%2012.0454%2060.9017%2012.0454%2059.8012%2012.0454%2058.2737%2013.0145%2058.3312%2014.9115z%22%20fill%3D%22%23E94235%22/%3E%3C/svg%3E"
                                      draggable="false"
                                      style="
                                        position: absolute;
                                        left: 0px;
                                        top: 0px;
                                        width: 66px;
                                        height: 26px;
                                        user-select: none;
                                        border: 0px;
                                        padding: 0px;
                                        margin: 0px;
                                      "
                                    /></div
                                ></a>
                              </div>
                            </div>
                            <div></div>
                            <div>
                              <div
                                style="
                                  display: inline-flex;
                                  position: absolute;
                                  right: 0px;
                                  bottom: 0px;
                                "
                              >
                                <div class="gmnoprint" style="z-index: 1000001">
                                  <div
                                    draggable="false"
                                    class="gm-style-cc"
                                    style="
                                      user-select: none;
                                      position: relative;
                                      height: 14px;
                                      line-height: 14px;
                                    "
                                  >
                                    <div
                                      style="
                                        opacity: 0.7;
                                        width: 100%;
                                        height: 100%;
                                        position: absolute;
                                      "
                                    >
                                      <div style="width: 1px"></div>
                                      <div
                                        style="
                                          background-color: rgb(245, 245, 245);
                                          width: auto;
                                          height: 100%;
                                          margin-left: 1px;
                                        "
                                      ></div>
                                    </div>
                                    <div
                                      style="
                                        position: relative;
                                        padding-right: 6px;
                                        padding-left: 6px;
                                        box-sizing: border-box;
                                        font-family: Roboto, Arial, sans-serif;
                                        font-size: 10px;
                                        color: rgb(0, 0, 0);
                                        white-space: nowrap;
                                        direction: ltr;
                                        text-align: right;
                                        vertical-align: middle;
                                        display: inline-block;
                                      "
                                    >
                                      <button
                                        draggable="false"
                                        aria-label="Keyboard shortcuts"
                                        title="Keyboard shortcuts"
                                        type="button"
                                        style="
                                          background: none;
                                          display: inline-block;
                                          border: 0px;
                                          margin: 0px;
                                          padding: 0px;
                                          text-transform: none;
                                          appearance: none;
                                          position: relative;
                                          cursor: pointer;
                                          user-select: none;
                                          color: rgb(0, 0, 0);
                                          font-family: inherit;
                                          line-height: inherit;
                                        "
                                      >
                                        Keyboard shortcuts
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div class="gmnoprint" style="z-index: 1000001">
                                  <div
                                    draggable="false"
                                    class="gm-style-cc"
                                    style="
                                      user-select: none;
                                      position: relative;
                                      height: 14px;
                                      line-height: 14px;
                                    "
                                  >
                                    <div
                                      style="
                                        opacity: 0.7;
                                        width: 100%;
                                        height: 100%;
                                        position: absolute;
                                      "
                                    >
                                      <div style="width: 1px"></div>
                                      <div
                                        style="
                                          background-color: rgb(245, 245, 245);
                                          width: auto;
                                          height: 100%;
                                          margin-left: 1px;
                                        "
                                      ></div>
                                    </div>
                                    <div
                                      style="
                                        position: relative;
                                        padding-right: 6px;
                                        padding-left: 6px;
                                        box-sizing: border-box;
                                        font-family: Roboto, Arial, sans-serif;
                                        font-size: 10px;
                                        color: rgb(0, 0, 0);
                                        white-space: nowrap;
                                        direction: ltr;
                                        text-align: right;
                                        vertical-align: middle;
                                        display: inline-block;
                                      "
                                    >
                                      <button
                                        draggable="false"
                                        aria-label="Map Data"
                                        title="Map Data"
                                        type="button"
                                        style="
                                          background: none;
                                          border: 0px;
                                          margin: 0px;
                                          padding: 0px;
                                          text-transform: none;
                                          appearance: none;
                                          position: relative;
                                          cursor: pointer;
                                          user-select: none;
                                          color: rgb(0, 0, 0);
                                          font-family: inherit;
                                          line-height: inherit;
                                          display: none;
                                        "
                                      >
                                        Map Data</button
                                      ><span style=""
                                        >Map data ©2023 Google, Mapa
                                        GISrael</span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="gmnoscreen">
                                  <div
                                    style="
                                      font-family: Roboto, Arial, sans-serif;
                                      font-size: 11px;
                                      color: rgb(0, 0, 0);
                                      direction: ltr;
                                      text-align: right;
                                      background-color: rgb(245, 245, 245);
                                    "
                                  >
                                    Map data ©2023 Google, Mapa GISrael
                                  </div>
                                </div>
                                <button
                                  draggable="false"
                                  aria-label="Map Scale: 100 m per 49 pixels"
                                  title="Map Scale: 100 m per 49 pixels"
                                  type="button"
                                  class="gm-style-cc"
                                  aria-describedby="D4E63B76-6E30-4200-AEE0-22D2949E7277"
                                  style="
                                    background: none;
                                    display: none;
                                    border: 0px;
                                    margin: 0px;
                                    padding: 0px;
                                    text-transform: none;
                                    appearance: none;
                                    position: relative;
                                    cursor: pointer;
                                    user-select: none;
                                    height: 14px;
                                    line-height: 14px;
                                  "
                                >
                                  <div
                                    style="
                                      opacity: 0.7;
                                      width: 100%;
                                      height: 100%;
                                      position: absolute;
                                    "
                                  >
                                    <div style="width: 1px"></div>
                                    <div
                                      style="
                                        background-color: rgb(245, 245, 245);
                                        width: auto;
                                        height: 100%;
                                        margin-left: 1px;
                                      "
                                    ></div>
                                  </div>
                                  <div
                                    style="
                                      position: relative;
                                      padding-right: 6px;
                                      padding-left: 6px;
                                      box-sizing: border-box;
                                      font-family: Roboto, Arial, sans-serif;
                                      font-size: 10px;
                                      color: rgb(0, 0, 0);
                                      white-space: nowrap;
                                      direction: ltr;
                                      text-align: right;
                                      vertical-align: middle;
                                      display: inline-block;
                                    "
                                  >
                                    <span>100 m&nbsp;</span>
                                    <div
                                      style="
                                        position: relative;
                                        display: inline-block;
                                        height: 8px;
                                        bottom: -1px;
                                        width: 53px;
                                      "
                                    >
                                      <div
                                        style="
                                          width: 100%;
                                          height: 4px;
                                          position: absolute;
                                          left: 0px;
                                          top: 0px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 4px;
                                          height: 8px;
                                          left: 0px;
                                          top: 0px;
                                          background-color: rgb(255, 255, 255);
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 4px;
                                          height: 8px;
                                          position: absolute;
                                          background-color: rgb(255, 255, 255);
                                          right: 0px;
                                          bottom: 0px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          position: absolute;
                                          background-color: rgb(102, 102, 102);
                                          height: 2px;
                                          left: 1px;
                                          bottom: 1px;
                                          right: 1px;
                                        "
                                      ></div>
                                      <div
                                        style="
                                          position: absolute;
                                          width: 2px;
                                          height: 6px;
                                          left: 1px;
                                          top: 1px;
                                          background-color: rgb(102, 102, 102);
                                        "
                                      ></div>
                                      <div
                                        style="
                                          width: 2px;
                                          height: 6px;
                                          position: absolute;
                                          background-color: rgb(102, 102, 102);
                                          bottom: 1px;
                                          right: 1px;
                                        "
                                      ></div>
                                    </div>
                                  </div>
                                  <span
                                    id="D4E63B76-6E30-4200-AEE0-22D2949E7277"
                                    style="display: none"
                                    >Click to toggle between metric and imperial
                                    units</span
                                  >
                                </button>
                                <div
                                  class="gmnoprint gm-style-cc"
                                  draggable="false"
                                  style="
                                    z-index: 1000001;
                                    user-select: none;
                                    position: relative;
                                    height: 14px;
                                    line-height: 14px;
                                  "
                                >
                                  <div
                                    style="
                                      opacity: 0.7;
                                      width: 100%;
                                      height: 100%;
                                      position: absolute;
                                    "
                                  >
                                    <div style="width: 1px"></div>
                                    <div
                                      style="
                                        background-color: rgb(245, 245, 245);
                                        width: auto;
                                        height: 100%;
                                        margin-left: 1px;
                                      "
                                    ></div>
                                  </div>
                                  <div
                                    style="
                                      position: relative;
                                      padding-right: 6px;
                                      padding-left: 6px;
                                      box-sizing: border-box;
                                      font-family: Roboto, Arial, sans-serif;
                                      font-size: 10px;
                                      color: rgb(0, 0, 0);
                                      white-space: nowrap;
                                      direction: ltr;
                                      text-align: right;
                                      vertical-align: middle;
                                      display: inline-block;
                                    "
                                  >
                                    <a
                                      href="https://www.google.com/intl/en-US_US/help/terms_maps.html"
                                      target="_blank"
                                      rel="noopener"
                                      style="
                                        text-decoration: none;
                                        cursor: pointer;
                                        color: rgb(0, 0, 0);
                                      "
                                      >Terms of Use</a
                                    >
                                  </div>
                                </div>
                                <div
                                  draggable="false"
                                  class="gm-style-cc"
                                  style="
                                    user-select: none;
                                    position: relative;
                                    height: 14px;
                                    line-height: 14px;
                                  "
                                >
                                  <div
                                    style="
                                      opacity: 0.7;
                                      width: 100%;
                                      height: 100%;
                                      position: absolute;
                                    "
                                  >
                                    <div style="width: 1px"></div>
                                    <div
                                      style="
                                        background-color: rgb(245, 245, 245);
                                        width: auto;
                                        height: 100%;
                                        margin-left: 1px;
                                      "
                                    ></div>
                                  </div>
                                  <div
                                    style="
                                      position: relative;
                                      padding-right: 6px;
                                      padding-left: 6px;
                                      box-sizing: border-box;
                                      font-family: Roboto, Arial, sans-serif;
                                      font-size: 10px;
                                      color: rgb(0, 0, 0);
                                      white-space: nowrap;
                                      direction: ltr;
                                      text-align: right;
                                      vertical-align: middle;
                                      display: inline-block;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      rel="noopener"
                                      title="Report errors in the road map or imagery to Google"
                                      dir="ltr"
                                      href="https://www.google.com/maps/@31.5023586,34.4650394,16z/data=!10m1!1e1!12b1?source=apiv3&amp;rapsrc=apiv3"
                                      style="
                                        font-family: Roboto, Arial, sans-serif;
                                        font-size: 10px;
                                        color: rgb(0, 0, 0);
                                        text-decoration: none;
                                        position: relative;
                                      "
                                      >Report a map error</a
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style="
                            background-color: white;
                            font-weight: 500;
                            font-family: Roboto, sans-serif;
                            padding: 15px 25px;
                            box-sizing: border-box;
                            top: 5px;
                            border: 1px solid rgba(0, 0, 0, 0.12);
                            border-radius: 5px;
                            left: 50%;
                            max-width: 375px;
                            position: absolute;
                            transform: translateX(-50%);
                            width: calc(100% - 10px);
                            z-index: 1;
                          "
                        >
                          <div>
                            <img
                              alt=""
                              src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"
                              draggable="false"
                              style="
                                padding: 0px;
                                margin: 0px;
                                border: 0px;
                                height: 17px;
                                vertical-align: middle;
                                width: 52px;
                                user-select: none;
                              "
                            />
                          </div>
                          <div style="line-height: 20px; margin: 15px 0px">
                            <span
                              style="
                                color: rgba(0, 0, 0, 0.87);
                                font-size: 14px;
                              "
                              >This page can't load Google Maps correctly.</span
                            >
                          </div>
                          <table style="width: 100%">
                            <tr>
                              <td
                                style="
                                  line-height: 16px;
                                  vertical-align: middle;
                                "
                              >
                                <a
                                  href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&amp;utm_medium=degraded&amp;utm_campaign=billing#api-key-and-billing-errors"
                                  target="_blank"
                                  rel="noopener"
                                  style="
                                    color: rgba(0, 0, 0, 0.54);
                                    font-size: 12px;
                                  "
                                  >Do you own this website?</a
                                >
                              </td>
                              <td style="text-align: right">
                                <button class="dismissButton">OK</button>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>

                      <!-- <div class="map-content" style="display: none;">
                                                <div class="map-content-head">
                                                    <button type="button" class="btn close-map-content">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.09" height="19.452" viewBox="0 0 19.09 19.452">
                                                            <path id="Path_1077" data-name="Path 1077" d="M11640.545-1263.19l-8.465,8.642-1.079-1.043,8.494-8.671-.009-.009.009-.009-8.494-8.664,1.079-1.057,8.465,8.648,8.465-8.648,1.081,1.057-8.5,8.664.009.009-.009.009,8.5,8.671-1.081,1.043Z" transform="translate(-11631.001 1274)" fill="#c4c0c0"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="map-content-body cs-scroll">

                                                </div>
                                            </div> -->
                      <div class="map-content" style="">
                        <div class="map-content-head">
                          <button type="button" class="btn close-map-content">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19.09"
                              height="19.452"
                              viewBox="0 0 19.09 19.452"
                            >
                              <path
                                id="Path_1077"
                                data-name="Path 1077"
                                d="M11640.545-1263.19l-8.465,8.642-1.079-1.043,8.494-8.671-.009-.009.009-.009-8.494-8.664,1.079-1.057,8.465,8.648,8.465-8.648,1.081,1.057-8.5,8.664.009.009-.009.009,8.5,8.671-1.081,1.043Z"
                                transform="translate(-11631.001 1274)"
                                fill="#c4c0c0"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div class="map-content-body cs-scroll">
                          <div class="location-content">
                            <h2>لجنة حي منطقة الزيتون</h2>
                            <div class="d-flex gap-4">
                              <div class="location-content-phone">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.865"
                                    height="11.875"
                                    viewBox="0 0 12.865 11.875"
                                  >
                                    <path
                                      id="icons8_telephone"
                                      d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                      transform="translate(-1 -2)"
                                      fill="#392c23"
                                    ></path>
                                  </svg>
                                </span>
                                <p>0599843331</p>
                              </div>
                              <div class="location-content-phone">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.865"
                                    height="11.875"
                                    viewBox="0 0 12.865 11.875"
                                  >
                                    <path
                                      id="icons8_telephone"
                                      d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                                      transform="translate(-1 -2)"
                                      fill="#392c23"
                                    ></path>
                                  </svg>
                                </span>
                                <p>0599843331</p>
                              </div>
                            </div>
                            <h2 class="mt-4">أعضاء لجنة الحي</h2>
                            <div
                              class="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-5 row-cols-3"
                            >
                              <div class="col">
                                <div class="member-card">
                                  <figure 
                                  :class="{ active: isActive }"
      @click="toggleActive"
>
                                    <img
                                      src="img/member-1.png"
                                      alt=""
                                      srcset=""
                                    />
                                  </figure>
                                  <h2>أ. د. يحيى السراج</h2>
                                </div>
                              </div>
                              <div class="col">
                                <div class="member-card">
                                 <figure
                                 :class="{ active: isActive }"
      @click="toggleActive"
>
                                    <img
                                      src="img/member-2.png"
                                      alt=""
                                      srcset=""
                                    />
                                  </figure>
                                  <h2>أ. بدر صبرة</h2>
                                </div>
                              </div>
                              <div class="col">
                                <div class="member-card">
                                  <figure>
                                    <img
                                      src="img/member-3.png"
                                      alt=""
                                      srcset=""
                                    />
                                  </figure>
                                  <h2>د. جميل طرزي</h2>
                                </div>
                              </div>
                              <div class="col">
                                <div class="member-card">
                                  <figure>
                                    <img
                                      src="img/member-4.png"
                                      alt=""
                                      srcset=""
                                    />
                                  </figure>
                                  <h2>أ. مروان الغول</h2>
                                </div>
                              </div>
                              <div class="col">
                                <div class="member-card">
                                  <figure>
                                    <img
                                      src="img/member-5.png"
                                      alt=""
                                      srcset=""
                                    />
                                  </figure>
                                  <h2>م. هاشم سكيك</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default {
  components: {
  },
  data() {
    return {
      isActive: 1,

      selectedDate: null,
      src_img: 'img/member-1.png', // Add the src_img property
    titel: 'test1', // Add the titel property
    desc: 'ئيس بلدية غزة', // Add the desc property
      members:{
        0:{
          'title':' أ. د. يحيى السراج',
          'desc':'رئيس بلدية غزة',
          'src_img':'img/member-1.png',
          'sub_title':'test1',
        },
   
        1:{
          'title':'أ. بدر صبرة',
          'desc':'عضو مجلس بلدي',
          'src_img':'img/member-2.png',
          'sub_title':'test2',
        },
        2:{
          'title':'د. جميل طرزي',
          'desc':'عضو مجلس بلدي',
          'src_img':'img/member-3.png',
          'sub_title':'test',
        },
        3:{
          'title':'أ. مروان الغول',
          'desc':'عضو مجلس بلدي',
          'src_img':'img/member-4.png',
          'sub_title':'test',
        },
        4:{
          'title':'م. هاشم سكيك',
          'desc':'عضو مجلس بلدي',
          'src_img':'img/member-5.png',
          'sub_title':'test',
        },
        5:{
          'title':'أ. مصطفى قزعاط',
          'desc':'عضو مجلس بلدي',
          'src_img':'img/member-6.png',
          'sub_title':'test',
        },
        6:{
          'title':'م. إسماعيل حمادة',
          'desc':'عضو مجلس بلدي',
          'src_img':'img/member-7.png',
          'sub_title':'test',
        },
        7:{
          'title':'أ. تامر الريس',
          'desc':'عضو مجلس بلدي',
          'src_img':'img/member-8.png',
          'sub_title':'test',
        },
        8:{
          'title':'أ. لؤي عياد',
          'desc':'عضو مجلس بلدي',
          'src_img':'img/member-9.png',
          'sub_title':'test',
        },
        9:{
          'title':'أ. فداء المدهون',
          'desc':'عضو مجلس بلدي',
          'src_img':'img/member-10.png',
          'sub_title':'test',
        },
       
      },
      memberCardDetails:{
          'title':'أ. د. يحيى السراج',
          'desc':'رئيس مجلس الادارة',
          'src_img':'img/member-1.png',
          'sub_title':'رئيس مجلس الادارة',
        }
      
    };
  },
  
  methods:{
    toggleActive() {
      this.isActive = !this.isActive;
    },
     initMap() {
  const ulurus = [];
  $(".list-clickable").each(function (index, element) {
    ulurus.push({ lat: $(element).data("lat"), lng: $(element).data("lng") });
  });
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 31.5016946, lng: 34.4668445 },
  });
  ulurus.forEach((uluru) => {
    new google.maps.Marker({
      position: uluru,
      map: map,
    }).addListener("click", function () {
      let that = this;
      $(".list-clickable").each(function (index, element) {
        if (
          $(element).data("lat") == that.position.lat() &&
          $(element).data("lng") == that.position.lng()
        ) {
          $(".map-content .map-content-body").html("");
          $(".map-content .map-content-body").html(
            $(element).find(".location-data").html()
          );
          $(".map-content").show();
        }
      });
    });
  });

  $(document).on("click", ".list-clickable", function () {
    if (innerWidth < 769) {
      $(".content").scrollTop($(".content").height());
    }
    $(".map-content").hide();
    $(".list-clickable").removeClass("active");
    $(this).addClass("active");
    lat = $(this).data("lat");
    lng = $(this).data("lng");
    if (
      lat != null &&
      lng != null &&
      lat != map.getCenter().lat() &&
      lng != map.getCenter().lng
    ) {
      map.setCenter({
        lat: lat,
        lng: lng,
      });
      map.setZoom(14, true);
      setTimeout(() => {
        map.setZoom(18, true);
      }, 500);
    }
  });
    },
    showMember(id){
      this.memberCardDetails.title = this.members[id].title;
      this.memberCardDetails.desc = this.members[id].desc;
      this.memberCardDetails.src_img = this.members[id].src_img;
      this.isActive = id;
    }

  },
  mounted(){
    setTimeout(function(){
  console.log('etest')
  initMap();
},100)
  }
};






// $('.map-content .map-content-body').html($('.location-data').html());
$(document).on("click", ".close-map-content", function () {
  $(this).closest(".map-content").hide();
});

$(".member-card").click(function() {
  $(this).toggleClass("active");
});

</script>

<style scoped>



/* .member-card .member .active {
  max-height: 115px;
  max-width: 115px;
  border-radius: 50%;
  border: 3px solid #3EC4B5;
  margin-inline: auto;
} */

.member-card.member.active {
  max-height: 96px;
  max-width: 96px;
  border-radius: 50%;
  border: 3px solid #3EC4B5;
  margin-inline: auto;}


</style>