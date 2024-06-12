import { Component } from '@angular/core';
import { CurrencyDropdownComponent } from './components/currency-dropdown/currency-dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrencyDropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fe-day-sep-2024';
}
