import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { TodoReducer } from './todo.slice';

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
