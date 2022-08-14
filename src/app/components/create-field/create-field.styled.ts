import styled from 'styled-components';

import { Button } from 'components/button';
import { COLORS } from 'styles/color';

import { Theme } from 'styles/theme';

export const CreateFieldStyled = {
  Wrapper: styled(Theme.GapRow)`
    width: 100%;
  `,

  Button: styled(Button)`
    background-color: ${COLORS.red};

    &:disabled {
      background-color: ${COLORS.darkRed};
    }
  `,
};
