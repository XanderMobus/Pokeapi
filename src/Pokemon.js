import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = ({ pokemon, index }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(pokemon.url);
      setPokemonData(response.data);
    };

    fetchData();
  }, [pokemon.url]);

  if (!pokemonData) return null;

  
  return (
    <div className="pokemon-card">
      <img
        src={pokemonData.sprites.front_default}
        alt={`${pokemonData.name} sprite`}
      />
      <h3>
        {index + 1}. {pokemonData.name}
      </h3>
      <div style={{ textAlign: 'center', backgroundColor: 'violet' }}>
        <p>Type: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default Pokemon;