import { DecimalPipe } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-simple-signals',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './simple-signals.component.html',
  styleUrl: './simple-signals.component.scss'
})
export class SimpleSignalsComponent {
  protected currencyService = inject(CurrencyService);

  // effect example
  constructor() {
    effect(() => console.log(`The current exchange rate is of ${this.currencyService.currentExchangeRate()}`));
  }
}
