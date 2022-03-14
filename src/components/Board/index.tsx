import { useEffect, useState } from 'react';
import { useData } from '../../providers/data';
import Modal from '../Modal';
import TableLetters from '../TableLetters';

type BoardProps = {
  word: string[];
};

const Board = ({ word }: BoardProps) => {
  const { attemptValues, control, states, stats } = useData();
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  useEffect(() => {
    if (control?.over) {
      openModal();
    }
  }, [control]);

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

      <Modal
        children={<p>a</p>}
        open={open}
        closeModal={closeModal}
        stats={stats}
        win={control.win}
      />
    </>
  );
};

export default Board;
