<script setup lang="ts">
import BuyButton from './BuyButton.vue';
import { TProduct } from '../types/TProduct.ts';

defineProps<{ product: TProduct }>();
</script>

<template>
  <li class="x-product">
    <RouterLink
      class="flex flex-grow gap-4 rounded p-4 hover:bg-slate-100"
      :to="'/products/' + product.id"
    >
      <img
        class="h-16 w-16 rounded object-cover"
        :src="product.thumbnailUrl"
        alt="product.name"
      />
      <div class="flex w-full justify-between">
        <div>
          {{ product.name }}
        </div>
        <div class="flex flex-col items-end justify-between">
          <span class="font-semibold">${{ product.price }} </span>
          <BuyButton :product="product" />
        </div>
      </div>
    </RouterLink>
  </li>
</template>
