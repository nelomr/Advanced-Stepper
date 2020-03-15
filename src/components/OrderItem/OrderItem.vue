<template v-if="order">
    <div class="order-item">
        <div class="order-item--content">
            <div class="order-item--icon">
                <img v-if="order.logisticCode === 'DELIVERED'" src="@/assets/delivery.png" alt="marcador">
                <img v-else src="@/assets/marcador.png" alt="marcador">
            </div>
            <div class="order-item--text">
                <div class="order-item--title">Pedido nº {{ order.code }}</div>
                <div class="order-item--date">Fecha pedido: {{ order.orderDate }}</div>
            </div>
        </div>
        <div class="order--button">
            <router-link class="button" :to="{name:'orderId', params: {id: order.code}}">VER PEDIDO</router-link>
        </div>
    </div>
</template>

<script>

export default {
  name: 'order-item',
  props: {
      order: {
          type: Object,
          required: true
      }
  }
}
</script>

<style lang="scss">
    @import "./OrderItem.scss";
</style>