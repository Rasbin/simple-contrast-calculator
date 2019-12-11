import React from 'react';
import ColorBox from './ColorBox';
import CurrentColorContrast from './CurrentColorContrast';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Color Contrast Calculator</h1>
        <ColorBox colorNumber={1} />
        <ColorBox colorNumber={2} />
        <ColorBox colorNumber={3} />
        <CurrentColorContrast />
      </div>
    );
  }
}

export default App;
