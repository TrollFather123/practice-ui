import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "../slice/rootReducer";
import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const _combined = combineReducers(rootReducer);

const persistedReducer = persistReducer(persistConfig, _combined);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
