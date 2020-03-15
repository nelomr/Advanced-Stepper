<template>
    <div class="orders">
        <div class="orders--title">Información de tus pedidos</div>
        <div class="orders-list">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'order-list'
}
</script>

<style lang="scss">
    @import "./OrdersList.scss";
</style>