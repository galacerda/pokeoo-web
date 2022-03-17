import styled from 'styled-components';
import { defaultTheme } from '../../styles/defaultTheme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Header = styled.header``;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 5rem 0;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${defaultTheme.colors.yellow};
  padding: 1rem;
`;

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
