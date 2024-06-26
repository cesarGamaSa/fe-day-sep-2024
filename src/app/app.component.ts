import { Component } from '@angular/core';
import { SimpleSignalsComponent } from './components/simple-signals/simple-signals.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabItemComponent } from './components/tab-item/tab-item.component';
import { MyBooksComponent } from './components/my-books/my-books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SimpleSignalsComponent, TabsComponent, TabItemComponent, MyBooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tabClicked() {
    console.log('Tab 2 changed its active value!!!');
  }
}
