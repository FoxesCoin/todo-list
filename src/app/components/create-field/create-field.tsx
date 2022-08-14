import { useState } from 'react';

import { TextField } from 'components/text-field';

import { useAppDispatch } from 'hooks/redux';
import { TodoActions } from 'services/todo.slice';

import { RPage } from 'types/react';

import { CreateFieldStyled as Styled } from './create-field.styled';

export const CreateField: RPage = () => {
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();
  const addNewTask = () => dispatch(TodoActions.addItem(name));

  const handleClick = () => {
    addNewTask();
    setName('');
  };

  return (
    <Styled.Wrapper gap={24}>
      <TextField value={name} onChange={setName} placeholder="Add new task!" />
      <Styled.Button isDisabled={!name.trim()} onClick={handleClick}>
        + Add task
      </Styled.Button>
    </Styled.Wrapper>
  );
};
