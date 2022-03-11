import { useEffect, useState } from 'react';
import { useData } from '../../providers/data';
import Modal from '../Modal';
import TableLetters from '../TableLetters';

type BoardProps = {
  word: string[];
};

const Board = ({ word }: BoardProps) => {
  const { attemptValues, control, states, stats } = useData();

  return (
    <>
      {states.map((state: string, index: number) => (
        <TableLetters
          key={index}
          state={state}
          attemptValue={attemptValues[index]}
          index={index}
          word={word}
        />
      ))}
    </>
  );
};

export default Board;
