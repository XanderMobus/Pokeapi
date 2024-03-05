import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonGrid from './PokemonGrid';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
      );
      setPokemonData(response.data.results);
    };

    fetchData();
  }, []);

  return <PokemonGrid pokemonData={pokemonData} />;
};

export default PokemonList;