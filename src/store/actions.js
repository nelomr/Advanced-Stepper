import router from '../router';
import getOrders from '@/api/getOrders';
import getProducts from '@/api/getProducts';

const UrlOrders = '/apps/orders/search/findByCustomerId';

export default {
    incrementStep({commit, state}) {
        commit('incrementStateStep');
        router.push(`/step-${state.step + 1}`);
    },
    decreaseStep({commit, state}) {
        commit('decreaseStateStep');
        state.step >= 1 ? router.push(`/step-${state.step + 1}`) : router.push('/');
    },

    toStep({commit, state, dispatch}, step) {
        if (step <= state.currentStep) {
            commit('putStep', step);
            step >= 1 ? router.push(`/step-${step + 1}`) : router.push('/');
        }

        if (step > state.currentStep && step < state.steps.length) {
            dispatch('incrementStep');
        }
    },
    fetchOrders({commit}) {
        getOrders().then(result => {
            let orders = result.orders._embedded.orders;;
            let products = result.products._embedded.products;

            commit('setOrders', orders);
            commit('setProducts', products);
        })
        .catch(error => { console.error(error); throw error; });
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
