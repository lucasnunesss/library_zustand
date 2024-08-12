import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';
const initialValue = {
  books: []
}

const bookStore = (set) => ({
    books: initialValue.books,
    addBook: (title, author, pages) => set((state) => ({ books: [...state.books, { id: uuidv4(), title, author, pages}]})),
    removeBook: (bookId) => set((state) => ({books: state.books.filter((data) => data.id !== bookId)}))
})

export const useBook = create(bookStore)