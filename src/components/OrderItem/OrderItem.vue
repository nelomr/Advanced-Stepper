<template v-if="order">
  <div class="order">
    <div class="order--content">
      <div class="order--icon">
        <img v-if="order.logisticCode === 'DELIVERED-PICKUP'" src="@/assets/images/delivery.png" alt="marcador">
        <img v-else src="@/assets/images/marcador.png" alt="marcador">
      </div>
      <div class="order--text">
        <div class="order--title">Pedido nº {{ order.code }}</div>
        <div class="order--date">Fecha pedido: {{ order.orderDate }}</div>
      </div>
    </div>
      <div :id="order.code" class="order--button">
        <router-link class="button"
          :to="{name:'orderId', params: {id: order.code}}"
        >
          VER PEDIDO
        </router-link>
      </div>
  </div>
</template>

<script>

export default {
  name: 'order',
  props: {
    order: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "./OrderItem.scss";
</style>