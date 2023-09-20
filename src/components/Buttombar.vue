<template>
    
    <nav class="navbar2 fixed-bottom navbar-expand-lg bg-light"  style="border-top: 1px solid #D6D6D6;">
           
           <div class="collapse navbar-collapse" id="navbarcollapse">
               <ul class="navbar-nav justify-content-between w-100">
                 <li class="nav-item slide_left">
                   <router-link to="/albaldia" class="nav-link">البلدية</router-link>
                  <div>
                     
                   </div>
                 </li>
                 <li class="nav-item slide_left">
                   <router-link to="/location" class="nav-link">المدينة</router-link>

                 </li>
                 <li class="nav-item slide_left ">
                   <router-link to="/alkhadamat" class="nav-link">الخدمات</router-link>

                 </li>
                 <li class="nav-item  slide_left">
                   <router-link to="/almashare" class="nav-link">المشاريع</router-link>

                 </li>
                 <li class="nav-item  slide_left">
                   <router-link to="/almarkaz" class="nav-link">المركز الاعلامى</router-link>


                 </li>
       
               </ul>
           </div>
       </nav>
</template>
<script>
export default {
  name: 'Buttombar',
};
</script>
<style scoped>
a.active{
  font-family: boldH;
  color: #FFF;
  background-color: #3EC4B5;

}
</style>