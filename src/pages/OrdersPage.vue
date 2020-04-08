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
        if (this.$store.state.orders.length > 0) {
          return this.$store.state.orders
        }

        //In order to get some data if token api expires
        return [
          {
            'logisticCode': 'DELIVERED-PICKUP',
            'code': '1234',
            'orderDate': '12-03-20'
          }
        ]
      }
  }
}
</script>
