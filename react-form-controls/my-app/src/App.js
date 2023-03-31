import './App.css';
import RegistrationFormUncontrolled from './uncontrolled';
import RegistrationFormControlled from './controlled';

function App() {
  return (
    <div style={{
      width: '200px',
      margin: '50px'
    }}>
      <RegistrationFormUncontrolled/>
      <RegistrationFormControlled/>
    </div>
  )
}

export default App;
