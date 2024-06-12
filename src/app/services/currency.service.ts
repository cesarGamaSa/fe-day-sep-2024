import { Injectable, signal } from '@angular/core';
import { Currency } from '../models/interfaces/currency.interface';
import { CURRENCIES } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  readonly currencies = signal<Currency[]>(CURRENCIES);

  readonly currentCurrency = signal<Currency>(CURRENCIES[0]);

  setCurrency(currencyCode: string) {
    const newCurrency = this.currencies().find((c) => c.code === currencyCode);
    if (newCurrency) {
      this.currentCurrency.set(newCurrency);
    }
  }
}
