import * as S from './styled';
import { AttemptLettersType } from '../../components/AttemptLetters';
import Modal from '../../components/Modal';
import Keyboard from '../../components/Keyboard';
import Board from '../../components/Board';
import { KeyboardProvider } from '../../providers/keyboard';

type DataType = {
  attemps: AttemptLettersType[][];
};

type HomeProps = {
  word: string[];
};

const Home = ({ word }: HomeProps) => {
  return (
    <>
      <KeyboardProvider>
        <S.Wrapper>
          <S.Header>
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
      <Modal />
    </>
  );
};

export default Home;
