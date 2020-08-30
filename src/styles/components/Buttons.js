import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  small: () => `
    padding: 8px 15px;
    ${typeScale.paragraph};
  `,
  large: () => `
    ${typeScale.header3};
    padding: 24px 32px;
  `,
  warning: () => `
    background: none;
    color: ${props => props.theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${props => props.theme.status.warningColorHover};
      outline: 3px solid ${props => props.theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${props => props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: () => `
    background-color: ${props => props.theme.status.warningColor};
    color: ${props => props.theme.textColorInverted};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${props => props.theme.status.warningColor};
  `,
  error: () => `
    background: none;
    color: ${props => props.theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${props => props.theme.status.errorColorHover};
      outline: 3px solid ${props => props.theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props => props.theme.status.errorColorActive};
    }
  `,
  primaryButtonError: () => `
    background-color: ${props => props.theme.status.errorColor};
    color: ${props => props.theme.textColorInverted};
  `,
  secondaryButtonError: () => `
    border: 2px solid ${props => props.theme.status.warningColor};
  `,
  success: ({ props }) => `
    background: none;
    color: ${props => props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${props => props.theme.status.successColorHover};
      outline: 3px solid ${props => props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props => props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: () => `
    background-color: ${props => props.theme.status.successColor};
    color: ${props => props.theme.textColorInverted};
  `,
  secondaryButtonSuccess: () => `
    border: 2px solid ${props => props.theme.status.successColor};
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
    background-color: ${props => props.theme.primaryColorHover};
    border-color: ${props => props.theme.primaryColorHover};
    color: ${props => props.theme.textColorOnPrimary};
  }
  &:focus {
    border-color: ${props => props.theme.primaryColorHover};
    background-color: ${props => props.theme.primaryColorHover};
    outline: 2px solid ${props => props.theme.primaryColorHover};
    outline-offset: 10px;
    color: ${props => props.theme.textColorOnPrimary};
    /* &:before {
      position: absolute;
      content: '';
      border: solid 1px ${props => props.theme.primaryColorHover};
      border-radius: 5px;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      left: -10px;
      top: -10px;bvggggggggggggggggggg,gggggggggggggggggggggg,gg
    } */
  }
  &:active {
    background-color: ${props => props.theme.primaryColorActive};
    border-color: ${props => props.theme.primaryColorActive};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${props => props.theme.disabledColor};
    border: none;
  }
`;
export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};
  border: 0;
  &:disabled {
    background-color: ${props => props.theme.disabledColor};
    color: ${props => props.theme.textColorOnPrimary};
    border-color: ${props => props.theme.disabledColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
export const SecondaryButton = styled(Button)`
  background: transparent;
  border: 2px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};

  &:disabled {
    border: 2px solid ${props => props.theme.disabledColor};
    color: ${props => props.theme.disabledColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
export const TertiaryButton = styled(Button)`
  color: ${props => props.theme.primaryColor};
  background: transparent;
  border: 0;
  &:disabled {
    color: ${props => props.theme.disabledColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
