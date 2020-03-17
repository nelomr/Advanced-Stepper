import Vue from 'vue';
import Vuex from 'vuex';
import {shallowMount, createLocalVue} from '@vue/test-utils';
import OrderCard from '@/components/OrderCard/OrderCard';
import VueRouter from 'vue-router';
import CollapseComponent from '@/components/CollapseComponent/CollapseComponent.vue';
Vue.component('CollapseComponent', CollapseComponent);

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter();

describe('OrderCard', () => {
    let props;
    let order = {"code":"CO107341","orderDate":"2018-11-09","id":"e29f59ab-2793-4644-bec5-5818fd67a165","logisticCode":"LOCAL","cuponId":"","totalPrice":14500,"totalDeliveryPrice":0,"productsOrder":[{"productId":"b6d1f4e9-85a9-449d-a16e-cb308cbbeb35","quantity":1},{"productId":"8bf0e74b-284f-4a51-bfb1-aa5f1e0ab279","quantity":1},{"productId":"46297509-f50e-4b19-ba6c-bf9744414f37","quantity":2}],"pickupDates":[{"id":"01e6ebbf-99fc-443d-9cb4-a1d0714f2892","pickupDate":"2018-11-13","pickupStart":"17:00:00","pickupEnd":"18:00:00"},{"id":"fe4d70df-7a7c-43dc-b45f-21c7e9ae55e1","pickupDate":"2018-11-09","pickupStart":"17:00:00","pickupEnd":"18:00:00"}]};
    let productsDetailOrder = [{"productId":"46297509-f50e-4b19-ba6c-bf9744414f37","quantity":2,"id":"46297509-f50e-4b19-ba6c-bf9744414f37","name":"Pantalón","price":3500},{"productId":"8bf0e74b-284f-4a51-bfb1-aa5f1e0ab279","quantity":1,"id":"8bf0e74b-284f-4a51-bfb1-aa5f1e0ab279","name":"Saco","price":3500},{"productId":"b6d1f4e9-85a9-449d-a16e-cb308cbbeb35","quantity":1,"id":"b6d1f4e9-85a9-449d-a16e-cb308cbbeb35","name":"chaqueta","price":4000}];
    let store;
    let state;
    let actions;
    
    beforeEach(() => {
        state = {
            productsDetailOrder
        };

        actions = {
            getProductsOrder: jest.fn()
        };

        store = new Vuex.Store({
            state,
            actions
        });

        props = {
            order
        };
    });
    
    const build = () => {
        const wrapper = shallowMount(OrderCard, {
            mocks: {$store: store},
            router,
            computed: {
                productsDetailOrder() {
                    return store.state.productsDetailOrder;
                }
            },
            propsData: props,
            stubs: ['router-link', 'router-view']
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
