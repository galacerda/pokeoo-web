import { SnackbarProvider } from '../providers/snackbar';
import { getPokemonOfDay } from '../services/pokemons';
import Template from '../templates/Home';

type HomeProps = {
  pokemonOfTheDay: string;
};

const Home = ({ pokemonOfTheDay }: HomeProps) => {
  return (
    <SnackbarProvider>
      <Template word={pokemonOfTheDay.toUpperCase().split('')} />
    </SnackbarProvider>
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
