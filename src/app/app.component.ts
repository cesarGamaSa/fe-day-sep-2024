import { DecimalPipe } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { CurrencyDropdownComponent } from './components/currency-dropdown/currency-dropdown.component';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrencyDropdownComponent, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected currencyService = inject(CurrencyService);

  // effect example
  constructor() {
    effect(() => console.log(`The current exchange rate is of ${this.currencyService.currentExchangeRate()}`));
  }
}
