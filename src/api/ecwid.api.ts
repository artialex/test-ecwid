const storeId = '58958138';
const token = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD';

export async function request(endpoint: string, search?: Record<string, any>) {
  const url = new URL(`https://app.ecwid.com/api/v3/${storeId}${endpoint}`);

  for (const key in search) {
    if (search[key]) {
      url.searchParams.set(key, search[key]);
    }
  }

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });

  return await response.json();
}
