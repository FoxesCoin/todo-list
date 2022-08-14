import { useAppDispatch } from 'hooks/redux';
import { TodoActions } from 'services/todo.slice';

export const useTodoListState = () => {
  const dispatch = useAppDispatch();

  const removeTodo = (id: number) => () => dispatch(TodoActions.removeItem(id));
  const editTodo = (id: number) => (text: string) =>
    dispatch(TodoActions.editItem({ id, text }));
  const completeTodo = (id: number) => () =>
    dispatch(TodoActions.completeTask(id));

  return {
    removeTodo,
    editTodo,
    completeTodo,
  };
};
