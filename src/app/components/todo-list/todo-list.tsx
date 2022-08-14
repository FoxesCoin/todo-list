import { TodoItem } from './components';

import { useTodoListState } from './todo-list.state';

import { Todo } from 'services/todo.slice';
import { RElement } from 'types/react';

import { Theme } from 'styles/theme';

interface Props {
  todoList: Todo[];
}

export const TodoList: RElement<Props> = (props) => {
  const { todoList } = props;
  const { removeTodo, editTodo, completeTodo } = useTodoListState();

  return (
    <Theme.GapColumn>
      {todoList.map(({ id, isComplete, text }) => (
        <TodoItem
          key={id}
          isComplete={isComplete}
          text={text}
          removeTodo={removeTodo(id)}
          editTodo={editTodo(id)}
          completeTodo={completeTodo(id)}
        />
      ))}
    </Theme.GapColumn>
  );
};
