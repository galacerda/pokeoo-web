import { Dispatch, SetStateAction, useEffect } from 'react';
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
  console.log(attemptValues, 'attemptValues');
  useEffect(() => {
    if (attemptValues?.length) {
      const a: AttemptLettersType[] = attemptValues.flatMap(
        (item: AttemptLettersType) => item
      );
      const b = a.filter((item, index) => a.indexOf(item) === index);
    }
  }, [attemptValues]);
  const renderNameKey = (key: string) => {
    if (key === 'Enter') {
      return <img src={enter} />;
    }
    if (key === 'Backspace') {
      return <img src={backspace} />;
    }

    return <>{key}</>;
  };
  return (
    <S.Keyboard>
      {keysGroup.map((keyGroup, index) => (
        <S.Line isSecondLine={index === 1} key={index}>
          {keyGroup.map((key) => {
            return (
              <S.Box key={key} onClick={() => setLetter(key)}>
                {renderNameKey(key)}
              </S.Box>
            );
          })}
        </S.Line>
      ))}
    </S.Keyboard>
  );
};

export default Keyboard;
