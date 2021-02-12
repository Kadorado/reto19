// Variables
const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

// Secundary Function
// Colors Arrays
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (data) => {
  const div = document.createElement("div");
  div.classList.add("pokemon");

  const poke_types = data.types.map((type) => type.type.name);

  
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  
  const color = colors[type];
  const src = data.sprites.other.dream_world.front_default;
  const pokemonName = data.name;
  const pokemonId = data.id;

  div.style.backgroundColor = color;
  div.innerHTML = `
	<div class="img-container">
          <img src="${src}" alt="">
        </div>
        <div class="info">
          <span class="number">${("000" + pokemonId).slice(-3)}</span>
          <h3 class="name">${pokemonName}</h3>
          <small class="type">Type: <span>${type}</span></small>
		</div>`;

  poke_container.appendChild(div);
};

// Main function

fetchPokemons();
