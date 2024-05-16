const BASE_URL = 'http://localhost:8033/actor/';

export async function get(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) throw new Error('An error occurred while fetching the data.');
  return await response.json();
}

export async function post(endpoint, data) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('An error occurred while posting the data.');
  return await response.json();
}