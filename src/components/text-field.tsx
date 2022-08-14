import styled from 'styled-components';

import { useChangeEvent } from 'hooks/event';

import { COLORS } from 'styles/color';

import { cssInput } from 'styles/theme';
import { RContainer } from 'types/react';

interface Props {
  value: string | undefined;

  onChange: (value: string) => void;

  isError?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
}

const Field = styled.input`
  color: ${COLORS.white};
  border-color: ${COLORS.white};
  background-color: ${COLORS.black};

  width: 100%;

  ${cssInput}

  &::placeholder {
    color: ${COLORS.spanishGray};
  }

  &:disabled {
    color: ${COLORS.spanishGray};
    background-color: ${COLORS.onyxOpacity};
    border-color: ${COLORS.spanishGray};
  }

  &.field__error {
    border-color: ${COLORS.lightCoral};
  }
`;

export const TextField: RContainer<Props> = (props) => {
  const {
    value,
    isError,
    children,
    className,
    isDisabled,
    placeholder,
    onChange,
  } = props;

  const handleChange = useChangeEvent(onChange);

  return (
    <Field
      type="text"
      contentEditable={false}
      value={value}
      disabled={isDisabled}
      className={`${className} ${isError ? 'field__error' : ''}`}
      placeholder={placeholder}
      onChange={handleChange}
    >
      {children}
    </Field>
  );
};
