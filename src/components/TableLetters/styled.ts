import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { defaultTheme } from '../../styles/defaultTheme';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  gap: 0.6rem;
  width: fit-content;
`;

export const LetterBox = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 10%;
  background: ${transparentize(0.6, defaultTheme.colors.yellow)};
  @media (max-width: 700px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;
