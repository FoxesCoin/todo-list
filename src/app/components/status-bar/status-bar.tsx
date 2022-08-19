import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { TodoActions } from 'services/todo.slice';
import { RPage } from 'types/react';

import { StatusBarStyled as Styled } from './status-bar.styled';

export const StatusBar: RPage = () => {
  const todoList = useAppSelector((redux) => redux.todo.items);
  const completedCounter = todoList.reduce(
    (accumulator, item) => accumulator + (item.isComplete ? 1 : 0),
    0
  );

  const dispatch = useAppDispatch();
  const deleteAllCompleted = () => dispatch(TodoActions.removeAllCompleted());

  return (
    <Styled.Wrapper>
      <Styled.Counter background="darkBlue">
        All: {todoList.length}
      </Styled.Counter>
      <Styled.Counter background="darkGreen">
        Completed: {completedCounter}
      </Styled.Counter>
      <Styled.Button
        isDisabled={!completedCounter}
        onClick={deleteAllCompleted}
      >
        Delete All completed
      </Styled.Button>
    </Styled.Wrapper>
  );
};
