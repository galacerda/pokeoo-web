import axios from 'axios';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import client from '../graphql/client';
import GET_POKEMONS from '../graphql/queries/getPokemons';
import { DataProvider } from '../providers/data';
import Template from '../templates/Home';
import { pokemons } from '../utils/constants/pokemons';
import { startEndTime } from '../utils/functions/startEndTime';

type HomeProps = {
  pokemonOfTheDay: string;
};

const Home = ({ pokemonOfTheDay }: HomeProps) => {
  const createPokemonsAPI = async () => {
    try {
      const eita = await axios.post('http://localhost:3333/pokemon', pokemons);
    } catch (e) {}
  };
  return (
    <DataProvider>
      <Template word={pokemonOfTheDay.toUpperCase().split('')} />
    </DataProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let pokemonOfTheDay;
  try {
    pokemonOfTheDay = await axios.get('http://localhost:3333/pokemon');
  } catch (e) {
    console.log('Algo deu errado!');
  }

  return {
    props: { pokemonOfTheDay: pokemonOfTheDay?.data || 'pikachu' },
  };
};

export default Home;
