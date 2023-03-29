import { useState } from "react"

export default function HotButton() {
  let [heat, setHeat] = useState(0)

  function handleClick() {
    setHeat(heat + 1)
  }

  let bkgColor = '';
  if (heat < 3) {
    bkgColor = 'black'
  } else if (heat > 2 && heat < 6) {
    bkgColor = '#9c239a'
  } else if (heat > 5 && heat < 9) {
    bkgColor = '#89518a'
  } else if (heat > 8 && heat < 12) {
    bkgColor = '#ca5176'
  } else if (heat > 11 && heat < 15) {
    bkgColor = 'rgb(241 27 95)'
  } else if (heat > 14 && heat < 18) {
    bkgColor = '#ffff34'
  } else {
    bkgColor = 'rgb(255 255 255)'
  }

  let textColor = ''
  if (heat < 3) {
    textColor = 'white'
  } else {
    textColor = 'black'
  }


  return (
    <>
      <button onClick={handleClick} style={{
        backgroundColor: bkgColor,
        color: textColor,
        marginRight: '30px',
        fontSize: '50px',
        boxShadow: '5px 10px'
        }}>
          Hot Button
      </button>
      <h3 style={{ backgroundColor: 'yellow', border: '2px solid black', padding: '10px'}}>{heat} Clicks</h3>
    </>
  )
}
