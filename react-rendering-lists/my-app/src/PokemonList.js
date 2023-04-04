export default function PokemonList(pokedex) {
  const ListItems = pokedex.pokedex.map(pokemon =>
    <li key={pokemon.number}>
      <b>{pokemon.name}</b>
    </li>
    )

  return (
    <article>
      {ListItems}
    </article>
  )
}
