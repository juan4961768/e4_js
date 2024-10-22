const baseURL = "https://pokeapi.co/api/v2/pokemon/";
                 


const loader = document.querySelector(".pokeballs-container");

/* let buton = document.querySelector("#buton"); */

let isFetching = false;
const nextURL = {
  next: null,
};

const renderPokemon = (pokemon) => {
    const { id, name, sprites, height, weight, types } = pokemon;
  
    return `
      <div class="poke">
          <img  src="${sprites.other.home.front_default}"/>
          <h2>${name.toUpperCase()}</h2>
          <span class="exp">EXP: ${pokemon.base_experience}</span>
          <div class="tipo-poke">
              ${types
                .map((tipo) => {
                  return `<span class="${tipo.type.name} poke__type">${tipo.type.name}</span>`;
                })
                .join("")}
          </div>
          <p class="id-poke">#${id}</p>
          <p class="height">Height: ${height / 10}m</p>
          <p class="weight">Weight: ${weight / 10}Kg</p>
      </div>
    `;
  };

  const renderPokemonList = (pokeList) => {
    const cards = pokeList
      .map((pokemon) => {
        return renderPokemon(pokemon);
      })
      .join("");
      const caja = document.querySelector("#caja");
    caja.innerHTML += cards;
  };

  const fetchPokemons = async () => {
    var numero = document.getElementById("miNumero").value;
     const res = await fetch(`${baseURL}${numero} `); 
   /*  const res = await fetch(`${baseURL}?limit=8&offset=0`); */
    const data = await res.json();
  
    return data;
  };

  
const loadAndPrint = (pokemonsList) => {
    
    loader.classList.add("show");
    setTimeout(() => {
      loader.classList.remove("show");
      renderPokemonList(pokemonsList);
      isFetching = false;
    }, 1500);
  };
/*   document.querySelector("#buton").addEventListener("click", myFunction); */



/* const buton =document.getElementById("buton");
  buton.addEventListener("click", myFunction);  */

  
 
/*   async function myFunction() {
    let { next, results } = await fetchPokemons();

    nextURL.next = next;

    const URLS = results.map((pokemon) => pokemon.url);

    const InfoPokemones = await Promise.all(
      URLS.map(async (url) => {
        const nextPokemons = await fetch(url);
        return await nextPokemons.json();
      })
    );

    renderPokemonList(InfoPokemones);
  }; */

  async function myFunction() {
    var numero = document.getElementById("miNumero").value;
   url= baseURL+numero;
   console.log(url);
   const nextPokemons = await fetch(url);
   //console.log(await nextPokemons.json());
   //const poquemon = await nextPokemons.json();
   cards= renderPokemon(  await nextPokemons.json() ); 

    const caja = document.querySelector("#caja");
    caja.innerHTML = cards;

  };