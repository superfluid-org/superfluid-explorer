import Decimal from "decimal.js";

export const getDecimalPlacesToRoundTo = (value: Decimal): number => {
  if (value.isZero()) {
    return 0;
  }

  const absoluteValue = value.abs();

  if (absoluteValue.gte(1000)) {
    return 0;
  }

  if (absoluteValue.gte(100)) {
    return 1;
  }

  if (absoluteValue.gte(10)) {
    return 2;
  }

  if (absoluteValue.gte(0.099)) {
    return 4;
  }

  if (absoluteValue.gte(0.00099)) {
    return 6;
  }

  if (absoluteValue.gte(0.0000099)) {
    return 8;
  }

  if (absoluteValue.gte(0.000000099)) {
    return 12;
  }

  if (absoluteValue.gte(0.0000000000099)) {
    return 16;
  }

  return 18;
};
