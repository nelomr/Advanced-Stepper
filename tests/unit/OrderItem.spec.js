import {shallowMount, createLocalVue} from '@vue/test-utils';
import OrderItem from '@/components/OrderItem/OrderItem';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('OrderItem', () => {
    let props;
    let order = {"code":"CO107341","orderDate":"2018-11-09","id":"e29f59ab-2793-4644-bec5-5818fd67a165","logisticCode":"LOCAL","cuponId":"","totalPrice":14500,"totalDeliveryPrice":0,"productsOrder":[{"productId":"b6d1f4e9-85a9-449d-a16e-cb308cbbeb35","quantity":1},{"productId":"8bf0e74b-284f-4a51-bfb1-aa5f1e0ab279","quantity":1},{"productId":"46297509-f50e-4b19-ba6c-bf9744414f37","quantity":2}],"pickupDates":[{"id":"01e6ebbf-99fc-443d-9cb4-a1d0714f2892","pickupDate":"2018-11-13","pickupStart":"17:00:00","pickupEnd":"18:00:00"},{"id":"fe4d70df-7a7c-43dc-b45f-21c7e9ae55e1","pickupDate":"2018-11-09","pickupStart":"17:00:00","pickupEnd":"18:00:00"}]};
    
    beforeEach(() => {
        props = {
            order
        };
    });
    
    const build = () => {
        const wrapper = shallowMount(OrderItem, {
            propsData: props,
            router,
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
