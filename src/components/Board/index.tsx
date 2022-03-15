import { useEffect, useState } from 'react';
import { useData } from '../../providers/data';
import Modal from '../Modal';
import TableLetters from '../TableLetters';
import { v4 as uuid } from 'uuid';

type BoardProps = {
  word: string[];
};

const Board = ({ word }: BoardProps) => {
  const { attemptValues, control, states, stats } = useData();

  return (
    <>
      {states.map((state: string, index: number) => (
        <TableLetters
          key={uuid()}
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
