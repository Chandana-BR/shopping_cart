export const currency = (price) =>
  new Intl.NumberFormat("en-IN", {
    currency: "INR",
    style: "currency",
  }).format(price);
