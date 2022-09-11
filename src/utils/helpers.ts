function convertToUSD(value: number) {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function isPositive(value: number) {
  return value > 0;
}

export { convertToUSD, isPositive };
