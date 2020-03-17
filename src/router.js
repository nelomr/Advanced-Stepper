import Vue from 'vue';
import Router from 'vue-router';
import store from './store/store'
import StepOne from '@/components/StepOne';
import StepTwo from '@/components/StepTwo';
import StepThree from '@/components/StepThree';
import StepFour from '@/components/StepFour';
import StepFive from '@/components/StepFive';
import OrdersPage from '@/pages/OrdersPage';
import OrderPage from '@/pages/OrderPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: StepOne,
      beforeEnter(to, from, next) {
        // check vuex store //
          store.state.step = 0
          next()
      }
    },
    {
      path: '/step-2',
      name: 'step-2',
      component: StepTwo,
      beforeEnter(to, from, next) {
        // check vuex store //
        if (store.state.currentStep >= 1) {
          store.state.step = 1
          next()
        } else {
          next({
            name: "home" // back to safety route //
          });
        }
      }
    },
    {
      path: '/step-3',
      name: 'step-3',
      component: StepThree,
      beforeEnter(to, from, next) {
        // check vuex store //
        if (store.state.currentStep >= 2) {
          store.state.step = 2
          next()
        } else {
          next({
            name: "home" // back to safety route //
          });
        }
      }
    },
    {
      path: '/step-4',
      name: 'step-4',
      component: StepFour,
      beforeEnter(to, from, next) {
        // check vuex store //
        if (store.state.currentStep >= 3) {
          store.state.step = 3
          next()
        } else {
          next({
            name: "home" // back to safety route //
          });
        }
      }
    },
    {
      path: '/step-5',
      name: 'step-5',
      component: StepFive,
      beforeEnter(to, from, next) {
        // check vuex store //
        if (store.state.currentStep == 4) {
          store.state.step = 4
          next()
        } else {
          next({
            name: "home" // back to safety route //
          });
        }
      }
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersPage,
      beforeEnter(to, from, next) {
        // check vuex store //
        if (store.state.currentStep >= 3) {
          store.state.step = 3
          next()
        } else {
          next({
            name: "home" // back to safety route //
          });
        }
      }
    },
    {
      path: '/orders/:id',
      name: 'orderId',
      component: OrderPage,
      props: true,
      beforeEnter(to, from, next) {
        // check vuex store //
        if (store.state.currentStep >= 3) {
          store.state.step = 3
          next()
        } else {
          next({
            name: "home" // back to safety route //
          });
        }
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
