import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import alertReducer from "../features/alert/alertSlice";
import imagesReducer from "../features/images/imagesSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    alerts: alertReducer,
    images: imagesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
