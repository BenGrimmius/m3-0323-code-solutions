import { useState } from "react";

export default ToggleButton

function ToggleButton({ text, color }) {
  let [isClicked, setIsClicked] = useState(false)

  console.log('-useState: ', isClicked)
  function handleClick() {
    console.log('--before: ', isClicked)
    setIsClicked(
      !isClicked
    );
    console.log('---after: ', isClicked)
  }
  let bkgColor = '';
  isClicked ? bkgColor = color : bkgColor = 'white'

  return (
    <button onClick={handleClick} style={{ backgroundColor: bkgColor, margin: '15px'}}>
      {text}
    </button>
  )
}
