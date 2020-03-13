<template>
  <div id="app">
    <stepper :currentStep="step" :steps="steps"/>
    <router-view />
  </div>
</template>

<script>
import Stepper from '@/components/Stepper/Stepper'

export default {
  name: 'app',

  components: {
    Stepper
  },

  computed: {
    step() {
      return this.$store.state.step;
    },
    steps() {
      return this.$store.state.steps;
    }
  }
}
</script>
