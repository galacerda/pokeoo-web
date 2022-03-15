import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { defaultTheme } from '../../styles/defaultTheme';
import { Check } from '@styled-icons/fa-solid/Check';
import { Backspace } from '@styled-icons/material/Backspace';

export const CheckImage = styled(Check)`
  height: 3rem;
  @media (max-width: 700px) {
    height: 2.5rem;
  }
`;
export const BackspaceImage = styled(Backspace)`
  height: 3rem;
  @media (max-width: 700px) {
    height: 2.5rem;
  }
`;

type BoxType = {
  large?: boolean;
};

export const Box = styled.div<BoxType>`
  ${({ large = false }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    border-radius: 0.5rem;
    border: none;
    background: ${transparentize(0.5, defaultTheme.colors.blue)};
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 3rem;
    cursor: pointer;
    color: ${transparentize(0.4, defaultTheme.colors.white)};
    outline: none;
    @media (max-width: 700px) {
      width: 3.6rem;
      height: 5rem;
      font-size: 2rem;
    }
    ${large &&
    css`
      width: 10rem;
      @media (max-width: 700px) {
        width: 6rem;
      }
    `}
  `}
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
      gap: 0.5rem;
      margin-top: 0.6rem;
    }
  `}
`;

export const Keyboard = styled.div``;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
