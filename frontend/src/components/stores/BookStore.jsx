import { create } from "zustand";

const initialValue = {
  books: [{
    title: '',
    author: '',
    pages: '',
  }]
}

const bookStore = (set) => ({
    books: initialValue.books,
    addBook: (title, author, pages) => set((state) => ({ books: [...state.books, { title: title, author: author, pages: pages}]}))
})

export const useBook = create(bookStore)