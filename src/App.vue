<template>
  <div id="app">
    <stepper :currentStep="step" :steps="steps"/>
    <step-one/>
  </div>
</template>

<script>
import Stepper from '@/components/Stepper/Stepper'
import StepOne from '@/components/StepOne'

export default {
  name: 'app',

  components: {
    Stepper,
    StepOne
  },

  data () {
    return {
      steps: [
        { name: 'Components', },
        { name: 'CSS styles', },
        { name: 'API request', },
        { name: 'New feature', },
        { name: 'Tests', },
      ]
    }
  },
  computed: {
    step() {
      return this.$store.state.step;
    }
  }
}
</script>
