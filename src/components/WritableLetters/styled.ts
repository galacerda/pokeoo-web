import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { defaultTheme } from '../../styles/defaultTheme';

type LetterType = {
  isFocus: boolean;
  disabled: boolean;
};

export const Letter = styled.div<LetterType>`
  ${({ isFocus, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 10%;
    text-align: center;
    font-size: 3.7rem;
    font-family: 'Poppins';
    font-weight: 700;
    outline: none;
    color: transparent;
    text-shadow: 0 0 0 ${defaultTheme.colors.white};
    background: none;
    border: 0.4rem solid ${transparentize(0.4, defaultTheme.colors.yellow)};
    cursor: pointer;
    @media (max-width: 700px) {
      width: 4.5rem;
      height: 4.5rem;
      font-size: 2.7rem;
    }
    ${isFocus &&
    css`
      outline: none;
      border-bottom: 1rem solid
        ${transparentize(0.5, defaultTheme.colors.yellow)};
    `}
    ${disabled &&
    css`
      opacity: 0.9;
      cursor: not-allowed;
    `}
  `}
`;
