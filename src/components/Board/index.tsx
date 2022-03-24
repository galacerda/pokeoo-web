import { useEffect, useState } from 'react';
import { useData } from '../../providers/data';
import TableLetters from '../TableLetters';
import { v4 as uuid } from 'uuid';
import * as S from './styled';
import { setItemsAtLocalStorage } from '../../utils/functions/setItemnsAtLocalStorage';

type BoardProps = {
  word: string[];
};

const Board = ({ word }: BoardProps) => {
  const [firstRender, setFirstRender] = useState(true);
  const {
    attemptValues,
    states,
    setAttemptValues,
    setStates,
    control,
    setControl,
    stats,
    setStats,
  } = useData();

  useEffect(() => {
    const dataLocalStorage = localStorage.getItem('data');

    if (dataLocalStorage) {
      const dataLocalStorageParsed = JSON.parse(dataLocalStorage as string);
      const { end } = dataLocalStorageParsed.time;

      if (Date.now() >= end) {
        setItemsAtLocalStorage(
          attemptValues,
          states,
          control,
          dataLocalStorageParsed?.stats || stats
        );
      } else {
        setAttemptValues(dataLocalStorageParsed.attemptValues);
        setStates(dataLocalStorageParsed.states);
        setControl(dataLocalStorageParsed.control);
      }
      dataLocalStorageParsed?.stats && setStats(dataLocalStorageParsed.stats);
    } else setItemsAtLocalStorage(attemptValues, states, control, stats);
  }, []);

  useEffect(() => {
    if (!firstRender) {
      setItemsAtLocalStorage(attemptValues, states, control, stats);
    } else setFirstRender(false);
  }, [attemptValues, states, control, stats]);

  return (
    <S.Wrapper>
      {states.map((state: string, index: number) => (
        <TableLetters
          key={uuid()}
          state={state}
          attemptValue={attemptValues[index]}
          index={index}
          states={states}
          word={word}
        />
      ))}
    </S.Wrapper>
  );
};

export default Board;
