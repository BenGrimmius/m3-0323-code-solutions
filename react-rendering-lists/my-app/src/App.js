import './App.css';
import PokemonList from './PokemonList';

const pokedex = [
  { number: '001', name: 'Bulbasaur', imgId: 'RcOwYdF' },
  { number: '004', name: 'Charmander', imgId: '8YFMclo'},
  { number: '007', name: 'Squirtle', imgId: 'JCuOCzs'},
  { number: '025', name: 'Pikachu', imgId: '7hskuCz' },
  { number: '039', name: 'Jigglypuff', imgId: '809zgaO'}
];

function App() {
  return (
    <div style={{
      width: '100vw',
      margin: '100px'
    }}>
      <ul style={{
        listStyleType: 'none'
      }}>
        <PokemonList pokedex={pokedex}/>
      </ul>
    </div>
  )
}

export default App;
