<template>
  <div class="orders-page">
    <OrdersList>
      <OrderCard
        :order="order"
      />
    </OrdersList>
  </div>
</template>

<script>
import OrdersList from '@/components/OrdersList/OrdersList.vue';
import OrderCard from '@/components/OrderCard/OrderCard.vue';


export default {
  name: 'orders',
  components: {
    OrdersList,
    OrderCard
 },
 props: {
    id: {
      required: true,
      type: String
    }
 },

  computed: {
      order() {
        return Object.values(this.$store.state.orders
        .filter(order => order.code == this.id))[0] || {};
      }
  }
}
</script>
