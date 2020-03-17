<template>
    <div :class="['collapse-component', classes]">
        <div class="collapse-trigger" @click="toggle()">
            <slot name="collapse-component-header" />
        </div>
        <div class="collapse-component--wrapper">
            <div class="collapse-component--collapsible">
                <div class="collapse-component--content">
                    <slot name="collapse-component-content" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        openDefault: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isActive: this.openDefault
        };
    },
    computed: {
        classes() {
            return {
                'is-open': this.isActive
            };
        }
    },
    methods: {
        open() {
            this.isActive = true;
        },
        close() {
            this.isActive = false;
        },
        toggle() {
            this.isActive ? this.close() : this.open();
        }
    }
};
</script>

<style scoped lang="scss">
  @import "./CollapseComponent.scss";
</style>
