import { createApp } from 'vue';
import App from './App.vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import { createPinia } from 'pinia';

import CategoriesPage from './pages/CategoriesPage.vue';
import CartPage from './pages/CartPage.vue';
import ProductPage from './pages/ProductPage.vue';

import './style.css';

const routes = [
  { path: '/', component: CategoriesPage },
  { path: '/categories/:id', component: CategoriesPage },
  { path: '/products/:id', component: ProductPage },
  { path: '/cart', component: CartPage },
];

const router = createRouter({
  history: createWebHashHistory('/test-ecwid'),
  routes,
});

const pinia = createPinia();

createApp(App) //
  .use(pinia)
  .use(router)
  .mount('#app');
