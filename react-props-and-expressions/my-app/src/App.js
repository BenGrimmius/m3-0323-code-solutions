import './App.css';
import './CustomButton.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <CustomButton
        text={'I'}
        color='red'
      />
      <CustomButton
        text={'know'}
        color='green'
      />
      <CustomButton
        text={'React!'}
        color='blue'
      />
    </div>
  );
}

export default App;
