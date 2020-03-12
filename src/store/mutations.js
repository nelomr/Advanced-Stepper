export default {
    incrementStateStep(state) {
        state.step +=1;
        if (state.step > state.currentStep) {
            state.currentStep +=1;
        }
    },
    decreaseStateStep(state) {
        state.step -=1;
    },
    putStep(state, step) {
        state.step = step;
    }
};
