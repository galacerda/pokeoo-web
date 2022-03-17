import { useCallback, useEffect, useState } from 'react';
import { useData } from '../../providers/data';
import { useKeyboard } from '../../providers/keyboard';
import { pokemons } from '../../utils/constants/pokemons';
import { AttemptLettersType } from '../AttemptLetters';
import { v4 as uuid } from 'uuid';
import * as S from './styled';
import { MessageType, useSnackbar } from '../../providers/snackbar';
import useVerify from '../../hooks/useVerify';

type WritableLettersProps = {
  index: number;
  word: string[];
};

const WritableLetters = ({ index, word }: WritableLettersProps) => {
  const { letter, setLetter } = useKeyboard();
  const [values, setValues] = useState<string[]>([]);
  const [activeLetter, setActiveLetter] = useState<number>(-1);
  const [key, setKey] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (word?.length) {
      return setActiveLetter(0);
    }
    setDisabled(true);
  }, [word, setActiveLetter, setDisabled]);

  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      setKey(e.key);
    });

    return () => {
      window.removeEventListener('keyup', () => {
        setKey('');
      });
    };
  }, [setKey]);

  const verifyLetters = useVerify();

  const handleChange = useCallback(
    (value, actualValues) => {
      if (/[a-z]/i.test(value) && value?.length === 1) {
        setValues((prevState) => {
          const copy = [...prevState];
          copy[activeLetter] = value.toUpperCase();

          return copy;
        });
        if (activeLetter < 6) return setActiveLetter(activeLetter + 1);
      }
      if (value === 'Backspace') {
        setValues((prevState) => {
          const copy = [...prevState];
          if (!!copy[activeLetter]) {
            copy[activeLetter] = '';
          } else {
            copy[activeLetter - 1] = '';
            if (activeLetter > 0) setActiveLetter(activeLetter - 1);
          }
          return copy;
        });
        return null;
      }

      if (value === 'ArrowRight' && activeLetter < 6)
        setActiveLetter(activeLetter + 1);
      if (value === 'ArrowLeft' && activeLetter > 0)
        setActiveLetter(activeLetter - 1);
      if (value === 'Enter')
        verifyLetters(index, actualValues, setValues, word);
    },
    [activeLetter, setActiveLetter, verifyLetters, setValues]
  );

  useEffect(() => {
    setKey('');
    word?.length && handleChange(key, values);
  }, [key]);

  useEffect(() => {
    setLetter('');
    word?.length && handleChange(letter, values);
  }, [letter]);

  return (
    <>
      {new Array(7).fill('').map((_, index) => (
        <S.Letter
          key={uuid()}
          isFocus={index === activeLetter && !disabled}
          onClick={() => setActiveLetter(index)}
          disabled={disabled}
        >
          <span>{values[index]}</span>
        </S.Letter>
      ))}
    </>
  );
};

export default WritableLetters;
