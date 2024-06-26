import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

type BooksState = {
  books: string[];
  order: 'asc' | 'desc';
};

const initialState: BooksState = {
  books: [],
  order: 'asc',
};

export const BooksStore = signalStore(
  withState(initialState),
  withComputed(({ books }) => ({
    booksCount: computed(() => books().length)
  })),
  withMethods((store) => ({
    addBook(book: string) {
      patchState(store, { books: [...store.books(), book] });
    },
    deleteBook(book: string) {
      patchState(store, { books: store.books().filter((b) => b !== book) })
    }
  }))
);
