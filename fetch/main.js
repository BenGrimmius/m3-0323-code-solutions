async function logJSONData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/94')
    .then((response) => {
      if (response.ok) {
        const json = response.json();
        console.log('json: ', json);
        console.log('ok?: ', response.ok);
      }
    })
    .catch(() => {
      throw new Error(`NEW HTTP ERROR: ${response.status}`);
    });
}
logJSONData();
