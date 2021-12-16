import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import CardUser from '../CardUser';

function Characters() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    try {
      api.get("characters").then((response) => {
        setCharacters(response.data.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [setCharacters]);

  return (
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        characters.map((character => (
          <CardUser key={character.id} character={character} />
        )))
      }
    </div>
  )
}

export default Characters
