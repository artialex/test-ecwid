<script setup lang="ts">
import CategoryView from '../views/CategoryView.vue';
import CategoriesView from '../views/CategoriesView.vue';
import ProductsView from '../views/ProductsView.vue';
</script>

<template>
  <div class="flex flex-col gap-6">
    <h1 class="mb-4 text-4xl">
      <RouterLink to="/"> Products & Categories </RouterLink>
    </h1>
    <CategoryView />
    <CategoriesView />
    <ProductsView />
  </div>
</template>
