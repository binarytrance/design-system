import React from 'react';
import ReactDOM from 'react-dom';

import {PrimaryButton, SecondaryButton, TertiaryButton} from './components/Buttons';

const App = () => {
    return (
    <div>
        <PrimaryButton onClick={() => console.log('consoles hello world!')}>PrimaryButton</PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
        <TertiaryButton>Tertiary Button</TertiaryButton>
        </div>
        )
    }

ReactDOM.render(<App />, document.querySelector('#root'));