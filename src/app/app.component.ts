import { Component } from '@angular/core';
import { SimpleSignalsComponent } from './components/simple-signals/simple-signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SimpleSignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
