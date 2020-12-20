import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactReducer from "./contactReducer";

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    allContacts: contactReducer,
  },
  middleware: [...defaultMiddleware],
});

export default store;
