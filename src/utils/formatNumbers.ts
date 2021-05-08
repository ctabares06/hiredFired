export const formatMonetary = (number : number) : string => {
  const formater = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formater.format(number);
}

export const formatNumberDecimals = (number : number) : string => {
  const formater = new Intl.NumberFormat('en-US', {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formater.format(number);
}