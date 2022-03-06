import axios from 'axios';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import client from '../graphql/client';
import GET_POKEMONS from '../graphql/queries/getPokemons';
import Template from '../templates/Home';

type PokemonListType = {
  pokemon_v2_pokemonspeciesname: {
    name: string;
    id: string;
  }[];
};

const Home = ({ pokemons }: any) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const dataLocalStorage = localStorage.getItem('data');
    if (dataLocalStorage) setData(JSON.parse(dataLocalStorage));
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const createPokemonsAPI = async () => {
    try {
      const eita = await axios.post('http://localhost:3333/pokemon', pokemons);
    } catch (e) {}
  };
  return <Template data={data} setData={setData} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { pokemon_v2_pokemonspeciesname }: PokemonListType =
    await client.request(GET_POKEMONS, {
      language_id: { _eq: 9 },
    });

  const pokemons = pokemon_v2_pokemonspeciesname?.filter(
    ({ name }) => name.length === 7
  );

  return {
    props: { pokemons },
  };
};

export default Home;
