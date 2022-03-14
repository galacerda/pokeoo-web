import { useEffect } from 'react';
import { useData } from '../../providers/data';
import TableLetters from '../TableLetters';
import { v4 as uuid } from 'uuid';
import { MessageType, useSnackbar } from '../../providers/snackbar';
import * as S from './styled';

type BoardProps = {
  word: string[];
};

const Board = ({ word }: BoardProps) => {
  const { attemptValues, states } = useData();
  const { setMessages } = useSnackbar();

  useEffect(() => {
    if (!word?.length) {
      setMessages((prevState: MessageType[]) => [
        ...prevState,
        {
          key: uuid(),
          message: 'O pokemon do dia ainda não foi capturado!',
        },
      ]);
    }
  }, []);

  return (
    <S.Wrapper>
      {states.map((state: string, index: number) => (
        <TableLetters
          key={uuid()}
          state={state}
          attemptValue={attemptValues[index]}
          index={index}
          word={word}
        />
      ))}
    </S.Wrapper>
  );
};

export default Board;
