import { Component, inject } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './currency-dropdown.component.html'
})
export class CurrencyDropdownComponent {
  protected currencyService = inject(CurrencyService);
}
