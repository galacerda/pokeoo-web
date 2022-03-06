const GET_POKEMONS = /* GraphQL */ `
  query samplePokeAPIquery($language_id: Int_comparison_exp) {
    pokemon_v2_pokemonspeciesname(where: { language_id: $language_id }) {
      name
    }
  }
`;

export default GET_POKEMONS;
