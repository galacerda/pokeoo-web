import { Dispatch, SetStateAction } from 'react';
import { useKeyboard } from '../../providers/keyboard';
import { keysGroup } from '../../utils/constants/keys';
import * as S from './styled';

const enter = '/img/enter.svg';
const backspace = '/img/backspace.svg';

const Keyboard = () => {
  const { setLetter, letter } = useKeyboard();
  console.log(letter, 'pimba');
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
