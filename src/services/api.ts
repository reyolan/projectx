const BASE_URL = "https://api.coingecko.com/api/v3";

function coinMarketDataApiUrl(vs_currency: string) {
  const coinMarketRelativeUrl = "/coins/markets";
  const searchParams = `?vs_currency=${vs_currency}`;

  return BASE_URL + coinMarketRelativeUrl + searchParams;
}

export { BASE_URL, coinMarketDataApiUrl };
