import { useState, useEffect } from 'react';
import { useData } from '../../providers/data';
import * as S from './styled';

const Modal = () => {
  const { stats, control } = useData();
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  useEffect(() => {
    if (control?.over) {
      openModal();
    }
  }, [control]);

  const feedbackText = control?.win
    ? 'você acertou, parabéns!!'
    : 'você não acertou, que pena!!';
  return (
    <S.Wrapper open={open}>
      <S.Container open={open}>
        <S.Feedback>{feedbackText}</S.Feedback>
        <S.StatsContainer>
          {stats?.map(
            (item: { title: string; data: string }, index: number) => (
              <S.StatsWrapper key={item.title} isSecond={index === 1}>
                <S.Title>{item.title}</S.Title>
                <S.Data>{item.data}</S.Data>
              </S.StatsWrapper>
            )
          )}
        </S.StatsContainer>
      </S.Container>
      <S.Overlay open={open} onClick={closeModal} />
    </S.Wrapper>
  );
};

export default Modal;
