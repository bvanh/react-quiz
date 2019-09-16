import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
    <h1>Quiz</h1>
    <ul>
      <h2>Câu 1 : Con chó có mấy chân ?</h2>
    </ul>
    <li>
      <h3 className="exit">
        <p>A : 1 chân</p>
      </h3>
    </li>
    <li>
      <h3 className="exit">
        <p>B : 2 chân</p>
      </h3>
    </li>
    <li>
      <h3 className="exit">
        <p>C : 3 chân</p>
      </h3>
    </li>
    <li>
      <h3 className="exit">
        <p>D : 4 chân</p>
      </h3>
    </li>
  </div>
  );
}
}

export default App;
