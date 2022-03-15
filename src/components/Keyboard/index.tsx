import { useEffect } from 'react';
import { useData } from '../../providers/data';
import { useKeyboard } from '../../providers/keyboard';
import { keysGroup } from '../../utils/constants/keys';
import { AttemptLettersType } from '../AttemptLetters';
import * as S from './styled';

const enter = '/img/enter.svg';
const backspace = '/img/backspace.svg';

const Keyboard = () => {
  const { attemptValues } = useData();
  const { setLetter } = useKeyboard();
  useEffect(() => {
    if (attemptValues?.length) {
      const a: AttemptLettersType[] = attemptValues.flatMap(
        (item: AttemptLettersType) => item
      );
      const b = a.filter((item, index) => a.indexOf(item) === index);
    }
  }, [attemptValues]);

  return (
    <S.Keyboard>
      <S.Actions>
        <S.Box large={true} onClick={() => setLetter('Backspace')}>
          <S.BackspaceImage />
        </S.Box>
        <S.Box large={true} onClick={() => setLetter('Enter')}>
          <S.CheckImage />
        </S.Box>
      </S.Actions>
      {keysGroup.map((keyGroup, index) => (
        <S.Line isSecondLine={index === 1} key={index}>
          {keyGroup.map((key) => {
            return (
              <S.Box key={key} onClick={() => setLetter(key)}>
                <>{key}</>
              </S.Box>
            );
          })}
        </S.Line>
      ))}
    </S.Keyboard>
  );
};

export default Keyboard;
