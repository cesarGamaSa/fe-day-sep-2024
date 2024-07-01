import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

type BooksState = {
  books: string[];
  sort: 'asc' | 'desc';
};

const initialState: BooksState = {
  books: [],
  sort: 'asc',
};

export const BooksStore = signalStore(
  // add state properties to the store
  withState(initialState),
  withComputed(({ books, sort }) => ({
    booksCount: computed(() => books().length),
    sortedBooks: computed(() => {
      const direction = sort() === 'asc' ? 1 : -1;

      return books().sort((a, b) => direction * a.localeCompare(b));
    })
  })),
  withMethods((store) => ({
    addBook(book: string) {
      patchState(store, { books: [...store.books(), book] });
    },
    deleteBook(book: string) {
      patchState(store, { books: store.books().filter((b) => b !== book) })
    },
    updateSort(sort: 'asc' | 'desc') {
      patchState(store, { sort });
    }
  }))
);
