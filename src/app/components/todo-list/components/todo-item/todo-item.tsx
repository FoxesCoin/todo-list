import { useState } from 'react';

import { Picture } from 'components/picture';

import { useChangeEvent } from 'hooks/event';

import { Theme } from 'styles/theme';
import { TodoItemStyled as Styled } from './todo-item.styled';

import { RElement } from 'types/react';

interface Props {
  text: string;
  isComplete: boolean;

  removeTodo: () => void;
  editTodo: (newText: string) => void;
  completeTodo: () => void;
}

export const TodoItem: RElement<Props> = (props) => {
  const {
    className = '',
    text,
    isComplete,
    editTodo,
    removeTodo,
    completeTodo,
  } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleChange = useChangeEvent(setNewText);

  const handleClickEdit = () => {
    if (!isEdit) {
      return setIsEdit(true);
    }

    editTodo(newText);
    setIsEdit(false);
  };

  const handleClickRemove = () => {
    setIsDelete(true);
    setTimeout(() => {
      removeTodo();
    }, 500);
  };

  return (
    <Styled.Wrapper
      className={`${className} ${isComplete ? 'todo_complete' : ''} ${
        isDelete ? 'todo_delete' : ''
      }`.trim()}
    >
      <Theme.GapRow>
        <Theme.FlexCenter onClick={completeTodo}>
          <Styled.Icon />
        </Theme.FlexCenter>
        <Styled.TextWrapper>
          <Styled.Text
            autoFocus
            disabled={!isEdit}
            value={newText}
            onChange={handleChange}
          />
        </Styled.TextWrapper>
      </Theme.GapRow>
      <Theme.GapRow gap={16}>
        {!isComplete && (
          <Styled.ImageWrapper onClick={handleClickEdit}>
            <Picture src="pencil" size={20} />
          </Styled.ImageWrapper>
        )}
        <Styled.ImageWrapper onClick={handleClickRemove}>
          <Picture src="bin" size={20} />
        </Styled.ImageWrapper>
      </Theme.GapRow>
    </Styled.Wrapper>
  );
};
