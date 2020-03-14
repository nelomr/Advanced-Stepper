<template>
    <div class="orders">
        <div class="orders--title">Información de tus pedidos</div>
        <div class="orders-list">
            <orderItem
                v-for="(order, index) in orderList"
                :key="'order' + index"
                :order="order"
            />
        </div>
    </div>
</template>

<script>
import orderItem from '@/components/OrderItem/OrderItem.vue';

export default {
  name: 'order-list',
  components: {
      orderItem
  },
  computed: {
      orderList() {
          return this.$store.state.orders
      }
  }
}
</script>

<style lang="scss">
    @import "./OrdersList.scss";
</style>