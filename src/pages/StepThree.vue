<template>
  <div class="step">
    <div class="apires" v-if="apiResponse.length > 0">
      <div>Respuesta API OK</div>
      <div>Número de pedidos {{ apiResponse.length }}</div>
      <div v-for="order in apiResponse" :key="order.id">{{order.code}}</div>
    </div>
    <div class="apires" v-else>
      Respuesta API ERROR
    </div>
   <div class="exercise">
      <h1>Step 3</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'step-three',
  computed: {
    apiResponse() {
      return this.$store.state.orders;
    }
  }
}
</script>
