export default {
    incrementStep({commit}) {
        commit('incrementStateStep');
    },
    decreaseStep({commit}) {
        commit('decreaseStateStep');
    },

    toStep({commit, state}, step) {
        if (step <= state.currentStep) {
            commit('putStep', step);
        }
    },
};
