import { Dispatch, SetStateAction, useEffect } from 'react';
import { MessageType } from '../../providers/snackbar';
import * as S from './styled';

type SnackbarProps = {
  message?: string;
  hideMessage: any;
};

const Snackbar = ({
  message = 'Eita, isso é um pokemon?',
  hideMessage,
}: SnackbarProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      hideMessage();
    }, 900);
    return () => {
      clearTimeout(timer);
    };
  }, [hideMessage, message]);

  return (
    <S.Wrapper>
      <S.Message>{message}</S.Message>
    </S.Wrapper>
  );
};

export default Snackbar;
