<template v-if="order">
  <div class="card">
    <div class="card--text">
      <div class="card--title">Datos del pedido nº {{ order.code }}</div>
      <div class="card--date">Fecha pedido: {{ order.orderDate }}</div>
    </div>
    <div class="card--content">
      <div class="card--content-title">Productos</div>
      <div class="card--box">
        <div v-if="order.cuponId" class="card--product">
          <div class="card--product-title">Cupón {{ order.cuponId }}</div>
          <div class="card--product-price">-20 €</div>
        </div>
        <div class="card--product">
          <div class="card--product-title">Recogida/entrega</div>
          <div class="card--product-price">{{ order.totalDeliveryPrice }} €</div>
        </div>
      </div>
      <div class="card--box">
        <div class="card--content-title">Productos Añadidos</div>
        <div
          v-for="(product) in productsDetailOrder"
          :key="product.id" 
          class="card--product"
        >
          <div class="card--product-title">
              <span v-if="product.quantity > 1">{{product.quantity}} x </span> {{ product.name}}
          </div>
          <div class="card--product-price">{{product.price}} €</div>
        </div>
      </div>
      <div class="card--box">
        <div class="card--product">
          <div class="card--product-title">Total</div>
          <div class="card--product-price">{{ order.totalPrice }} €</div>
        </div>
      </div>
    </div>
    <div class="card--button">
      <Collapse-Component :open-default="false">
          <template slot="collapse-component-header">
              <button class="button">Cambiar hora recogida y entrega</button>
          </template>
          <template slot="collapse-component-content">
            <form action="#" v-if="order.pickupDates.length > 0">
              <div
                v-for="(option, index) in order.pickupDates"
                class="input-radio"
                :key="'option'+index"
              >
                <input v-if="index === 0" type="radio" :id="'option'+index" name="date" :value="option.id" checked>
                <input v-else type="radio" :id="'option'+index" name="date" :value="option.id">
                <label :for="'option'+index">{{ option.pickupDate }} - {{ option.pickupStart }} - {{ option.pickupEnd }}</label>
              </div>
              <div class="card--button">
                <button class="button is-small">
                  Cambiar
                </button>
              </div>
            </form>
          </template>
      </Collapse-Component>
    </div>
    <div class="card--button is-transparent">
      <router-link class="button" :to="{name:'orders'}"> <span>&#8592;</span>VOLVER</router-link>
    </div>
  </div>
</template>

<script>
import CollapseComponent from '@/components/CollapseComponent/CollapseComponent';

export default {
  name: 'card',
  components: {
    CollapseComponent
  },
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
    productsDetailOrder() {
    let details = [];

    if(this.$store.state.productsDetailOrder.length > 0) {
      this.$store.state.productsDetailOrder.forEach(product => {
        this.order.productsOrder.forEach(productOrder => {
          if(product.id === productOrder.productId) {
            details.push({...productOrder, ...product});
          }
        });
      });

      return details;
    }

    //In order to get some data if token api expires
    return [
      {
        'id': '12',
        'quantity': '2',
        'name': 'Chaqueta',
        'price': '12'
      }
    ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "./OrderCard.scss";
</style>