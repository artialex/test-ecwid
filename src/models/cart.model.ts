import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { TProduct } from '../types/TProduct.ts';

export const useCart = defineStore('cart', {
  state: () => ({
    products: useLocalStorage('cart', new Map()),
  }),

  actions: {
    add(item: TProduct) {
      this.products.set(item.id, item);
    },
    remove(id: number) {
      this.products.delete(id);
    },
  },
});
