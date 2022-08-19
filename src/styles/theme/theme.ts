import styled from 'styled-components';

import { cssFlexCenter, cssGap, cssText, Typography } from './theme.preset';

const showCursor = (props: any) => (props.onClick ? 'cursor: pointer;' : '');

export const Theme = {
  Text: styled.span<Typography>`
    ${showCursor}
    ${cssText}
  `,
  FlexLine: styled.div`
    ${showCursor}
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  GapRow: styled.div`
    ${showCursor}
    ${cssGap}
    display: flex;
    align-items: center;
  `,
  GapColumn: styled.div`
    ${showCursor}
    ${cssGap}
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,
  FlexCenter: styled.div`
    ${showCursor}
    ${cssFlexCenter}
  `,
};
