function convertToUSD(value: number | undefined | null) {
  if (value === undefined || value === null) return "-";

  const withoutCents = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const withCents = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const valueInUsd =
    value % 1 === 0 ? withoutCents.format(value) : withCents.format(value);

  return valueInUsd;
}

function isPositive(value: number) {
  return value > 0;
}

function convertIsoToDateString(isoFormat: string) {
  const date = new Date(isoFormat);
  const dateString = date.toDateString();

  const [_, month, day, year] = dateString.split(" ");

  return `${month} ${day}, ${year}`;
}

function convertIsoToDateTimeString(isoFormat: string) {
  const date = new Date(isoFormat);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const prependZeroMinute = minute < 10 ? "0" + minute : minute;

  const second = date.getSeconds();
  const prependZeroSecond = second < 10 ? "0" + second : second;

  return `${convertIsoToDateString(
    isoFormat
  )} ${hour}:${prependZeroMinute}:${prependZeroSecond} `;
}

function convertToPercentage(number: number) {
  const roundToTwo = Math.round((number + Number.EPSILON) * 100) / 100;
  const numberWithSeparator = roundToTwo.toLocaleString();
  return numberWithSeparator + "%";
}

function range(start: number, end: number) {
  const length = end - start + 1;
  return Array.from(new Array(length), (_, i) => i + start);
}

function showValueOrDash(value: number | undefined) {
  return value ? value.toLocaleString() : "-";
}

export {
  convertToUSD,
  isPositive,
  convertIsoToDateString,
  convertIsoToDateTimeString,
  convertToPercentage,
  range,
  showValueOrDash,
};
