<script setup lang="ts">
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { TProduct } from '../types/TProduct.ts';
import BuyButton from '../components/BuyButton.vue';
import { useQuery } from '../composables/useQuery.ts';

const route = useRoute();

const { data, error, refetch } = useQuery<TProduct>((id) => [
  `/products/${id}`,
  { responseFields: 'id,name,thumbnailUrl,price,description' },
]);

watch<string, true>(() => route.params.id as string, refetch, {
  immediate: true,
});
</script>

<template>
  <main class="x-container">
    <span v-if="error"> Error... </span>
    <div v-else-if="data">
      <h1 class="x-title">
        {{ data.name }}
      </h1>
      <div class="flex gap-8">
        <img
          class="h-64 w-64 rounded object-cover"
          :src="data.thumbnailUrl"
          alt="data.name"
        />
        <div>
          <div class="x-description" v-html="data.description" />
          <div class="mb-2 text-2xl font-bold">${{ data.price }}</div>
          <BuyButton :product="data" />
        </div>
      </div>
    </div>
    <span v-else> Loading... </span>
  </main>
</template>
