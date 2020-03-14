<template>
  <div class="orders-page">
    <ordersList />
  </div>
</template>

<script>
import ordersList from '@/components/OrdersList/OrdersList.vue';

export default {
  name: 'orders',
  components: {
      ordersList
  },
}
</script>
