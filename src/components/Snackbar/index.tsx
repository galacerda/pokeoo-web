import { Dispatch, SetStateAction, useEffect } from 'react';
import { MessageType } from '../../providers/snackbar';
import * as S from './styled';

type SnackbarProps = {
  message?: string;
};

const Snackbar = ({ message = 'Eita, isso é um pokemon?' }: SnackbarProps) => {
  return (
    <S.Wrapper>
      <S.Message>{message}</S.Message>
    </S.Wrapper>
  );
};

export default Snackbar;
