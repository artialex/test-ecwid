<script setup lang="ts">
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { TCategories } from '../types/TCategories.ts';
import { useQuery } from '../composables/useQuery.ts';

const route = useRoute();

const { data, error, refetch } = useQuery<TCategories>((id) => [
  '/categories',
  {
    parent: id,
    responseFields: 'count,items(id,name,parentId,thumbnailUrl)',
  },
]);

watch<string, true>(() => route.params.id as string, refetch, {
  immediate: true,
});
</script>

<template>
  <span v-if="error"> Error... </span>
  <template v-else-if="data">
    <div v-if="data.count > 0">
      <h2 class="mb-2 text-2xl">Categories</h2>
      <ul class="space-y-2">
        <li class="x-product" v-for="item in data.items">
          <RouterLink
            class="flex w-full gap-4 rounded p-4 hover:bg-slate-100"
            :to="'/categories/' + item.id"
          >
            <img
              class="h-16 w-16 rounded object-cover"
              :src="item.thumbnailUrl"
              alt=""
            />
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </template>
  <span v-else> Loading... </span>
</template>
