import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

type TodoEdit = Omit<Todo, 'isComplete'>;

export interface TodoReduces {
  items: Todo[];
  nextId: number;
}

const INIT_STATE: TodoReduces = {
  items: [],
  nextId: 1,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: INIT_STATE,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push({
        text: action.payload,
        isComplete: false,
        id: state.nextId,
      });
      state.nextId += 1;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeAllCompleted: (state) => {
      state.items = state.items.filter((item) => !item.isComplete);
    },
    editItem: (state, { payload }: PayloadAction<TodoEdit>) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      state.items[index].text = payload.text;
    },
    completeTask: (state, { payload: id }: PayloadAction<number>) => {
      const task = state.items.find((item) => item.id === id);
      if (!task) {
        throw new Error(`Task with this id - ${id} not found.`);
      }
      task.isComplete = true;
    },
  },
});

export const TodoActions = todoSlice.actions;
export const TodoReducer = todoSlice.reducer;
