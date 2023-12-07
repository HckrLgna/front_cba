/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.1.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2023 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
 import { createApp } from 'vue';
 import { createRouter, createWebHistory } from 'vue-router';
 import App from './App.vue';
 import LightBootstrap from './light-bootstrap-main';
 import routes from './routes/routes';

 import './registerServiceWorker';

 const app = createApp(App);

 // Usa el enrutador VueRouter
 const router = createRouter({
   history: createWebHistory(),
   base: '/admin',
   routes,
   linkActiveClass: 'nav-item active',
   scrollBehavior: (to) => {
     if (to.hash) {
       return { selector: to.hash };
     } else {
       return { x: 0, y: 0 };
     }
   },
 });

 // Usa el plugin LightBootstrap
 app.use(LightBootstrap);

 // Usa el enrutador en tu aplicación
 app.use(router);

 // Monta la aplicación en el elemento con id 'app'
 app.mount('#app');
