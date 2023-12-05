export const formatMonney = (n) => {
  let formattedNumber = n?.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return formattedNumber;
};
