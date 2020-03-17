import {shallowMount} from '@vue/test-utils';
import collapse from '@/components/CollapseComponent/CollapseComponent';

describe('collapse', () => {
    let props;
    let openDefault = false;

    beforeEach(() => {
        props = {
            openDefault
        };
    });

    const build = () => {
        const wrapper = shallowMount(collapse, {
            propsData: props
        });

        return {
            wrapper,
            button: () => wrapper.find('.collapse-trigger')
        };
    };

    it('renders the component', () => {
        const {wrapper} = build();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders the right component', () => {
        const {wrapper} = build();

        expect(wrapper.find('.collapse-component').classes('is-open')).toBe(false);
        expect(wrapper.vm.isActive).toBe(false);
    });

    it('renders the right component with prop equal true', () => {
        const wrapper = shallowMount(collapse, {
            propsData: {
                openDefault: true
            }
        });

        expect(wrapper.find('.collapse-component').classes('is-open')).toBe(true);
    });

    it('open on click', async() => {
        const {wrapper, button} = build();

        button().trigger('click');

        await wrapper.vm.$nextTick();

        expect(wrapper.vm.isActive).toBe(true);
        expect(wrapper.find('.collapse-component').classes('is-open')).toBe(true);
    });

    it('close on click', async() => {
        const build = () => {
            const wrapper = shallowMount(collapse, {
                propsData: {
                    openDefault: true
                }
            });

            return {
                wrapper,
                button: () => wrapper.find('.collapse-trigger')
            };
        };

        const {wrapper, button} = build();

        button().trigger('click');

        await wrapper.vm.$nextTick();

        expect(wrapper.vm.isActive).toBe(false);
        expect(wrapper.find('.collapse-component').classes('is-open')).toBe(false);
    });
});
