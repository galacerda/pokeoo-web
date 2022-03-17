import * as S from './styled';
import { useTransition } from 'react-spring';
import Snackbar from '../Snackbar';
import { MessageType } from '../../providers/snackbar';
import { Dispatch, SetStateAction } from 'react';

type SnackbarContainerProps = {
  messages: MessageType[];
  setMessages: Dispatch<SetStateAction<MessageType[]>>;
};

const SnackbarContainer = ({
  messages,
  setMessages,
}: SnackbarContainerProps) => {
  const transitions = useTransition(messages, {
    keys: (message) => message.key,
    from: { bottom: '-120%', opacity: 0 },
    enter: { bottom: '0%', opacity: 1 },
    leave: { bottom: '-120%', opacity: 0 },
    onRest: (result, ctrl, item) => {
      setMessages((prevState) =>
        prevState?.filter((i) => {
          return i.key !== item.key;
        })
      );
    },
    config: { duration: 500 },
  });

  return (
    <S.Container>
      <div>
        {transitions((_, item) => (
          <Snackbar message={item.message} />
        ))}
      </div>
    </S.Container>
  );
};

export default SnackbarContainer;
