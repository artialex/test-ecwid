import { ref } from 'vue';
import { request } from '../api/ecwid.api.ts';

export function useQuery<T>(
  params: (id: string) => [string, object?],
  requireId?: boolean,
) {
  const loading = ref(false);
  const data = ref<T | null>(null);
  const error = ref(null);

  function refetch(id: string) {
    error.value = data.value = null;

    if (requireId && !id) return;

    loading.value = true;

    const [endpoint, search] = params(id);

    request(endpoint, search)
      .then((response) => (data.value = response))
      .catch((err) => (error.value = err.toString()))
      .finally(() => (loading.value = false));
  }

  return { data, error, loading, refetch };
}
