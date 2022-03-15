import * as S from './styled';
import { v4 as uuid } from 'uuid';

export type AttemptLettersType = {
  letter: string;
  status: string;
};

type AttemptLettersProps = {
  attemptLetters: AttemptLettersType[];
};

const AttemptLetters = ({ attemptLetters }: AttemptLettersProps) => {
  return (
    <>
      {attemptLetters.map(({ letter, status }) => (
        <S.Letter status={status} key={uuid()}>
          <span>{letter}</span>
        </S.Letter>
      ))}
    </>
  );
};

export default AttemptLetters;
