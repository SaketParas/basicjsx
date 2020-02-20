import React from 'react';
import './App.css';

const code1 = 'Next line ';
function evaluate(a, b) {
  if (a > b) {
    return (
      <span className="subtrac">{a - b}</span>
    )
  }
  else {
    return (
      <span className="sum">{a + b}</span>
    )
  }
}
const click_me = () => alert('Alert page');

function App() {
  return (
    <div className="App">
      <h5>Learn React</h5>
      <p>let's start {code1}</p>
      <h4>After evaluation {evaluate(5,1)}</h4>
      <button onClick={click_me}>Enter</button>
    </div>
  );
}

export default App;
