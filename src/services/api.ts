const BASE_URL = "https://api.coingecko.com/api/v3";

function coinMarketDataApiUrl(vs_currency: string) {
  const coinMarketRelativeUrl = "/coins/markets";
  const searchParams = `?vs_currency=${vs_currency}`;

  return BASE_URL + coinMarketRelativeUrl + searchParams;
}

async function getRequest(url: string): Promise<unknown> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return response.json();
}

export { BASE_URL, getRequest, coinMarketDataApiUrl };
