<script setup lang="ts">
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { TCategory } from '../types/TCategory.ts';
import { useQuery } from '../composables/useQuery.ts';

const route = useRoute();

const { data, error, refetch } = useQuery<TCategory>(
  (id) => [`/categories/${id}`, { responseFields: 'id,name,parentId' }],
  true,
);

watch<string, true>(() => route.params.id as string, refetch, {
  immediate: true,
});
</script>

<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-else-if="data">
    <RouterLink
      class="x-button"
      v-if="data.parentId"
      :to="'/categories/' + data.parentId"
    >
      Show parent categories
    </RouterLink>
    <h2 class="mb-4 mt-2 text-3xl">
      {{ data.name }}
    </h2>
  </div>
</template>
