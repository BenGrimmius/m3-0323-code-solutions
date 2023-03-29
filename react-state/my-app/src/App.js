import ToggleButton from "./ToggleButton";

function App() {
  return (
    <div style={{
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '200px'
       }}>
      <ToggleButton text='First Btn' color='lime'/>
      <ToggleButton text='Second Btn' color='hotpink'/>
      <ToggleButton text='Third Btn' color='skyblue'/>
    </div>
  )
}

export default App;
