import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./contacts-actions";
import {fetchContacts, addContact, removeContact } from "./contacts-operations";

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//     loading: false,
//     error: null,
//   },
// };
// const initialContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loadingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [addContact.rejected]: (_, { payload }) => payload,
  [removeContact.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContact.pending]: () => null,
  [removeContact.rejected]: () => null,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
