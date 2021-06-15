import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Character = async () => {
    const id = getHash();
    const { data, loading } = await getData(id);
    const character = data;
    console.log({ character });
    console.log({ loading });

    const loader = `
    <h1>Loading...</h1>
    `;

    const view = `
      <div class="Characters-inner">
        <article class="Characters-card">
          <img src="${character.image}" alt="${character.name}" />
          <h2>${character.name}</h2>
        </article>
        <article class="Characters-card">
          <h3>Episodes: <span>${character.episode.length || 0}</span></h3>
          <h3>Status: <span>${character.status}</span></h3>
          <h3>Species: <span>${character.species}</span></h3>
          <h3>Gender: <span>${character.gender}</span></h3>
          <h3>Origin: <span>${character.origin.name}</span></h3>
          <h3>Last Location: <span>${character.location.name}</span></h3>
        </article>
      </div>
    `;
    return loading && !character ? loader : view;
};

export default Character;
