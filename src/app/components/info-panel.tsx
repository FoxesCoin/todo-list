import { useState } from 'react';

import { TextField } from 'components/text-field';
import { TodoList } from './todo-list';

import { useAppSelector } from 'hooks/redux';

import { RPage } from 'types/react';

export const InfoPanel: RPage = () => {
  const [search, setSearch] = useState('');

  const todoList = useAppSelector((state) => state.todo.items);

  const showTodoList = todoList.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <TextField value={search} onChange={setSearch} placeholder="Search bar" />{' '}
      <TodoList todoList={showTodoList} />
    </>
  );
};
