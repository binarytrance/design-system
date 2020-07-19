import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  small: () => `
    padding: 8px 15px;
    ${typeScale.paragraph}
  `,
  large: () => `
    ${typeScale.header3};
    padding: 24px 32px
  `,
  warning: () => `
    background: none;
    color: ${props => props.status.warningColor};
    &:hover, &:focus {
      background-color: ${props => props.status.warningColorHover};
      outline: 3px solid ${props => props.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${props => props.status.warningColorActive};
    }
  `,
  primaryButtonWarning: () => `
    background-color: ${props => props.status.warningColor};
    color: ${props => props.textColorInverted};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${props => props.status.warningColor};
  `,
  error: () => `
    background: none;
    color: ${props => props.status.errorColor};
    &:hover, &:focus {
      background-color: ${props => props.status.errorColorHover};
      outline: 3px solid ${props => props.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props => props.status.errorColorActive};
    }
  `,
  primaryButtonError: () => `
    background-color: ${props => props.status.errorColor};
    color: ${props => props.textColorInverted};
  `,
  secondaryButtonError: () => `
    border: 2px solid ${props => props.status.warningColor};
  `,
  success: () => `
    background: none;
    color: ${props => props.status.successColor};
    &:hover, &:focus {
      background-color: ${props => props.status.successColorHover};
      outline: 3px solid ${props => props.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props => props.status.successColorActive};
    }
  `,
  primaryButtonSuccess: () => `
    background-color: ${props => props.status.successColor};
    color: ${props => props.textColorInverted};
  `,
  secondaryButtonSuccess: () => `
    border: 2px solid ${props => props.status.successColor};
  `
};

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
    background-color: ${props => props.primaryColorHover};
    border-color: ${props => props.primaryColorHover};
    color: ${props => props.textColorOnPrimary};
  }
  &:focus {
    border-color: ${props => props.primaryColorHover};
    background-color: ${props => props.primaryColorHover};
    outline: 2px solid ${props => props.primaryColorHover};
    outline-offset: 10px;
    color: ${props => props.textColorOnPrimary}
    /* &:before {
      position: absolute;
      content: '';
      border: solid 1px ${props => props.primaryColorHover};
      border-radius: 5px;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      left: -10px;
      top: -10px;
    } */
  }
  &:active {
    background-color: ${props => props.primaryColorActive};
    border-color: ${props => props.primaryColorActive};
    color: ${props => props.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${props => props.disabledColor};
    border: none;
  }
`;
export const PrimaryButton = styled(Button)`
  background-color: ${props => props.primaryColor};
  color: #fff;
  border: 0;
  &:disabled {
    background-color: ${props => props.disabledColor};
    color: ${props => props.textColorOnPrimary};
    border-color: ${props => props.disabledColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
export const SecondaryButton = styled(Button)`
  background: transparent;
  border: 2px solid ${props => props.primaryColor};
  color: ${props => props.primaryColor};

  &:disabled {
    border: 2px solid ${props => props.disabledColor};
    color: ${props => props.disabledColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
export const TertiaryButton = styled(Button)`
  color: ${props => props.primaryColor};
  background: transparent;
  border: 0;
  &:disabled {
    color: ${props => props.disabledColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
