export default function GameList({gameList}) {
  const ListItems = gameList.map(game =>
    <li key={game.id}>
      <p className="list-titles">{game.title}</p>
    </li>
  )
  return (
    <>
      {ListItems}
    </>
  )
}
