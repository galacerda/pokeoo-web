import { useCallback, useEffect, useState } from 'react';
import { useData } from '../../providers/data';
import { useKeyboard } from '../../providers/keyboard';
import { pokemons } from '../../utils/constants/pokemons';
import { AttemptLettersType } from '../AttemptLetters';
import * as S from './styled';

const pokemonsNames = pokemons.map(({ name }) => name.toUpperCase());

type WritableLettersProps = {
  index: number;
  word: string[];
};

const WritableLetters = ({ index, word }: WritableLettersProps) => {
  const { letter, setLetter } = useKeyboard();

  const { setAttemptValues, setStats, setControl, setStates } = useData();
  const [values, setValues] = useState<string[]>([]);
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

  const verifyLetters = (index: number) => {
    setValues([]);
    let isOver = false;
    let decrementIndex = 0;

    if (!pokemonsNames.includes(values.join(''))) {
      setActiveLetter(0);
      return window.alert('para ai');
    }

    const attempt: AttemptLettersType[] = [];

    const copyWord = [...word];

    values.forEach((letterValue, index) => {
      let status = 'nonexist';
      index = index - decrementIndex;
      if (copyWord.includes(letterValue)) {
        if (copyWord.indexOf(letterValue) === index) {
          status = 'right';
        } else {
          status = 'exist';
        }
        copyWord.splice(copyWord.indexOf(letterValue), 1);
        decrementIndex += 1;
      }
      attempt.push({ letter: letterValue, status });
    });

    setAttemptValues((prevState: any) => {
      const copy = [...prevState];
      copy.push(attempt);
      return copy;
    });

    if (values.join('') === word.join('')) {
      setStats((prevState: any) => {
        const games = { ...prevState[0] };
        const wins = { ...prevState[1] };
        const bestSequence = { ...prevState[2] };
        wins.data += 1;
        games.data += 1;
        if (wins.data > bestSequence.data) {
          bestSequence.data = wins.data;
        }
        return [games, wins, bestSequence];
      });
      setControl({ over: true, win: true });
      isOver = true;
    }

    if (index === 6) {
      setStats((prevState: any) => {
        const games = { ...prevState[0] };
        const wins = { ...prevState[1] };
        const bestSequence = { ...prevState[2] };
        wins.data = 0;
        games.data += 1;
        return [games, wins, bestSequence];
      });
      setControl({ over: true, win: false });
      isOver = true;
    }

    setStates((prevState: any) => {
      const copy = [...prevState];
      copy[index] = 'attempt';
      if (!isOver) {
        copy[index + 1] = 'writable';
      }
      return copy;
    });
  };

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
    console.log('entrou aqui');
    setLetter('');
    handleChange(letter);
  }, [letter]);

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
