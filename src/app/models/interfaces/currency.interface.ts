export interface Currency {
  code: string;
  symbol: string;
}

export type ExchangeRates = Record<Currency['code'], number>;
