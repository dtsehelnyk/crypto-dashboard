import { Currency } from "@/types/currency";

export const formatCurrency = (value: number, currency: Currency): string => {
  return new Intl.NumberFormat('eu-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  }).format(value);
}

export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('eu-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  }).format(value / 100)
}
