<script setup lang="ts">
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { TProducts } from '../types/TProducts.ts';
import Product from '../components/Product.vue';
import { useQuery } from '../composables/useQuery.ts';

const route = useRoute();

const { data, error, refetch } = useQuery<TProducts>((id) => [
  '/products',
  {
    categories: id,
    responseFields: 'items(id,name,thumbnailUrl,price)',
  },
]);

watch<string, true>(() => route.params.id as string, refetch, {
  immediate: true,
});
</script>

<template>
  <h2 class="mb-2 text-2xl">Products</h2>
  <span v-if="error"> Error... </span>
  <div v-else-if="data">
    <ul class="space-y-2">
      <Product v-for="product in data.items" :product="product" />
    </ul>
  </div>
  <span v-else> Loading... </span>
</template>
