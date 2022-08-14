import styled from 'styled-components';

import { useClickEvent } from 'hooks/event';

import { COLORS } from 'styles/color';

import { cssInput } from 'styles/theme';

import { RWrapper } from 'types/react';

interface Props {
  onClick: () => void;

  isDisabled?: boolean;
}

const Wrapper = styled.button`
  line-height: 1.5;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: max-content;

  color: ${COLORS.white};

  ${cssInput}

  &:disabled {
    background-color: ${COLORS.dimGray};
  }
`;

export const Button: RWrapper<Props> = (props) => {
  const { children, className, isDisabled, onClick } = props;

  const handleClick = useClickEvent(onClick);

  return (
    <Wrapper className={className} disabled={isDisabled} onClick={handleClick}>
      {children}
    </Wrapper>
  );
};
