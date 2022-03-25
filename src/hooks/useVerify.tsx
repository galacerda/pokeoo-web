import { useCallback } from 'react';
import { AttemptLettersType } from '../components/AttemptLetters';
import { useData } from '../providers/data';
import { useSnackbar } from '../providers/snackbar';
import { pokemons } from '../utils/constants/pokemons';

const pokemonsNames = pokemons.map(({ name }) => name.toUpperCase());

export default function useVerify() {
  const { setAttemptValues, setStats, setControl, setStates } = useData();
  const { showMessage } = useSnackbar();

  const verifyLetters = useCallback(
    (index: number, values: string[], setValues, word) => {
      if (!pokemonsNames.includes(values.join(''))) {
        return showMessage('Insira um pokemon válido');
      }

      setValues([]);
      let isOver = false;

      const attempt: AttemptLettersType[] = [];

      const copyWord = [...word];
      values.forEach((letterValue, index) => {
        let status = 'nonexist';
        if (copyWord.includes(letterValue)) {
          if (copyWord.indexOf(letterValue) === index) {
            status = 'right';
          } else {
            status = 'exist';
          }
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
    },
    []
  );

  return verifyLetters;
}
