import { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        setPokemons(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <hr />
      <h2>Axios</h2>
      <ol>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Pokemons;
