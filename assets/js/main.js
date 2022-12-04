
function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
}


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
 
            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>
            
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" />
            </div>
        </li>
        `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons()
    .then((resPokemonList = []) => {
        /*
        const listItens = [];
        for (let i = 0; i < resPokemonList.length; i++) {
            const pokemon = resPokemonList[i];
            listItens.push(convertPokemonToLi(pokemon));
        }
        //Não usando o index e o array, vira...
        //resPokemonList.map((pokemon, index, array) => { })

        resPokemonList.map((pokemon) => { 
            return convertPokemonToLi(pokemon);
        })
        Quando funcao tem uma linha:
        resPokemonList.map((pokemon) => convertPokemonToLi(pokemon))

        Como se trata da mesma coisa, ainda pode ser simplificado para:
        */
        pokemonList.innerHTML += resPokemonList.map(convertPokemonToLi).join('');
    })

