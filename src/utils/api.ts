const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

async function getRequest(url: string): Promise<unknown> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return response.json();
}

export { API_URL, getRequest };
