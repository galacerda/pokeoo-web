import * as S from './styled';
import { v4 as uuid } from 'uuid';

export type AttemptLettersType = {
  letter: string;
  status: string;
};

type AttemptLettersProps = {
  attemptLetters: AttemptLettersType[];
  index: number;
  actual: number;
};

const AttemptLetters = ({
  attemptLetters,
  index,
  actual,
}: AttemptLettersProps) => {
  return (
    <>
      {attemptLetters.map(({ letter, status }) => {
        return (
          <S.Letter
            status={status}
            key={uuid()}
            isActual={index + 1 === actual}
          >
            <span>{letter}</span>
          </S.Letter>
        );
      })}
    </>
  );
};

export default AttemptLetters;
