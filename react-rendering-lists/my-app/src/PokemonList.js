import getImageURL from "./getImageURL"

export default function PokemonList(pokedex) {
  const ListItems = pokedex.pokedex.map(pokemon =>
    <li key={pokemon.number} style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
      <img src={getImageURL(pokemon)} alt='Bulbasaur'/>
      <b style={{margin: '5px'}}>{pokemon.name}</b>
    </li>
    )

  return (
    <article>
      {ListItems}
    </article>
  )
}
