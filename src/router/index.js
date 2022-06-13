import Router from 'vue-router';
import Home from '../pages/Home/index.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  }
];
const createRouter = () => new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes
});
const router = createRouter();
export default router;
