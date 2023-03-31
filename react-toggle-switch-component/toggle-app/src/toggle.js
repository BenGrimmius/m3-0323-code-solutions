import { useState } from "react";

export default function ToggleSwitch() {
  let [power, setPower] = useState(true);

  function handleClick() {
    setPower(!power)
  }

  if (power === true) {
    return (
      <>
        <div className="switch-path on">
          <div className="circle right" onClick={handleClick}></div>
        </div>
        <h3>on</h3>
      </>
    )
  } else {
    return (
      <>
        <div className="switch-path off">
          <div className="circle left" onClick={handleClick}></div>
        </div>
        <h3>off</h3>
      </>
    )
  }
}
