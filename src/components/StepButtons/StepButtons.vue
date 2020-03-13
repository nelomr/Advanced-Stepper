<template>
    <div class="step-buttons">
        <button @click="prev()" :class="{'is-hidden': currentStep < 1}" class="step-button is-prev">
            <i><IconButtonLeft></IconButtonLeft></i>
            Anterior
        </button>
        <button @click="next()" v-if="currentStep < 4" class="step-button is-next">
            Continuar
            <i><IconButtonRight></IconButtonRight></i>
        </button>
    </div>
</template>

<script>
import IconButtonRight from '@/components/icons/IconButtonRight.vue';
import IconButtonLeft from '@/components/icons/IconButtonLeft.vue'

export default {
    components: {
        IconButtonRight,
        IconButtonLeft
    },
    computed: {
        currentStep() {
            return this.$store.state.step;
        }
    },
    methods: {
        next() {
            if (this.currentStep < 4) {
                this.$store.dispatch('incrementStep');
                //this.goNext(this.currentStep);
            }
        },
        prev() {
            if (this.currentStep > 0) {
                this.$store.dispatch('decreaseStep');
                //this.goBack();
            }
        },
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        goNext(step) {
            this.$router.push(`/step-${step + 1}`)
        }
    }
}
</script>

<style lang="scss">
    @import "./stepButtons.scss";
</style>