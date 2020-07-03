import styled from 'styled-components';
import { theme, typeScale } from '../utils';

export const Button = styled.button`
  min-width: 100px;
  padding: 17px 25px;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  ${typeScale.header4};
  position: relative;
  transition: all 0.2s linear;
  &:hover {
    background-color: ${theme.primaryColorHover};
    border-color: ${theme.primaryColorHover};
    color: ${theme.textColorOnPrimary};
  }
  &:focus {
    border-color: ${theme.primaryColorHover};
    background-color: ${theme.primaryColorHover};
    outline: 2px solid ${theme.primaryColorHover};
    outline-offset: 10px;
    color: ${theme.textColorOnPrimary}
    /* &:before {
      position: absolute;
      content: '';
      border: solid 1px ${theme.primaryColorHover};
      border-radius: 5px;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      left: -10px;
      top: -10px;
    } */
  }
  &:active {
    background-color: ${theme.primaryColorActive};
    border-color: ${theme.primaryColorActive};
    color: ${theme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${theme.disabledColor};
    border: none;
  }
`;
export const PrimaryButton = styled(Button)`
  background-color: ${theme.primaryColor};
  color: #fff;
  border: 0;
  &:disabled {
    background-color: ${theme.disabledColor};
    color: ${theme.textColorOnPrimary};
    border-color: ${theme.disabledColor};
  }
`;
export const SecondaryButton = styled(Button)`
  background: transparent;
  border: 2px solid ${theme.primaryColor};
  color: ${theme.primaryColor};

  &:disabled {
    border: 2px solid ${theme.disabledColor};
    color: ${theme.disabledColor};
  }
`;
export const TertiaryButton = styled(Button)`
  color: ${theme.primaryColor};
  background: transparent;
  border: 0;
  &:disabled {
    color: ${theme.disabledColor};
  }
`;
