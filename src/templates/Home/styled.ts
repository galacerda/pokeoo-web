import styled from 'styled-components';
import { defaultTheme } from '../../styles/defaultTheme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: fit-content;
  margin: 0 auto;
`;

export const Header = styled.header`
 display: flex;
 align-items: center;
 justify-content: start;
 width: 100%;
 padding: 2rem 0;
`;

export const Main = styled.main``;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${defaultTheme.colors.yellow};
  padding: 1rem 1rem 0 1rem;
  position: absolute;
  right: 50%;
  transform: translateX(+50%);
`;

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

