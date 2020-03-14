import router from '../router';
import client from '../services/client';
import getOrders from '@/api/getOrders';

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
            let orders = result;
            commit('setOrders', orders);
        })
        .catch(error => { console.error(error); throw error; });
    }
};
