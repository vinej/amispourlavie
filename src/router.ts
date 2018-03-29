import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './stores/store'
import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignupPage },
  { path: '/signin', component: SigninPage },
  {
    path: '/dashboard', component: DashboardPage,
    beforeEnter: function(to, from, next) {
      if (store.getters['user/idToken']) {
        next();
      } else {
        next('/signin');
      }
    }
  }
];

export default new VueRouter( { routes })