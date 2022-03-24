import AttemptLetters, { AttemptLettersType } from '../AttemptLetters';
import WritableLetters from '../WritableLetters';
import { v4 as uuid } from 'uuid';
import * as S from './styled';

type LettersProps = {
  state: string;
  attemptValue: AttemptLettersType[];
  index: number;
  word: string[];
  states: string[];
};

const TableLetters = ({
  state,
  attemptValue,
  index,
  word,
  states,
}: LettersProps) => {
  return (
    <S.Wrapper>
      {state === 'hidden' && (
        <>
          {new Array(7).fill('').map(() => (
            <S.LetterBox key={uuid()} />
          ))}
        </>
      )}
      {state === 'writable' && <WritableLetters index={index} word={word} />}
      {state === 'attempt' && (
        <AttemptLetters
          attemptLetters={attemptValue}
          index={index}
          actual={states.filter((state) => state === 'attempt').length}
        />
      )}
    </S.Wrapper>
  );
};

export default TableLetters;
