export default function getImageURL(pokemon) {
  console.log(pokemon)
  return (
    'https://i.imgur.com/' +
    pokemon.imgId +
    's.jpg'
  );
}
