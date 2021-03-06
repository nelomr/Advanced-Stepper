import router from '../router';
import getOrders from '@/api/getOrders';
import ordersModel from '@/models/ordersModel';
import productsModel from '@/models/productsModel';

export default {
    incrementStep({commit, state}) {
        commit('incrementStateStep');
        router.push(`/step-${state.step + 1}`);
    },
    decreaseStep({commit, state}) {
        commit('decreaseStateStep');
        state.step >= 1 ? router.push(`/step-${state.step + 1}`) : router.push('/');
    },
    controlStepRouter({commit}, step) {
        commit('putStep', step);
    },
    toStep({commit, state, dispatch}, step) {
        if (step <= state.currentStep) {
            commit('putStep', step);
            step >= 1 ? router.push(`/step-${step + 1}`).catch(err => {}) : router.push('/').catch(err => {});
        }

        if (step > state.currentStep && step < state.steps.length) {
            dispatch('incrementStep');
        }
    },
    fetchOrders({commit}) {
        getOrders().then(result => {
            let orders = ordersModel(result.orders._embedded.orders);
            let products = productsModel(result.products._embedded.products);

            commit('setOrders', orders);
            commit('setProducts', products);
        })
        .catch(error => { console.log('token api expired'); });
    },
    getProductsOrder({commit, state}, orders) {
        let result = state.products.filter(function(product) {
            return orders.some(function(orderProduct) {
                return product.id === orderProduct.productId;
            });
        });
        commit('setFullOrder', result);
    }
};
