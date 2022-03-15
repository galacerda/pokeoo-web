import * as S from './styled';
import { useTransition } from 'react-spring';
import Snackbar from '../Snackbar';

type SnackbarContainerProps = {
  messages: string[];
};

const SnackbarContainer = ({ messages }: SnackbarContainerProps) => {
  const transitions = useTransition(messages, (message) => message, {
    from: { bottom: '-120%', opacity: 0 },
    enter: { bottom: '0%', opacity: 1 },
    leave: { bottom: '-120%', opacity: 0 },
  });
  return (
    <S.Container>
      {transitions.map(() => {
        <Snackbar />;
      })}
    </S.Container>
  );
};

export default SnackbarContainer;
