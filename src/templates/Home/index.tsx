import * as S from './styled';
import TableLetters from '../../components/TableLetters';
import { useEffect, useRef, useState } from 'react';
import { AttemptLettersType } from '../../components/AttemptLetters';
import Modal from '../../components/Modal';
import Keyboard from '../../components/Keyboard';
import { pokemons } from '../../utils/constants/pokemons';
import { useData } from '../../providers/data';
import Board from '../../components/Board';
import { KeyboardProvider } from '../../providers/keyboard';
import { MessageType, useSnackbar } from '../../providers/snackbar';
import { v4 as uuid } from 'uuid';

const pokemonsNames = pokemons.map(({ name }) => name.toUpperCase());

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
