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
        if (this.$store.state.orders.length > 0) {
          return Object.values(this.$store.state.orders
          .filter(order => order.code == this.id))[0] || {};
        }

        //In order to get some data if token api expires
        return {
            'logisticCode': 'delivery',
            'code': '1234',
            'orderDate': '12-03-20',
            'price': '12',
            'cuponId': '',
            'totalDeliveryPrice': '0',
            'totalPrice': '12',
            'pickupDates': [
              {
                'id': '123',
                'pickupDate': '12-03-2020',
                'pickupStart': '9:00',
                'pickupEnd': '12:00'
              }
            ]
          }
      }
  }
}
</script>
