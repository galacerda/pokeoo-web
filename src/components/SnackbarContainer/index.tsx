import * as S from './styled';
import Snackbar from '../Snackbar';
import { MessageType } from '../../providers/snackbar';
import { Dispatch, SetStateAction, useEffect } from 'react';

type SnackbarContainerProps = {
  message: string | null;
  hideMessage: any;
};

const SnackbarContainer = ({
  message,
  hideMessage,
}: SnackbarContainerProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      hideMessage();
    }, 900);
    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    <S.Container>
      <div>{!!message && <Snackbar message={message} />}</div>
    </S.Container>
  );
};

export default SnackbarContainer;
