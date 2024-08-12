import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';
const initialValue = {
  books: []
}

const bookStore = (set) => ({
    books: initialValue.books,
    addBook: (title, author, pages, lido) => set((state) => ({ books: [...state.books, { id: uuidv4(), title, author, pages, lido}]})),
    removeBook: (bookId) => set((state) => ({books: state.books.filter((data) => data.id !== bookId)})),
    updateReader: (bookId, newValue) => set((state) => ({books: state.books.map((data) => data.id === bookId ? newValue : data )}))
})

export const useBook = create(bookStore)