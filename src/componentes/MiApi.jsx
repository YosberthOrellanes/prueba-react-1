// MiApi.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Buscador from './Buscador';

const MiApi = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
        setPokemonData(response.data.results);
        setFilteredPokemon(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container1">
      <h1 className="text-center mb-4">Atrapa Tu Pokemon</h1>
      <Buscador pokemonData={pokemonData} setFilteredPokemon={setFilteredPokemon} />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredPokemon.map((pokemon, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">{pokemon.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiApi;
