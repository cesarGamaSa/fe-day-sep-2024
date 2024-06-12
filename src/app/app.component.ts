import { Component, inject } from '@angular/core';
import { CurrencyDropdownComponent } from './components/currency-dropdown/currency-dropdown.component';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrencyDropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected currencyService = inject(CurrencyService);
}
