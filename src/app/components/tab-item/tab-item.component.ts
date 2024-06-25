import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-tab-item',
  standalone: true,
  imports: [],
  templateUrl: './tab-item.component.html'
})
export class TabItemComponent {
  title = input.required<string>({ alias: 'tabTitle' });
  active = model<boolean>(false);
}
