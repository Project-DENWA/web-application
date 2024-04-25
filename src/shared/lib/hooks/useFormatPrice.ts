interface FormattedPrice {
  value: string | number;
  isNumber: boolean;
}

function useFormatPrice(cost: number): FormattedPrice {
  if (cost <= 0) {
    return { value: 'Договорная цена', isNumber: false };
  } else {
    return { value: cost, isNumber: true };
  }
}

export default useFormatPrice;
