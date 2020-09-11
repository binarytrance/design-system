// add decorators - to tell storybook about our themes

import { addParameters } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { contexts } from './contexts';

addParameters({
  backgrounds: [
    { name: 'Default theme', value: '#ffffff', default: true },
    { name: 'Dark theme', value: '#003041' }
  ]
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs); // be more conservative with knobs
addDecorator(withA11y);

// export const parameters = {
//   backgrounds: {
//     default: 'twitter',
//     values: [
//       {
//         name: 'twitter',
//         value: '#00aced'
//       },
//       {
//         name: 'facebook',
//         value: '#3b5998'
//       }
//     ]
//   }
// };
