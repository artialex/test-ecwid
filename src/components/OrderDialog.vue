<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

defineProps({
  open: Boolean,
});

const emit = defineEmits(['modal-close']);

const target = ref(null);
onClickOutside(target, () => emit('modal-close'));
</script>

<template>
  <div v-if="open" class="overlay">
    <div>
      <div class="container" ref="target">
        <div class="flex flex-col gap-8">
          <div class="font-bold">Congratulations with your purchases!</div>

          <button class="x-button" @click.stop="emit('modal-close')">
            Close window
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.overlay {
  @apply fixed inset-0 z-50 bg-black bg-opacity-50;
}

.container {
  @apply mx-auto mt-40 w-fit min-w-40 rounded bg-white p-6;

  //width: 300px;
  //margin: 150px auto;
  //padding: 20px 30px;
  //background-color: #fff;
  //border-radius: 2px;
  //box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
