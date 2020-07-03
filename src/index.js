import React from 'react';
import ReactDOM from 'react-dom';

import { PrimaryButton, SecondaryButton, TertiaryButton } from './styles/components/Buttons';
import { GlobalStyles } from './styles/utils/Global';
const App = () => {
  return (
    <main>
      <PrimaryButton disabled onClick={() => console.log('consoles hello world!')}>
        PrimaryButton
      </PrimaryButton>
      <SecondaryButton disabled>Secondary Button</SecondaryButton>
      <TertiaryButton disabled>Tertiary Button</TertiaryButton>
      <GlobalStyles />
    </main>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
