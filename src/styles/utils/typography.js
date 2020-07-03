export const primaryFont = '"Roboto Mono", monospace';

/**
 * @param {Number} fontSize font size is to be passed without the px suffix to get a rem value and a also a px fallback. converts px values to rem. rem ensure better accessibility
 * @return { a string with font sizes in px and rem}
 */
export const rem = props => {
  return `font-size: ${props}${`px`};
          font-size: ${props / 16}${'rem'};`;
};

export const typeScale = {
  header1: `${rem(28)}`,
  header2: `${rem(25)}`,
  header3: `${rem(22)}`,
  header4: `${rem(20)}`,
  header5: `${rem(18)}`,
  paragraph: `${rem(16)}`,
  helperText: `${rem(14)}`,
  copyrightText: `${rem(12)}`
};
