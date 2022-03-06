import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './styled';

type WritableLettersProps = {
  values: string[];
  setValues: Dispatch<SetStateAction<string[]>>;
  verifyLetters: (index: number) => void;
  index: number;
  test: string;
  setTest: Dispatch<SetStateAction<string>>;
};

const WritableLetters = ({
  index,
  values,
  setValues,
  verifyLetters,
  test,
  setTest,
}: WritableLettersProps) => {
  const [activeLetter, setActiveLetter] = useState(0);
  const [key, setKey] = useState('');

  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      setKey(e.key);
    });

    return () => {
      window.removeEventListener('keyup', () => {
        setKey('');
      });
    };
  }, []);

  const handleChange = useCallback(
    (value) => {
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
      if (value === 'Enter') verifyLetters(index);
    },
    [activeLetter, setActiveLetter, verifyLetters, setValues]
  );

  useEffect(() => {
    setKey('');
    handleChange(key);
  }, [key]);

  useEffect(() => {
    setTest('');
    handleChange(test);
  }, [test]);

  return (
    <>
      {new Array(7).fill('').map((_, index) => (
        <S.Letter
          key={index}
          isFocus={index === activeLetter}
          onClick={() => setActiveLetter(index)}
        >
          <span>{values[index]}</span>
        </S.Letter>
      ))}
    </>
  );
};

export default WritableLetters;
