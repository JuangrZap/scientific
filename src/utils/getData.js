const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    let loading = true;
    const apiURL = id ? `${API}${id}` : API;
    console.log(apiURL);
    try {
        loading = true;
        const response = await fetch(apiURL);
        const data = await response.json();
        loading = false;
        return { data, loading };
    } catch (error) {
        console.log('Fetch Error', error);
        loading = false;
    }
};

export default getData;
