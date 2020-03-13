<template>
<div class="checkout-wrapper" @keyup="controlKeyEvents">
    <ol class="checkout">
        <li class="step" v-for="(step, stepIndex) in steps"
            :key="step.id"
            :class="{
              'prev': stepIndex < currentStep,
              'active': stepIndex === currentStep }"
              @click="toStep(stepIndex)"
            >
            <span class="step-dot">{{ stepIndex + 1 }}</span>
            <span class="step-label">{{ step.name }}</span>
        </li>
    </ol>
    <step-buttons />
</div>
</template>

<script>
import StepButtons from "@/components/StepButtons/StepButtons";

export default {
  name: 'Stepper',
  
  components: {
    StepButtons
  },

  props: {
    currentStep: {
      type: Number,
      default: 0
    },
    steps: {
      type: Array,
      required: true
    }
  },
  
  mounted() {
    document.addEventListener("keyup", this.controlKeyEvents);
  },

  methods: {
    toStep(step) {
      this.$store.dispatch('toStep', step);
    },
    controlKeyEvents(event) {
      if (event.key == '39' || event.key == 'ArrowRight') {
        this.next();
      }

      if (event.key == '37' || event.key == 'ArrowLeft') {
        this.prev();
      }

      if(!isNaN(event.key)) {
        let step = Number(event.key) - 1;
        this.toStep(step);
      }
    },
    next() {
      if (this.currentStep < (this.numberSteps - 1)) {
        this.$store.dispatch('incrementStep');
      }
    },
    prev() {
      if (this.currentStep > 0) {
          this.$store.dispatch('decreaseStep');
      }
    }
  },
  computed: {
    numberSteps() {
      return this.$store.state.steps.length;
    }
  }
}
</script>

<style lang="scss">
  @import "./Stepper.scss";
</style>
