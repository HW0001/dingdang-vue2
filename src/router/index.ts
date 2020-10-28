import Vue from 'vue';
import VueRouter from 'vue-router';

import Labels from "@/views/Labels.vue";
import Home from "@/views/Home.vue";
import Statistics from "@/views/Statistics.vue";
import NotFound from "@/views/NotFound.vue";
import EditLabel from "@/views/EditLabel.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/labels',
    name: 'Labels',
    component:Labels 
  },
  {
    path: "/labels/edit/:id",
    name: 'labeledit',
    component: EditLabel,
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component:Statistics
  }
  ,
  {
    path: "/:catchAll(.*)",
    component:NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
