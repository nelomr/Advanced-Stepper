import Vue from 'vue';
import Vuex from 'vuex';
import {shallowMount, createLocalVue} from '@vue/test-utils';
import StepButtons from '@/components/StepButtons/StepButtons';
import IconButtonRight from '@/components/icons/IconButtonRight.vue';
import IconButtonLeft from '@/components/icons/IconButtonLeft.vue';
Vue.component('IconButtonRight', IconButtonRight);
Vue.component('IconButtonLeft', IconButtonLeft);

const localVue = createLocalVue();
localVue.use(Vuex);

describe('StepButtons', () => {
    let step = 0;
    let store;
    let state;
    let actions;

    beforeEach(() => {
        state = {
            step
        };

        actions = {
            incrementStep: jest.fn(),
            decreaseStep: jest.fn()
        };

        store = new Vuex.Store({
            state,
            actions
        });
    });

    const build = () => {
        const wrapper = shallowMount(StepButtons, {
            mocks: {$store: store},
            computed: {
                currentStep() {
                    return store.state.step;
                }
            }
        });

        return {
            wrapper
        };
    };

    it('renders the component', () => {
        const {wrapper} = build();
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('calls store action "incrementStep" when button is clicked', () => {
        const build = () => {
            const wrapper = shallowMount(StepButtons, {
                mocks: {$store: store},
                computed: {
                    currentStep() {
                        return store.state.step;
                    }
                }
            });

            return {
                wrapper,
                button: () => wrapper.find('.step-button.is-next')
            };
        };

        const {button} = build();

        button().trigger('click');
        expect(actions.incrementStep).toHaveBeenCalled();
    });

    it('with step < 1 button prev is hidden class', () => {
        const build = () => {
            const wrapper = shallowMount(StepButtons, {
                mocks: {$store: store},
                computed: {
                    currentStep() {
                        return store.state.step;
                    }
                }
            });

            return {
                wrapper,
                button: () => wrapper.find('.step-button.is-prev')
            };
        };

        const { button} = build();

        expect(button().classes('is-hidden')).toBe(true);
    });

    it('calls store action "decreaseStep" when button is clicked', () => {
        state = {
            step: 2
        };

        actions = {
            incrementStep: jest.fn(),
            decreaseStep: jest.fn()
        };

        store = new Vuex.Store({
            state,
            actions
        });
        const build = () => {
            const wrapper = shallowMount(StepButtons, {
                mocks: {$store: store},
                computed: {
                    currentStep() {
                        return store.state.step;
                    }
                }
            });

            return {
                wrapper,
                button: () => wrapper.find('.step-button.is-prev')
            };
        };

        const { button} = build();

        button().trigger('click');
        expect(actions.decreaseStep).toHaveBeenCalled();
    });
});
