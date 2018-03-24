import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/amispourlavie', component: WelcomePage },
  { path: '/amispourlavie/signup', component: SignupPage },
  { path: '/amispourlavie/signin', component: SigninPage },
  {
    path: '/amispourlavie/dashboard',
    component: DashboardPage,
    beforeEnter (to, from, next) {
      if (store.state.idToken) {
        next()
      } else {
        next('/amispourlavie/signin')
      }
    }
  }
]

export default new VueRouter({mode: 'hash', routes})