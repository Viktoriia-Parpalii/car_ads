import {
  persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

// const authConfig = {
//   key: "favorites",
//   storage,
//   whitelist: ["favoriteCars"],
// };
export const rootReducer = combineReducers({
  //   cars: carsReducer,
  //   favorites: persistReducer(authConfig, favoritesReducer),
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
