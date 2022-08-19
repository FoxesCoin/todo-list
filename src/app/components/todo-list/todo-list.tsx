import { TodoItem } from './components';

import { useTodoListState } from './todo-list.state';

import { Todo } from 'services/todo.slice';
import { RElement } from 'types/react';

import styled from 'styled-components';

interface Props {
  todoList: Todo[];
}

const Wrapper = styled.div`
  display: grid;
  gap: 8px;
  grid-auto-rows: min-content;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TodoList: RElement<Props> = (props) => {
  const { todoList } = props;
  const { removeTodo, editTodo, completeTodo } = useTodoListState();

  return (
    <Wrapper>
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
    </Wrapper>
  );
};
