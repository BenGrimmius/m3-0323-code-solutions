import './App.css';
import AppDrawer from './AppDrawer';
// import { useState } from 'react';

const gameList = [{
  id: 1,
  title: 'Friday the 13th'
}, {
  id: 2,
  title: 'Super Mario Party'
}, {
  id: 3,
  title: 'Resident Evil 4'
}, {
  id: 4,
  title: 'Skyrim'
}]

function App() {

  return (
    <div className='container'>
        <AppDrawer
        menuHeading='Choose a Game'
        items={gameList}

        />
    </div>
  );
}

export default App;
