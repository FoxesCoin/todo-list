import { ReactComponent as CheckMark } from 'assets/icons/check-mark.svg';
import AutosizeInput from 'react-input-autosize';
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
  Wrapper: styled(Theme.FlexLine)`
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
  Icon: styled(CheckMark)`
    width: 32px;
    height: 32px;
    transition: opacity 0.5s, width 0.3s 0.2s, height 0.3s 0.2s,
      padding 0.3s 0.2s;
    padding: 8px;
    border-radius: 50%;

    &:hover {
      background-color: ${COLORS.onyx};
      fill: ${COLORS.lightGreen};
    }

    .todo_complete & {
      opacity: 0;
      height: 0;
      width: 0;
      padding: 0;
    }
  `,
  TextWrapper: styled.div`
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
  Text: styled(AutosizeInput)`
    input {
      background-color: transparent;
    }
    color: ${COLORS.white};
  `,
  ImageWrapper: styled(Theme.FlexCenter)`
    padding: 0.5rem;
    border-radius: 0.25rem;
    transition: 0.2s all;

    &:hover {
      background-color: ${COLORS.onyx};
    }
  `,
};
