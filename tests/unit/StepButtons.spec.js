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
    let state;
    let store;

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
            computed: {
                currentStep() {
                    return store.state.step;
                }
            },
            mocks: {$store: store}
        });

        return {
            wrapper
        };
    };

    it('renders the component', () => {
        const {wrapper} = build();
        expect(wrapper.html()).toMatchSnapshot();
    });
});
