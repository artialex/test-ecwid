<script setup lang="ts">
import { useCart } from '../models/cart.model.js';
import { ref } from 'vue';
import OrderDialog from './OrderDialog.vue';
import Product from './Product.vue';

const cart = useCart();
const open = ref(false);
</script>

<template>
  <h1 class="x-title">Shopping Cart</h1>
  <div v-if="cart.products.size === 0">No products in the cart</div>
  <div v-else>
    <ul class="mb-2">
      <Product :product="product" v-for="[_, product] in cart.products" />
    </ul>
    <button class="x-button" @click="open = true">Place order</button>
    <OrderDialog :open="open" @modal-close="open = false" />
  </div>
</template>
