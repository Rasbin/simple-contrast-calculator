import React from 'react';
import ColorBox from './ColorBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Color Contrast Calculator</h1>
      <ColorBox colorNumber={1} />
      <ColorBox colorNumber={2} />
      <ColorBox colorNumber={3} />
    </div>
  );
}

export default App;
