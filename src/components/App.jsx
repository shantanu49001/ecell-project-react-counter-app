import React from "react";
function App() {
  //it is a array containg states
  const [count, setCount] = React.useState(0); //it is staring of state
  //use state is a hook

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
