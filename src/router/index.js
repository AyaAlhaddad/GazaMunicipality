import { createRouter, createWebHistory } from "vue-router";
import home from '../views/home.vue'
import albaldia from '../views/albaldia.vue'
import applecation from '../views/applecation.vue'
import khadamat from '../views/khadamat.vue'
import contact_us from '../views/contact_us.vue'
import question from '../views/question.vue'
import location from '../views/location.vue'
import almashare from '../views/almashare.vue'
import almarkaz from '../views/almarkaz.vue'
import alkhadamat from '../views/alkhadamat.vue'
import dalil from '../views/dalil.vue'
import alboum from '../views/alboum.vue'
import status from '../views/status.vue'
import reports from '../views/reports.vue'
import gaza_history from '../views/gaza_history.vue'
import distance from '../views/distance.vue'
import artifacts from '../views/artifacts.vue'
import interactive_map from '../views/interactive_map.vue'
import electronic_museum from '../views/electronic_museum.vue'
import athar from '../views/athar.vue'
import deralbalh from '../views/deralbalh.vue'
import developmentP from '../views/developmentP.vue'
import historicalbackground from '../views/historicalbackground.vue'
import towncouncil from '../views/towncouncil.vue'
import plans from '../views/plans.vue'
import baladia_structure from '../views/baladia_structure.vue'
import budget from '../views/budget.vue'
import facilitiesmap from '../views/facilitiesmap.vue'
import center from '../views/center.vue'
































const routes = [
    {
      path: "/",
      // name: "home",
      component: home,
      // children: [
      //   {
      //     path: "/contact_us",
      //     name: "contact_us",
      //     component: contact_us,
      //   },
      //   {
      //     path: "/applecation",
      //     name: "applecation",
      //     component: applecation,
      //   },
      //   {
      //     path: "/question",
      //     name: "question",
      //     component: question,
      //   },
      // ]
    },
    
    {
      path: "/contact_us",
      name: "contact_us",
      component: contact_us,
    },
    {
      path: "/applecation",
      name: "applecation",
      component: applecation,
    },
    {
      path: "/question",
      name: "question",
      component: question,
    },
    
      {
        path: "/khadamat",
        name: "khadamat",
        component: khadamat,
      },
      {
        path: "/dalil",
        name: "dalil",
        component: dalil,
      },
      {
        path: "/alkhadamat",
        name: "alkhadamat",
        component: alkhadamat,
      },
      
    {
      path: "/albaldia",
      name: "albaldia",
      component:albaldia ,
    },
    {
      path: "/historicalbackground",
      name: "historicalbackground",
      component:historicalbackground ,
    },
    {
      path: "/towncouncil",
      name: "towncouncil",
      component:towncouncil ,
    },
    {
      path: "/plans",
      name: "plans",
      component:plans ,
    },
    {
      path: "/baladia_structure",
      name: "baladia_structure",
      component: baladia_structure,
    },
    {
      path: "/budget",
      name: "budget",
      component: budget,
    },
    {
      path: "/facilitiesmap",
      name: "facilitiesmap",
      component: facilitiesmap,
    },
    {
      path: "/center",
      name: "center",
      component: center,
    },
    
    
    
    {
      path: "/almashare",
      name: "almashare",
      component:almashare ,
    },
    {
      path: "/developmentP",
      name: "developmentP",
      component:developmentP ,
    },
    
    {
      path: "/almarkaz",
      name: "almarkaz",
      component:almarkaz ,
    },
    {
      path: "/status",
      name: "status",
      component:status ,
    },
    {
      path: "/reports",
      name: "reports",
      component:reports ,
    },
    {
      path: "/alboum",
      name: "alboum",
      component:alboum ,
    },
    {
      path: "/location",
      name: "location",
      component:location ,
    },
    {
      path: "/gaza_history",
      name: "gaza_history",
      component:gaza_history ,
    },
    {
      path: "/distance",
      name: "distance",
      component:distance ,
    },
    {
      path: "/artifacts",
      name: "artifacts",
      component:artifacts ,
    },
    {
      path: "/interactive_map",
      name: "interactive_map",
      component:interactive_map ,
    },
    {
      path: "/electronic_museum",
      name: "electronic_museum",
      component:electronic_museum ,
    },
    {
      path: "/athar",
      name: "athar",
      component:athar ,
    },
    {
      path: "/deralbalh",
      name: "deralbalh",
      component:deralbalh ,
    },
  ];

  const router =createRouter({
    routes:routes,
    history:createWebHistory(),
    linkActiveClass:'active',
  })

  export default router