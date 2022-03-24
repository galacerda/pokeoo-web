import { useState, useEffect } from 'react';
import { useData } from '../../providers/data';
import { v4 as uuid } from 'uuid';
import * as S from './styled';

type ModalProps = {
  word: string[];
  openModal?: any;
  closeModal?: any;
  modalState?: boolean;
  isModified?:boolean;
};

const Modal = ({ word, openModal = null, closeModal = null, modalState = false, isModified = false }: ModalProps) => {
  const { stats, control } = useData();
  const [open, setOpen] = useState(modalState);

  const closeModalOrigin = () => isModified ? closeModal() : setOpen(false) ;
  const openModalOrigin = () => isModified ? openModal() : setOpen(true);

  useEffect(()=>{
    setOpen(modalState)
  },[modalState])

  useEffect(() => {
    if (control?.over && !isModified) {
      openModalOrigin();
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
        <p>Desenvolvido por Gabriel Lacerda</p>
      </S.Container>
      <S.Overlay open={open} onClick={closeModalOrigin} />
    </S.Wrapper>
  );
};

export default Modal;
