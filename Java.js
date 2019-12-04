async function mostraPokemon() {
	const id = document.getElementById("inputPokemon").value
	const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
	const response = await fetch(url)
	const data = await response.json()
	document.getElementById("imgPokemon").src = await data.sprites.front_default
  document.getElementById("nomePokemon").innerHTML = await data.name
}