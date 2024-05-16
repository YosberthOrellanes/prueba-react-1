// Buscador.jsx

import React, { useState } from 'react';

const Buscador = ({ pokemonData, setFilteredPokemon }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term)
    );
    setFilteredPokemon(filtered);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar Pokémon"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Buscador;
