import * as S from './styled';
import { AttemptLettersType } from '../../components/AttemptLetters';
import Modal from '../../components/Modal';
import Keyboard from '../../components/Keyboard';
import Board from '../../components/Board';
import { KeyboardProvider } from '../../providers/keyboard';
import { DataProvider } from '../../providers/data';
import Stats from '../../components/Stats';

type DataType = {
  attemps: AttemptLettersType[][];
};

type HomeProps = {
  word: string[];
};

const Home = ({ word }: HomeProps) => {
  return (
    <>
      <DataProvider>
        <KeyboardProvider>
          <S.Wrapper>
            <S.Header>
              {/* <Stats word={word} /> */}
              <S.Title>POKEO</S.Title>
            </S.Header>
            <S.Main>
              <Board word={word} />
            </S.Main>
            <S.Footer>
              <Keyboard />
            </S.Footer>
          </S.Wrapper>
        </KeyboardProvider>
        <Modal word={word} />
      </DataProvider>
    </>
  );
};

export default Home;
