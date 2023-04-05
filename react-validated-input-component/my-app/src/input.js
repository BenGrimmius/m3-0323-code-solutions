import { useState } from "react";

export default function PasswordInput() {
  let [inputValue, setInputValue] = useState('')

  let icon = '';
  let color = '';
  let text = '';
  // inputValue.length = 0 ? text = 'A password is required' : text = '';
  inputValue.length >= 8 ? icon = 'fa-solid fa-check fa-beat fa-2xl' : icon = 'fa-solid fa-xmark fa-2xl';
  inputValue.length >= 8 ? color = 'green' : color = 'red';
  // inputValue.length >= 8 ? text = 'Thats perfect!' : text = 'Your password is too short!'
  if (inputValue.length === 0) {
    text = 'A password is required';
  } else if (inputValue.length < 8) {
    text = 'Your password is too short';
  } else {
    text = 'Thats perfect!'
  }


  return (
    <>
      <label style={{ fontWeight: 'bold' }}>Password
      <br/>
        <input
        name="password"
        value={ inputValue }
        style={{ border: '5px solid black', borderRadius: '5%' }}
        onChange={ e => (setInputValue(e.target.value)) }/>
        <div className={ icon } style={{ marginLeft: '10px', color: color }}/>
        <div style={{ color: color, marginTop: '5px', fontWeight: 'bold'}}> { text } </div>
      </label>
    </>
  )
}
