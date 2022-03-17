import { transparentize } from 'polished';
import styled from 'styled-components';
import { defaultTheme } from '../../styles/defaultTheme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  text-align: center;
  background: ${transparentize(0.05, '#111547')};
  border-radius: 1rem;
  margin-top: 1rem;
  @media (max-width: 700px) {
    padding: 1.5rem 3rem;
  }
`;

export const Message = styled.span`
  font-size: 2rem;
  color: ${defaultTheme.colors.white};
  font-weight: 700;
  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;
