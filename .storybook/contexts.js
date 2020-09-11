// for changing language/changing theme
import { ThemeProvider } from 'styled-components';
import { theme, darkTheme } from '../src/styles/utils';

export const contexts = [
  {
    icon: 'box', //an icon displayed in the Storybook toolbar to control contextual props
    title: 'Theme', // a unique name of a contextual environment
    components: [ThemeProvider],
    params: [
      // an array of params contains a set of predefined 'props' for 'components'
      { name: 'Default Theme', props: { theme: theme, default: true } },
      { name: 'Dark Theme', props: { theme: darkTheme } }
    ],
    options: {
      deep: true, // pass the porps deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false // allow this contextual environemnt to be opt-out optionally in toolbar
    }
  }
];
