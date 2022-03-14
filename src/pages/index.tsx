import axios from 'axios';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import client from '../graphql/client';
import GET_POKEMONS from '../graphql/queries/getPokemons';
import { DataProvider } from '../providers/data';
import { SnackbarProvider } from '../providers/snackbar';
import { getPokemonOfDay } from '../services/pokemons';
import Template from '../templates/Home';
import { pokemons } from '../utils/constants/pokemons';
import { startEndTime } from '../utils/functions/startEndTime';

type HomeProps = {
  pokemonOfTheDay: string;
};

const Home = ({ pokemonOfTheDay }: HomeProps) => {
  console.log(pokemonOfTheDay, 'pokemonOfTheDay');
  const createPokemonsAPI = async () => {
    try {
      const eita = await axios.post('http://localhost:3333/pokemon', pokemons);
    } catch (e) {}
  };
  return (
    <DataProvider>
      <SnackbarProvider>
        <Template word={pokemonOfTheDay.toUpperCase().split('')} />
        <button onClick={createPokemonsAPI}>aaa</button>
      </SnackbarProvider>
    </DataProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let pokemonOfTheDay = '';
  try {
    const response = await getPokemonOfDay();
    if (response) {
      pokemonOfTheDay = response.data;
    }
  } catch (e) {
    console.log('Algo deu errado!');
  }

  return {
    props: { pokemonOfTheDay },
  };
};

export default Home;
