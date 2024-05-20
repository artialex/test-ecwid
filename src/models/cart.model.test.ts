import { setActivePinia, createPinia } from 'pinia';
import { beforeEach, describe, it, expect } from 'vitest';
import { useCart } from './cart.model.ts';

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should add and remove products', () => {
    const cart = useCart();
    expect(cart.products.size).toBe(0);
    cart.add({
      id: 1,
      name: 'Test',
      price: 100,
      thumbnailUrl: 'urlstring',
      description: 'description',
    });
    expect(cart.products.size).toBe(1);
    cart.remove(1);
    expect(cart.products.size).toBe(0);
  });
});
