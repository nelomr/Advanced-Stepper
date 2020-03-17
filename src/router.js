import Vue from 'vue';
import Router from 'vue-router';
import store from './store/store'
import StepOne from '@/pages/StepOne';
import StepTwo from '@/pages/StepTwo';
import StepThree from '@/pages/StepThree';
import StepFour from '@/pages/StepFour';
import StepFive from '@/pages/StepFive';
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
        store.dispatch('controlStepRouter', 0);
          next()
      }
    },
    {
      path: '/step-2',
      name: 'step-2',
      component: StepTwo,
      beforeEnter(to, from, next) {
        if (store.state.currentStep >= 1) {
          store.dispatch('controlStepRouter', 1);
          next()
        } else {
          next({
            name: "home"
          });
        }
      }
    },
    {
      path: '/step-3',
      name: 'step-3',
      component: StepThree,
      beforeEnter(to, from, next) {
        if (store.state.currentStep >= 2) {
          store.dispatch('controlStepRouter', 2);
          next()
        } else {
          next({
            name: "home"
          });
        }
      }
    },
    {
      path: '/step-4',
      name: 'step-4',
      component: StepFour,
      beforeEnter(to, from, next) {
        if (store.state.currentStep >= 3) {
          store.dispatch('controlStepRouter', 3);
          next()
        } else {
          next({
            name: "home"
          });
        }
      }
    },
    {
      path: '/step-5',
      name: 'step-5',
      component: StepFive,
      beforeEnter(to, from, next) {
        if (store.state.currentStep == 4) {
          store.dispatch('controlStepRouter', 4);
          next()
        } else {
          next({
            name: "home"
          });
        }
      }
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersPage,
      beforeEnter(to, from, next) {
        if (store.state.currentStep >= 3) {
          store.dispatch('controlStepRouter', 3);
          next()
        } else {
          next({
            name: "home"
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
        if (store.state.currentStep >= 3) {
          store.dispatch('controlStepRouter', 3);
          next()
        } else {
          next({
            name: "home"
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
