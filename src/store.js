import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./booksSlice";

export default configureStore({
  reducer: {
    counter: bookReducer,
  },
});
