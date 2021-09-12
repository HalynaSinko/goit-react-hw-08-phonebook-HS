import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import contactsReducer from "./contacts/contacts-reducer";

// const persistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default store;
