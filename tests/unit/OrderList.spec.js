import {shallowMount} from '@vue/test-utils';
import OrdersList from '@/components/OrdersList/OrdersList';

describe('OrdersList', () => {
    const build = () => {
        const wrapper = shallowMount(OrdersList, {});

        return {
            wrapper
        };
    };

    it('renders the component', () => {
        const {wrapper} = build();

        expect(wrapper.html()).toMatchSnapshot();
    });
});
