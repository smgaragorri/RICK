const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const getDataApi = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          specie: character.species,
          status: character.status,
          origin: character.origin.name,
          image: character.image,
          episode: character.episode.length,
        };
      });
    });
};

export { getDataApi };
