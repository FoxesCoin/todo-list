import { css } from 'styled-components';

import { Color, COLORS } from 'styles/color';
import { FontSize, FONT_SIZES } from 'styles/font-size';

interface Flex {
  gap?: number;
}

export interface Typography {
  color?: Color;
  fontSize?: FontSize;
}

export const cssGap = css<Flex>`
  gap: ${(props) => props.gap ?? 8}px;
`;

export const cssText = css<Typography>(
  ({ color, fontSize }) => `
  ${color ? `color: ${COLORS[color]};` : ''}
  ${fontSize ? `font-size: ${FONT_SIZES[fontSize]};` : ''}
  `
);

export const cssFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const cssFullSize = css`
  min-height: 100%;
  width: 100%;
`;

export const cssInput = css`
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;
