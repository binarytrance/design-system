import { blue, red, neutral } from './color';
import { primaryFont } from './typography';

// can be broken down further base on text/background etc.
export const theme = {
  primaryColor: blue[100],
  primaryColorHover: blue[200],
  primaryColorActive: red[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  disabledColor: neutral[300],
  primaryFont
};
