import React from 'react';
import ReactDOM from 'react-dom';

import { PrimaryButton, SecondaryButton, TertiaryButton } from './styles/components/Buttons';
import { GlobalStyles } from './styles/utils/Global';
const App = () => {
  return (
    <div>
      <PrimaryButton onClick={() => console.log('consoles hello world!')}>
        PrimaryButton
      </PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <TertiaryButton>Tertiary Button</TertiaryButton>
      <GlobalStyles />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
