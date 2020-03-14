<template>
  <div id="app">
    <stepper
    :currentStep="step"
    :steps="steps"
    :nameTop="true" />
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

  created() {
    this.$store.dispatch('fetchOrders');
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
