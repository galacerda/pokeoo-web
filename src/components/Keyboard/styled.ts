import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { defaultTheme } from '../../styles/defaultTheme';

export const Box = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 10%;
  border: none;
  background: ${transparentize(0.5, defaultTheme.colors.blue)};
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 3rem;
  cursor: pointer;
  color: ${transparentize(0.4, defaultTheme.colors.white)};
  outline: none;
  img {
    width: 4rem;
    height: 4rem;
  }
  @media (max-width: 700px) {
    width: 3.1rem;
    height: 5rem;
    font-size: 2rem;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;

type LineType = {
  isSecondLine: boolean;
};

export const Line = styled.div<LineType>`
  ${({ isSecondLine }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    ${isSecondLine &&
    css`
      margin-left: 6rem;
      @media (max-width: 700px) {
        margin-left: 3rem;
      }
    `}

    @media (max-width: 700px) {
      gap: 0.6rem;
    }
  `}
`;

export const Keyboard = styled.div``;
