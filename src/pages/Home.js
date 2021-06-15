import getData from '../utils/getData';

const Home = async () => {
    const { data, loading } = await getData();
    const characters = data;
    console.log(characters);

    const loader = `
    <h1>Loading...</h1>
    `;

    const view = `
      <div class="Characters">
        ${characters.results
            .map(
                (character) => `
        <article class="Character-item">
          <a href="#/${character.id}/" >
            <img src="${character.image}" alt="${character.name}" />
            <h2>${character.name}</h2>
          </a>
        </article>
        `
            )
            .join('')}
      </div>
    `;
    return loading ? loader : view;
};

export default Home;
