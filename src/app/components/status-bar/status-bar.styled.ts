import { Button } from 'components/button';
import styled from 'styled-components';
import { Color, COLORS } from 'styles/color';
import { cssInput, Theme } from 'styles/theme';

export const StatusBarStyled = {
  Wrapper: styled(Theme.FlexLine)``,
  Counter: styled(Theme.FlexCenter)<{ background: Color }>`
    width: 200px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    background-color: ${(props) => COLORS[props.background]};
    ${cssInput}
  `,
  Button: styled(Button)`
    background-color: ${COLORS.darkRed};
    font-size: 20px;
    font-weight: bold;
  `,
};
