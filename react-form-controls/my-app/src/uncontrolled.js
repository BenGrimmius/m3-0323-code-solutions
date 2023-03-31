export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson)
  }

  const styles = {
    border: '1px solid black',
    padding: '5px',
  }

  return (
    <>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handleSubmit} style={styles}>
        <label>
        Username: <input name="username"/>
        </label>

        <label>
          Password: <input type='password' name="password"/>
        </label>
        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>

    </>
  )
}
