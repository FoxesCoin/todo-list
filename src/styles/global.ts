import { createGlobalStyle } from 'styled-components';

import { COLORS } from './color';
import { FONTS, importFont } from './font';
import { FONT_SIZES } from './font-size';

export const GlobalStyles = createGlobalStyle`

#root {
  color: ${COLORS.white};
  background-color: ${COLORS.background};
  font-size: ${FONT_SIZES.regular};
  font-family: ${FONTS.regular};
}

${Object.values(FONTS).map((font) => importFont(font))}
`;
