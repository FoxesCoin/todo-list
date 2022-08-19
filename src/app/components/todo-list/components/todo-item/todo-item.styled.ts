import { ReactComponent as CheckMark } from 'assets/icons/check-mark.svg';
import styled, { keyframes } from 'styled-components';

import { COLORS } from 'styles/color';

import { cssInput, Theme } from 'styles/theme';

const animation = 'transition: 0.3s all;';

const fadeOut = keyframes`
  0% {

  }

  100%{ 
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const TodoItemStyled = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    ${cssInput}
    background-color: ${COLORS.onyxOpacity};
    border-left: 10px solid ${COLORS.lightRed};
    ${animation}

    &.todo_complete {
      border-left-color: ${COLORS.lightGreen};
    }

    &.todo_delete {
      animation: ${fadeOut} 0.6s;
    }
  `,
  TextWrapper: styled(Theme.GapRow)`
    width: 100%;
  `,
  Icon: styled(CheckMark)`
    width: 24px;
    height: 24px;
    transition: opacity 0.5s, width 0.3s 0.2s, height 0.3s 0.2s,
      padding 0.3s 0.2s;

    border: 2px solid ${COLORS.white};
    border-radius: 8px;
    padding: 4px;

    path {
      transition: all 0.2s;
      opacity: 0;
    }

    &:hover path {
      opacity: 1;
    }

    .todo_complete & {
      opacity: 0;
      height: 0;
      width: 0;
      padding: 0;
    }
  `,
  Text: styled.span`
    position: relative;
    ${animation}

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      height: 2px;
      background-color: ${COLORS.white};
      width: 0px;
      ${animation}
    }

    .todo_complete & {
      opacity: 0.5;

      &::before {
        width: 100%;
      }
    }
  `,
  EditInput: styled.input`
    width: 100%;
    background-color: transparent;
    color: ${COLORS.white};
    border-bottom: 1px solid ${COLORS.white};
  `,
  ImageWrapper: styled(Theme.FlexCenter)`
    padding: 0.5rem;
    border-radius: 0.25rem;
    transition: 0.2s all;
    flex: 0 0 auto;

    &:hover {
      background-color: ${COLORS.onyx};
    }
  `,
};
