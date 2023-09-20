

<template>

  <app-nav-bar />
  <Sidebar-bar/>
  <Buttombar-bar/>
  <RouterView></RouterView>
  <a href="#" class="whatsapp">
        <span class="icon-fast">
            <svg xmlns="http://www.w3.org/2000/svg" width="30.582" height="31.603" viewBox="0 0 30.582 31.603">
                <path id="icons8_facebook_messenger" d="M16.291,1C7.892,1,1,7.543,1,15.648A13.445,13.445,0,0,0,5.7,26.069V32.6l5.881-3.924a29.241,29.241,0,0,0,4.7.551,16.529,16.529,0,0,0,10.742-3.694,12.785,12.785,0,0,0,4.549-9.888C31.582,7.543,24.69,1,16.291,1Zm0,2.352c7.186,0,12.939,5.523,12.939,12.3a10.306,10.306,0,0,1-3.722,8.1,14.19,14.19,0,0,1-9.217,3.134,33.463,33.463,0,0,1-4.834-.579l-.441-.055L8.057,28.21V25.131l-.441-.349a10.908,10.908,0,0,1-4.264-9.134C3.352,8.875,9.105,3.352,16.291,3.352Zm-3.529,9.41L5.7,19.82l7.057-2.352L19.82,19.82l7.057-7.057L19.82,15.115Z" transform="translate(-1 -1)" fill="#fff"></path>
            </svg>
        </span>
    </a>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Buttombar from './components/Buttombar.vue';


export default {
  name: 'app',
  components: {
    'app-nav-bar': Navbar,
    'Sidebar-bar':Sidebar,
    'Buttombar-bar':Buttombar,

  },
};
</script>



