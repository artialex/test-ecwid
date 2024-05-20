<script lang="ts" setup>
import { useCart } from '../models/cart.model.ts';
import CartIcon from '../assets/shopping-cart.svg';

const cart = useCart();
</script>
<template>
  <nav
    class="sticky top-0 flex justify-between bg-slate-100 px-2 py-2 text-right"
  >
    <RouterLink class="inline-block rounded p-1 px-2 hover:bg-slate-300" to="/"
      >Home</RouterLink
    >
    <RouterLink
      class="inline-flex gap-2 rounded p-1 px-2 hover:bg-slate-300"
      to="/cart"
    >
      <img width="20" :src="CartIcon" alt="Your SVG" />
      ({{ cart.products.size }})</RouterLink
    >
  </nav>
</template>
