import React, { useState } from 'react';
import { GlobalStyles, theme, darkTheme } from './styles/utils';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
// import { PrimaryButton, SecondaryButton, TertiaryButton } from './styles/components/Buttons';
import { SignUpModal } from './styles/components/Modal';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  console.log(theme.status.successColor);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : theme}>
      <button
        style={{ margin: '10px 20px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark Theme
      </button>
      <button
        style={{ margin: '10px 20px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default Theme
      </button>
      <div
        style={{
          background: useDarkTheme ? theme.primaryColor : darkTheme.primaryColor,
          width: '100vw',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        {/* <PrimaryButton
          modifiers={['primaryButtonWarning']}
          onClick={() => console.log('consoles hello world!')}
        >
          PrimaryButton
        </PrimaryButton>
        <SecondaryButton modifiers={['large', 'success', 'secondaryButtonSuccess']}>
          Secondary Button
        </SecondaryButton>
        <TertiaryButton modifiers='small'>Tertiary Button</TertiaryButton> */}
        <SignUpModal />
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
