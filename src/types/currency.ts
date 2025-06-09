import { CURRENCY_CODES } from "@/constants/currencies";

export type Currency = typeof CURRENCY_CODES[number]['code'];
