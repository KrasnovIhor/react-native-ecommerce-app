export const comparePrices = (newPrice: string, oldPrice: string) => {
  return Math.round(100 - (Number(newPrice) / Number(oldPrice)) * 100);
};
