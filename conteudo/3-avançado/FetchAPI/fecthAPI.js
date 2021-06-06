// ANTIGO

// const api = fetch('https://pokeapi.co/api/v2/pokemon/ditto')

// .then(reponse => {
//     return reponse.json();

// }).then(json => {
//     console.log(json)

// });

// NOVO

async function fetchPokes(url) {

    const response = await fetch(url);

    const pokesJson = await response.json();
    
    console.log(pokesJson)
}

fetchPokes('https://pokeapi.co/api/v2/pokemon/ditto')