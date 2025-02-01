import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(12);

  const addValue = () => {
    if (counter <= 19) {
      counter = counter + 1;
      setCounter(counter);
    }
  };
  const removeValue = () => {
    if (counter >= 1) {
      counter = counter - 1;
      setCounter(counter);
    }
  };
  // console.log(counter);
  return (
    <>
      <h1>hello world</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
