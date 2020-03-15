<template v-if="order">
    <div class="order-card">
        <div class="order-card--text">
            <div class="order-card--title">Datos del pedido nº {{ order.code }}</div>
            <div class="order-card--date">Fecha pedido: {{ order.orderDate }}</div>
        </div>
        <div class="order-card--content">
            <div class="order-card--content-title">Productos</div>
            <div class="order-card--box">
                <div v-if="order.cuponId" class="order-card--product">
                    <div class="order-card--product-title">Cupón {{ order.cuponId }}</div>
                    <div class="order-card--product-price">-20 €</div>
                </div>
                <div class="order-card--product">
                    <div class="order-card--product-title">Recogida/entrega</div>
                    <div class="order-card--product-price">{{ order.totalDeliveryPrice }} €</div>
                </div>
            </div>
            <div class="order-card--box">
                <div class="order-card--content-title">Productos Añadidos</div>
                <div
                    v-for="(product) in productsDetailOrder"
                    :key="product.id" 
                    class="order-card--product"
                >
                    <div class="order-card--product-title">
                        <span v-if="product.quantity > 1">{{product.quantity}} x </span> {{ product.name}}
                    </div>
                    <div class="order-card--product-price">{{product.price}} €</div>
                </div>
            </div>
            <div class="order-card--box">
                <div class="order-card--product">
                    <div class="order-card--product-title">Total</div>
                    <div class="order-card--product-price">{{ order.totalPrice }} €</div>
                </div>
            </div>
        </div>
        <div class="order-card--button">
            <button class="button">Cambiar horara recogida y entrega</button>
        </div>
        <div class="order-card--button is-transparent">
            <router-link class="button" :to="{name:'orders'}"> <span>&#8592;</span>VOLVER</router-link>
        </div>
    </div>
</template>

<script>

export default {
  name: 'order-card',
  props: {
      order: {
          type: Object,
          required: true
      }
  },

  created() {
    this.$store.dispatch('getProductsOrder', this.order.productsOrder);
  },

  computed: {
    total() {
      let total = 0;
      this.productsDetailOrder.forEach(product => {
        total +=product.price ;
      });
      return total;
    },

    productsDetailOrder() {
    let details = [];
    this.$store.state.productsDetailOrder.forEach(product => {
        this.order.productsOrder.forEach(productOrder => {
        if(product.id === productOrder.productId) {
            details.push({...productOrder, ...product});
        }
        });
    });

    return details;
    }
  }
}
</script>

<style lang="scss">
    @import "./OrderCard.scss";
</style>