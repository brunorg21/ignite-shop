import { ProductsOnCart } from "@/context/CartContext";

export function useSummary(arr: ProductsOnCart[]) {
  const summary = arr.reduce(
    (acc, item) => {
      const findNumber = item.price.match(/\d+,\d+/);
      if (findNumber) {
        const floatNumber = findNumber[0].replace(",", ".");
        const number = parseFloat(floatNumber);
        acc.total = number + acc.total;
      }

      return acc;
    },
    {
      total: 0,
    }
  );

  return {
    summary,
  };
}
