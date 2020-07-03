import styled from 'styled-components';

const primaryColor = '#003041';
// const secondaryColor = '#005A7A';

export const fontSize = (props) => {
    return (
        `font-size: ${(props)}${`px`};
        font-size: ${props / 16}${'rem'};`
    )
}

export const Button = styled.button`
    min-width: 100px;
    padding: 17px 25px;
    cursor: pointer;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    ${fontSize(20)};
`;

export const PrimaryButton = styled(Button)`
    background-color: ${primaryColor};
    color: #fff;
    border: 0;
`;

export const SecondaryButton = styled(Button)`
    background: transparent;
    border: 2px solid ${primaryColor};
    color: ${primaryColor};
`
export const TertiaryButton = styled(Button)`
    color: ${primaryColor};
    background: transparent;
    border: 0;
`