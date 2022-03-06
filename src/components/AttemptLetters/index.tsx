import * as S from './styled';

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
      {attemptLetters.map(({ letter, status }, index) => (
        <S.Letter status={status} key={index}>
          <span>{letter}</span>
        </S.Letter>
      ))}
    </>
  );
};

export default AttemptLetters;
