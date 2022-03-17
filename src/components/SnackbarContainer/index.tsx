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
  return (
    <S.Container>
      <div>
        {!!message && <Snackbar message={message} hideMessage={hideMessage} />}
      </div>
    </S.Container>
  );
};

export default SnackbarContainer;
