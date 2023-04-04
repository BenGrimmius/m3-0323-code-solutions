import { useState } from 'react';

export default function RegistrationFormControlled() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Username: ", username)
    console.log("Password: ", password)
  }

  const styles = {
    border: '1px solid black',
    padding: '5px'
  }

  return (
    <>
      <h1>Controlled Form</h1>
      <form style={styles} onSubmit={handleSubmit}>
        <label>
          Username:
          <input name='username'
          value={username}
          onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          Password:
          <input name='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}/>
        </label>
        <button type='submit' style={{ marginTop: '10px' }}>Submit</button>
      </form>
    </>
  )
}
