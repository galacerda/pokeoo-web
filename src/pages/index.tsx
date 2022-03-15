import { DataProvider } from '../providers/data';
import { SnackbarProvider } from '../providers/snackbar';
import { getPokemonOfDay } from '../services/pokemons';
import Template from '../templates/Home';

type HomeProps = {
  pokemonOfTheDay: string;
};

const Home = ({ pokemonOfTheDay }: HomeProps) => {
  return (
    <DataProvider>
      <SnackbarProvider>
        <Template word={pokemonOfTheDay.toUpperCase().split('')} />
      </SnackbarProvider>
    </DataProvider>
  );
};

export const getServerSideProps = async () => {
  let pokemonOfTheDay = '';

  const response = await getPokemonOfDay();
  if (response) {
    pokemonOfTheDay = response.data;
  }

  return {
    props: { pokemonOfTheDay },
  };
};

export default Home;
