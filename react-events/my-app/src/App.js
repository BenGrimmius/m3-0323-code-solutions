
function CustomButton({ text, color, customCLick}) {
  // function handleClick() {
  //   alert(`Alert: ${text}`)
  // }

  return (
    <button
      style={{
        backgroundColor: color, color: 'white',
        margin: '20px',
      }}
      onClick={customCLick}
      >
        {text}
    </button>
  )
}

function App() {
  return (
    <div style={{ width: '900px', margin: '100px auto'}}>
      <CustomButton customCLick={() => alert('You clicked the blue button.') } text='Blue button' color={'blue'}>Click here</CustomButton>
      <CustomButton customCLick={() => alert('You clicked the green button.') } text='Green button' color={'green'}>Or here</CustomButton>
      <CustomButton customCLick={() => alert('You clicked the red button.') } text='Red button' color={'red'}>Click again here</CustomButton>
    </div>
  );
}

export default App;
