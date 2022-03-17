import styled, { css } from 'styled-components';
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
};

export const Letter = styled.div<LetterType>`
  ${({ status }) => css`
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
    ${letterModifiers[status]}
    @media (max-width: 700px) {
      width: 4.5rem;
      height: 4.5rem;
      font-size: 2.4rem;
    }
  `}
`;
