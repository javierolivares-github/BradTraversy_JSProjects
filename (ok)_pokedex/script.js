// VARIABLES
const poke_container = document.querySelector('#poke-container');
const pokemon_count = 150;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}

const main_types = Object.keys(colors);


// FUNCTIONS
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
}

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const pokeId = pokemon.id.toString().padStart(3, '0');
  const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const pokeTypes = pokemon.types.map(type => type.type.name);
  const type = main_types.find(type => pokeTypes.indexOf(type) > -1);
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  pokemonEl.innerHTML = `
    <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${pokemon.name}" alt="pokemon">
    </div>
    <div class="info">
      <span class="number">#${pokeId}</span>
      <h3 class="name">${pokeName}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `;

  poke_container.appendChild(pokemonEl);
}

// getPokemon(1);
fetchPokemons();






