<script setup lang="ts">
import { useCart } from '../models/cart.model.js';
import { TProduct } from '../types/TProduct.ts';

const cart = useCart();

defineProps<{ product: TProduct }>();
</script>

<template>
  <button
    class="x-button bg-emerald-500 hover:bg-emerald-400"
    :class="cart.products.has(product.id) && 'in-cart'"
    @click.prevent="
      cart.products.has(product.id)
        ? cart.remove(product.id)
        : cart.add(product)
    "
  >
    {{ cart.products.has(product.id) ? 'Delete' : 'Add' }}
  </button>
</template>

<style lang="postcss" scoped>
.in-cart {
  @apply bg-rose-500 hover:bg-rose-400;
}
</style>
