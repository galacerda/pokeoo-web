import { Dispatch, useState, SetStateAction } from 'react';
import * as S from './styled';

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  closeModal: () => void;
  stats: {
    title: string;
    data: number;
  }[];
  win: boolean;
};

const Modal = ({ children, open, closeModal, stats, win }: ModalProps) => {
  const feedbackText = win
    ? 'você acertou, parabéns!!'
    : 'você não acertou, que pena!!';
  return (
    <S.Wrapper open={open}>
      <S.Container open={open}>
        <S.Feedback>{feedbackText}</S.Feedback>
        <S.StatsContainer>
          {stats?.map((item, index) => (
            <S.StatsWrapper key={item.title} isSecond={index === 1}>
              <S.Title>{item.title}</S.Title>
              <S.Data>{item.data}</S.Data>
            </S.StatsWrapper>
          ))}
        </S.StatsContainer>
      </S.Container>
      <S.Overlay open={open} onClick={closeModal} />
    </S.Wrapper>
  );
};

export default Modal;
