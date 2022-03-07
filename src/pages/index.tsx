import axios from 'axios';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import client from '../graphql/client';
import GET_POKEMONS from '../graphql/queries/getPokemons';
import Template from '../templates/Home';
import { pokemons } from '../utils/constants/pokemons';
import { startEndTime } from '../utils/functions/startEndTime';

type HomeProps = {
  pokemonOfTheDay: string;
};

const Home = ({ pokemonOfTheDay }: HomeProps) => {
  const [data, setData] = useState({});
  const [word, setWord] = useState<string>(pokemonOfTheDay);
  console.log(word, 'word');
  useEffect(() => {
    const dataLocalStorage = localStorage.getItem('data');
    const dataLocalStorageParsed = JSON.parse(dataLocalStorage as string);

    const { end } = startEndTime();

    if (Date.now() >= end) {
      setData({ stats: dataLocalStorageParsed.stats });
    } else if (dataLocalStorage) setData(dataLocalStorageParsed);
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const createPokemonsAPI = async () => {
    try {
      const eita = await axios.post('http://localhost:3333/pokemon', pokemons);
    } catch (e) {}
  };
  return (
    <Template
      data={data}
      setData={setData}
      word={word.toUpperCase().split('')}
    />
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
    props: { pokemonOfTheDay: pokemonOfTheDay?.data || 'a' },
  };
};

export default Home;
