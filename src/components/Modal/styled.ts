import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { defaultTheme } from '../../styles/defaultTheme';

type ElementWithOpenType = {
  open: boolean;
};

type StatsWrapperType = {
  isSecond: boolean;
};

const containerModifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
  `,
};

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    display: flex;
  `,
};

export const Wrapper = styled.div<ElementWithOpenType>`
  ${({ open }) => css`
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    ${open && wrapperModifiers.open};
  `}
`;

export const Overlay = styled.div<ElementWithOpenType>`
  ${({ open }) => css`
    background-color: ${transparentize(0.8, '#000')};
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    ${open && wrapperModifiers.open};
  `}
`;

export const Container = styled.div<ElementWithOpenType>`
  ${({ open }) => css`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    text-align: center;
    z-index: 1;
    width: 70rem;
    height: 50rem;
    background: ${transparentize(0.05, '#111547')};
    border-radius: 1rem;
    transition: all linear 0.2s;
    margin-top: 0;
    transition: all linear 0.2s;
    p{
      color: ${transparentize(0.3, defaultTheme.colors.white)};
      font-size: 1rem;
    }
    @media (max-width: 700px) {
      width: 40rem;
      height: fit-content;
      padding: 3rem 2rem;
    }
    ${open && containerModifiers.open}
    ${!open && containerModifiers.close}
  `}
`;

export const StatsWrapper = styled.div<StatsWrapperType>`
  ${({ isSecond }) => css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 70%;
    justify-content: center;
    ${isSecond &&
    css`
      border-top: 0.1rem solid ${transparentize(0.9, defaultTheme.colors.white)};
      border-bottom: 0.1rem solid
        ${transparentize(0.9, defaultTheme.colors.white)}; ;
    `}
  `}
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.span`
  font-size: 2.4rem;
  color: ${defaultTheme.colors.white};
  font-weight: 600;
  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;

export const Data = styled.span`
  font-size: 3rem;
  color: ${defaultTheme.colors.white};
  font-weight: 700;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

export const Feedback = styled.span`
  font-size: 2.4rem;
  color: ${defaultTheme.colors.white};
  font-weight: 600;
  @media (max-width: 700px) {
    font-size: 2rem;
    padding-bottom: 3rem;
  }
`;
