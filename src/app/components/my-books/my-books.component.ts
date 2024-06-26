import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksStore } from '../../stores/books.store';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-my-books',
  standalone: true,
  imports: [FormsModule, BookComponent],
  providers: [BooksStore],
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss'
})
export class MyBooksComponent {
  readonly store = inject(BooksStore);

  titleValue: string = '';

  onAddNewBook() {
    this.store.addBook(this.titleValue);
    this.titleValue = '';
  }

  onBookDelete(book: string) {
    this.store.deleteBook(book);
  }
}
