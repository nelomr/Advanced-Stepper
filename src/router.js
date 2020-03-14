import Vue from 'vue';
import Router from 'vue-router';
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
    },
    {
      path: '/step-2',
      name: 'step-2',
      component: StepTwo
    },
    {
      path: '/step-3',
      name: 'step-3',
      component: StepThree
    },
    {
      path: '/step-4',
      name: 'step-4',
      component: StepFour
    },
    {
      path: '/step-5',
      name: 'step-5',
      component: StepFive
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersPage
    },
    {
      path: '/orders/:id',
      name: 'orderId',
      component: OrderPage,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
