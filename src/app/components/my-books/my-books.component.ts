import { Component } from '@angular/core';

@Component({
  selector: 'app-my-books',
  standalone: true,
  imports: [],
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss'
})
export class MyBooksComponent {
  // TODO: use SignalStore or SignalState to create a store that has my books and can add/delete books
  // TODO: create single book component with input its title and an output when the delete button is clicked
}
