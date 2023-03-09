

function App() {

  function handleClick(){
    console.log(process.env.NAME)
    console.log(process.env.EMAIL)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Gen env</button>
    </div>
  );
}

export default App;
