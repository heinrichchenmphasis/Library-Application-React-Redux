import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    currentId: 0,
    list: [],
  },
  reducers: {
    bookAdded(state, action) {
      const { title, author, bookReference } = action.payload;
      state.list.push({
        title: title,
        author: author,
        bookReference: bookReference,
        id: state.currentId,
      });
      state.currentId++;
    },
    bookUpdated(state, action) {
      const { title, author, bookReference, id } = action.payload;
      const existingBook = state.list.find((book) => book.id === id);

      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
        existingBook.bookReference = bookReference;
      }
    },
    bookDeleted(state, action) {
      const { id } = action.payload;

      let index = state.list.findIndex((book) => book.id == id);
      if (index != -1) {
        state.list.splice(index, 1);
      }
    },
  },
});

export const { bookAdded, bookUpdated, bookDeleted } = booksSlice.actions;

export default booksSlice.reducer;
