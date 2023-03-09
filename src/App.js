

function App() {

  function handleClick(){
    console.log(process.env.REACT_APP_NAME)
    console.log(process.env.REACT_APP_EMAIL)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Gen env</button>
    </div>
  );
}

export default App;
