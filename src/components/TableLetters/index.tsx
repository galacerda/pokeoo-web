import AttemptLetters, { AttemptLettersType } from '../AttemptLetters';
import WritableLetters from '../WritableLetters';
import { v4 as uuid } from 'uuid';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { MessageType, useSnackbar } from '../../providers/snackbar';

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
            <S.LetterBox key={uuid()} />
          ))}
        </>
      )}
      {state === 'writable' && <WritableLetters index={index} word={word} />}
      {state === 'attempt' && <AttemptLetters attemptLetters={attemptValue} />}
    </S.Wrapper>
  );
};

export default TableLetters;
