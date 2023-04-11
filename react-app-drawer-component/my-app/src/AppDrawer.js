import { FaBars } from "react-icons/fa"
import { useState } from "react"

export default function AppDrawer({ menuHeading, items }) {
  let [view, setView] = useState(false);

  function handleClick() {
    setView(!view)
  }

  function handleBgClick() {
    if (view !== true) {
      handleClick()
    }
  }

  const drawerStat = view ? 'drawer closed' : 'drawer open'
  let bg = view ? 'bg' : 'bg shade'
  let listShade = view ? 'list' : 'list-titles list-shade'
console.log(view)

  let ListItems = items.map(game =>
    <li key={game.id}>
      <p className={listShade}>{game.title}</p>
    </li>
  )

  return (
    <>
    <div className= {drawerStat}>
      <div className='menu'>
        <h1>{menuHeading}</h1>
        <FaBars size={45} className='bars' onClick={handleClick}/>
      </div>
        <div>
          <ul onClick={handleClick}>
            {ListItems}
          </ul>
        </div>
    </div>
    <div className={bg} onClick={handleBgClick}></div>
    </>
  )
}
