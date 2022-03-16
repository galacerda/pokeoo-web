import { useState, useEffect } from 'react';
import { useData } from '../../providers/data';
import { v4 as uuid } from 'uuid';
import * as S from './styled';

type ModalProps = {
  word: string[];
};

const Modal = ({ word }: ModalProps) => {
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
    : `você não acertou, que pena!!`;
  return (
    <S.Wrapper open={open}>
      <S.Container open={open}>
        <S.Feedback>{feedbackText}</S.Feedback>
        {!control?.win && (
          <S.Feedback>
            O pokemon de hoje é: <strong>{word.join('')}</strong>
          </S.Feedback>
        )}
        <S.StatsContainer>
          {stats?.map(
            (item: { title: string; data: string }, index: number) => (
              <S.StatsWrapper key={uuid()} isSecond={index === 1}>
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
