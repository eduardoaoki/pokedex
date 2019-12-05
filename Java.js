async function mostraPokemon() {
	const id = document.getElementById("inputPokemon").value;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	document.getElementById("imgPokemon").src = await data.sprites.front_default;
  	document.getElementById("nomePokemon").innerHTML = await data.name;
	document.getElementById("tipoPokemon1").innerHTML = await data.types[0].type.name;
	document.getElementById("tipoPokemon2").innerHTML = await data.types[1].type.name;
}