import { Dispatch, SetStateAction, useRef, useState } from 'react';
import AttemptLetters, { AttemptLettersType } from '../AttemptLetters';
import WritableLetters from '../WritableLetters';
import * as S from './styled';

type LettersProps = {
  state: string;
  attemptValue: AttemptLettersType[];
  setAttemptValues: Dispatch<SetStateAction<AttemptLettersType[][]>>;
  index: number;
  values: string[];
  setValues: Dispatch<SetStateAction<string[]>>;
  verifyLetters: (index: number) => void;
  test: string;
  setTest: Dispatch<SetStateAction<string>>;
};

const TableLetters = ({
  state,
  attemptValue,
  index,
  values,
  setValues,
  verifyLetters,
  test,
  setTest,
}: LettersProps) => {
  return (
    <S.Wrapper>
      {state === 'hidden' && (
        <>
          {new Array(7).fill('').map((_, index) => (
            <S.LetterBox key={index} />
          ))}
        </>
      )}
      {state === 'writable' && (
        <WritableLetters
          index={index}
          values={values}
          setValues={setValues}
          verifyLetters={verifyLetters}
          test={test}
          setTest={setTest}
        />
      )}
      {state === 'attempt' && <AttemptLetters attemptLetters={attemptValue} />}
    </S.Wrapper>
  );
};

export default TableLetters;
