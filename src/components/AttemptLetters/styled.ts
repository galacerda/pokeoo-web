import { transparentize } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import { defaultTheme } from '../../styles/defaultTheme';

const letterModifiers: { [key: string]: any } = {
  right: () => css`
    background-color: ${defaultTheme.colors.green};
  `,

  exist: () => css`
    background-color: ${defaultTheme.colors.yellow};
  `,

  nonexist: () => css`
    background-color: ${defaultTheme.colors.red};
  `,
};

type LetterType = {
  status: string;
  isActual: boolean;
};

export const Letter = styled.div<LetterType>`
  ${({ status, isActual }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 10%;
    text-align: center;
    font-size: 3.7rem;
    font-weight: 700;
    outline: none;
    color: ${defaultTheme.colors.white};
    ${isActual &&
    css`
      animation: ${backToFront} 0.3s linear;
    `}
    ${letterModifiers[status]}
    @media (max-width: 700px) {
      width: 4.5rem;
      height: 4.5rem;
      font-size: 2.4rem;
    }
  `}
`;

const backToFront = keyframes`
  0%{
    transform: rotate3d(0, 1, 0, 180deg); 
    border-radius: 10%;
    outline: none;
    color: transparent;
    background: none;
    border: 0.4rem solid ${transparentize(0.4, defaultTheme.colors.yellow)};
    font-size: 0;
  }
  40%{
    font-size: 0;
    background: none;
  }
  55%{
    background: none;
    font-size:0;
  }
  56%{
    font-size: 3.7rem;
  }
  100%{
    transform: rotate3d(0, 1, 0, 0deg);
  }
`;
