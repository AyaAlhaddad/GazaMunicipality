
<template>
 <nav class="navbar fixed-top navbar-expand-lg bg-light">
    <div class="container-fluid">



      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#"><img src="img/icons8_user.png"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><img src="img/Subtraction 9.png"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><img src="img/icons8_geography.png"></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" style="color:#392C23 ;" role="button" data-toggle="dropdown" aria-expanded="false">العربية </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

          <!-- <img src="img/Polygon 1.png"> -->
        </ul>
           
          </div>

       
        <div class="button hidden-lg hidden-md d-lg-none">
          <a class="btn-open" href="#"></a>
     
        </div>

        <div class="navbar-logo" >
          <!-- <a href="الرئيسية.html"><img src="img/Group 62564.png"> </a>             -->
          <router-link to="/" class="nav-link">
            <img src="img/Group 62564.png"> 
          </router-link>
        </div>
<div class="navbar-text d-none d-sm-block">
       <span> <p> الإثنين 1 محرم 1443 - 09 أغسطس 2021 |  11:46  صباحا 
          <img src="img/icons8_clock.png" width="15px" height="15px" style="margin-left:2px ;"> +42°C
          
        <img src="img/icons8_sun.png" width="15px" height="15px"></p>  </span></div>
        
        
          

        </div>

  </nav>
  <div class="overlay">
    <div class="wrap">
      <ul class="wrap-nav">
        <li class="dropdown">
          <router-link to="/" class="nav-link">الرئيسية</router-link>


        <ul class="dropdown-content">
          <li class="nav-item itm1">
            <a class="nav-link " href="الرئيسية.html">
              <img src="img/icons8_home_1.png">
            </a>
          </li>
          <li class="nav-item itm1">
            <a class="nav-link " href="التطبيق.html">
                <img src="img/icons8_android.png">
            </a>
          </li>
          <li class="nav-item itm1">
            <a class="nav-link " href="index.html">
                <img src="img/icons8_telephone.png">
            </a>
          </li>
          <li class="nav-item itm1">
            <a class="nav-link " href="index.html">
                <img src="img/icons8_clock.png">
            </a>
          </li>
        </ul>
        </li>
        <li class="dropdown">
          <router-link to="/albaldia" class="nav-link">البلدية</router-link>
        <ul class="dropdown-content">
           <li class="nav-item">
            <a class="nav-link " href="index.html">
              <img src="img/icons8_goal.png">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="index.html">
                <img src="img/icons8_time_machine_1.png">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="index.html">
                <img src="img/icons8_management.png">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="index.html">
                <img src="img/icons8_strategy_1.png">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="index.html">
                <img src="img/icons8_networking_manager.png">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="index.html">
                <img src="img/icons8_transaction.png">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="index.html">
                <img src="img/icons8_building.png">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="index.html">
                <img src="img/svgexport-6 1.png">
            </a>
          </li>
        
        </ul>
        </li>
        <li class="dropdown">
          <router-link to="/almadina" class="nav-link">المدينة</router-link>
          </li>
          <li class="dropdown">
            <router-link to="/khadamat" class="nav-link">الخدمات</router-link>
        <ul class="dropdown-content">
          <li class="nav-item">
            <a class="nav-link " href="index.html">
              <img src="img/icons8_service.png">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="index.html">
                <img src="img/Component 21 – 5.png">
            </a>
          </li>
        </ul>
        </li>

        <li class="dropdown">
          <router-link to="/almashare" class="nav-link">المشاريع</router-link>
        
          </li>

          <li class="dropdown">
            <router-link to="/" class="nav-link">المركز الاعلامى</router-link>
        
          </li>
      </ul>
      <div class="social">
       
        <a href="#">
        <div class="social-icon">
          <img src="img/tw.png">
        </div>
        </a>
        <a href="#">
        <div class="social-icon">
          <img src="img/insta.png">
        </div>
        </a>
        <a href="#">
        <div class="social-icon">
          <img src="img/facebook.png">
        </div>
        </a>
       
          <p>
            2021 ©
    جميع الحقوق محفوظة لدى  غزة
         <span style="color: #CF2A45;">بلدية غزة</span>

         </p>
       
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'Navbar',
};
</script>
