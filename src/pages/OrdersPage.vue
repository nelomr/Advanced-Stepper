<template>
  <div class="orders-page">
    <ordersList>
      <OrderItem
          v-for="(order, index) in ordersList"
          :key="'order' + index"
          :order="order"
      />
    </ordersList>
  </div>
</template>

<script>
import OrdersList from '@/components/OrdersList/OrdersList.vue';
import OrderItem from '@/components/OrderItem/OrderItem.vue';

export default {
  name: 'orders',
  components: {
      OrdersList,
      OrderItem
  },
  computed: {
      ordersList() {
          return this.$store.state.orders
      }
  }
}
</script>
