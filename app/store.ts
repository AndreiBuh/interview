import { configureStore } from "@reduxjs/toolkit";

import UsersReducer from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
