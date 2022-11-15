import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
      path: "/",
      name: "home",
      component: ()=> import ('./components/HomeComponent.vue')
    },
    {
      path: "/acercade",
      name: "about",
      component: ()=> import ('./components/AcercaDeComponent.vue')
    },
    {
        path: "/contacto",
        name: "contacto",
        component: ()=> import ('./components/ContactoComponent.vue')
      },
      {
        path: "/proyectos",
        name: "proyectos",
        component: ()=> import ('./components/ProyectosComponent.vue')
      },
  ];

  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

const app = createApp(App)

app.use(router)

app.mount('#app');
