import * as S from './styled';
import TableLetters from '../../components/TableLetters';
import { useEffect, useRef, useState } from 'react';
import { AttemptLettersType } from '../../components/AttemptLetters';
import Modal from '../../components/Modal';
import Keyboard from '../../components/Keyboard';
import { pokemons } from '../../utils/constants/pokemons';

const pokemonsNames = pokemons.map(({ name }) => name.toUpperCase());

type DataType = {
  attemps: AttemptLettersType[][];
};

type HomeProps = {
  word?: string[];
  data: any;
  setData: any;
};

const Home = ({ word = 'MACHAMP'.split(''), data, setData }: HomeProps) => {
  const [states, setStates] = useState([
    'writable',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
  ]);
  const [control, setControl] = useState({ over: false, win: false });
  const [stats, setStats] = useState([
    { title: 'jogos', data: 0 },
    { title: 'vitórias', data: 0 },
    { title: 'melhor sequência', data: 0 },
  ]);
  const [test, setTest] = useState('');
  const [values, setValues] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  const [attemptValues, setAttemptValues] = useState<AttemptLettersType[][]>(
    []
  );
  const [dataHandler, setDataHandler] = useState(false);

  useEffect(() => {
    console.log(data?.stats, 'ah ai tu fode');
    setAttemptValues((prevState) => data?.attemptValues || prevState);
    setStates((prevState) => data?.states || prevState);
    setControl((prevState) => data?.control || prevState);
    setStats((prevState) => data?.stats || prevState);
  }, [data]);

  const verifyLetters = (index: number) => {
    setValues([]);
    let isOver = false;
    let decrementIndex = 0;

    if (!pokemonsNames.includes(values.join('')))
      return window.alert('para ai');

    const attempt: AttemptLettersType[] = [];

    const copyWord = [...word];

    values.forEach((letter, index) => {
      let status = 'nonexist';
      index = index - decrementIndex;
      if (copyWord.includes(letter)) {
        if (copyWord.indexOf(letter) === index) {
          status = 'right';
        } else {
          status = 'exist';
        }
        copyWord.splice(copyWord.indexOf(letter), 1);
        decrementIndex += 1;
      }
      attempt.push({ letter, status });
    });

    setAttemptValues((prevState) => {
      const copy = [...prevState];
      copy.push(attempt);
      return copy;
    });

    if (values.join('') === word.join('')) {
      setStats((prevState) => {
        const games = { ...prevState[0] };
        const wins = { ...prevState[1] };
        const bestSequence = { ...prevState[2] };
        wins.data += 1;
        games.data += 1;
        bestSequence.data += 1;
        if (wins.data > bestSequence.data) {
          bestSequence.data = wins.data;
        }
        return [games, wins, bestSequence];
      });
      setControl({ over: true, win: true });
      isOver = true;
    }

    if (index === 6) {
      setStats((prevState) => {
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

    setStates((prevState) => {
      const copy = [...prevState];
      copy[index] = 'attempt';
      if (!isOver) {
        copy[index + 1] = 'writable';
      }
      return copy;
    });

    setDataHandler((prevState) => !prevState);
  };

  useEffect(() => {
    if (control?.over) {
      openModal();
    }
  }, [control]);

  useEffect(() => {
    console.log(stats, 'stats');
  }, [stats]);

  useEffect(() => {
    setData({
      attemptValues,
      states,
      control,
      stats,
    });
  }, [dataHandler]);

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.Title>POKEO</S.Title>
        </S.Header>
        <S.Main>
          {states.map((state, index) => (
            <TableLetters
              key={index}
              state={state}
              attemptValue={attemptValues[index]}
              setAttemptValues={setAttemptValues}
              index={index}
              values={values}
              setValues={setValues}
              verifyLetters={verifyLetters}
              test={test}
              setTest={setTest}
            />
          ))}
        </S.Main>
        <S.Footer>
          <Keyboard setTest={setTest} />
        </S.Footer>
      </S.Wrapper>

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

export default Home;
