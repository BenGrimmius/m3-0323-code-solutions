import './App.css';
import Container from './App-Pokemon';
import bulbasaurPhoto from './images/001.png';
import charmanderPhoto from './images/004.png';
import squirtlePhoto from './images/007.png';
import pikachuPhoto from './images/025.png';
import jigglypuffPhoto from './images/039.png';

const pokemonList = [
  { number: '001', name: 'Bulbasaur', src: bulbasaurPhoto},
  {number: '004', name: 'Charmander', src: charmanderPhoto},
  {number: '007', name: 'Squirtle', src: squirtlePhoto},
  {number: '025', name: 'Pikachu', src: pikachuPhoto},
  {number: '039', name: 'Jigglypuff', src: jigglypuffPhoto}
]

function App() {

  return (
    <>
      <Container items={pokemonList}/>
    </>
  );
}

export default App;
