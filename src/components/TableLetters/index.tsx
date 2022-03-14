import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { KeyboardProvider } from '../../providers/keyboard';
import AttemptLetters, { AttemptLettersType } from '../AttemptLetters';
import WritableLetters from '../WritableLetters';
import * as S from './styled';

type LettersProps = {
  state: string;
  attemptValue: AttemptLettersType[];
  index: number;
  word: string[];
};

const TableLetters = ({ state, attemptValue, index, word }: LettersProps) => {
  return (
    <S.Wrapper>
      {state === 'hidden' && (
        <>
          {new Array(7).fill('').map((_, index) => (
            <S.LetterBox key={index} />
          ))}
        </>
      )}
      {state === 'writable' && <WritableLetters index={index} word={word} />}
      {state === 'attempt' && <AttemptLetters attemptLetters={attemptValue} />}
    </S.Wrapper>
  );
};

export default TableLetters;
