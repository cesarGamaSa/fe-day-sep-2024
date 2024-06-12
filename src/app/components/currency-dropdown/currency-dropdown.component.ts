import { Component, inject } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './currency-dropdown.component.html',
  styleUrl: './currency-dropdown.component.scss'
})
export class CurrencyDropdownComponent {
  protected currencyService = inject(CurrencyService);
}
