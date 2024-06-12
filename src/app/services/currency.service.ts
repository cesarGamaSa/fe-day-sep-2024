import { Injectable, computed, signal } from '@angular/core';
import { Currency, ExchangeRates } from '../models/interfaces/currency.interface';
import { CURRENCIES, DEFAULT_PRICE } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  // Currency definition
  readonly currencies = signal<Currency[]>(CURRENCIES).asReadonly();
  readonly currentCurrency = signal<Currency>(CURRENCIES[0]);

  setCurrency(currencyCode: string) {
    const newCurrency = this.currencies().find((c) => c.code === currencyCode);
    if (newCurrency) {
      this.currentCurrency.set(newCurrency);
    }
  }

  // Currency exchange
  readonly exchangeRates = signal<ExchangeRates>({
    USD: 1,
    EUR: 1.14,
    GBP: 1.31,
  }).asReadonly();

  readonly currentExchangeRate = computed<number>(() => this.exchangeRates()[this.currentCurrency().code]);
  readonly price = computed<number>(() => DEFAULT_PRICE / this.currentExchangeRate());
}
