const pokeApi = {

}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((responseUrl) => responseUrl.json())
        .then((responseBody) => responseBody.results)
        .then((resPokemons) => resPokemons.map((resPokemon) => fetch(resPokemon.url).then((responseUrlDetail) => responseUrlDetail.json())))
        .then((resDetails) => Promise.all(resDetails))
        .then((resPokemonDetails) => {
            return resPokemonDetails;
        })
        .catch((error) => console.error(error))
}

Promisse.all([

])
