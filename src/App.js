import React from 'react';
import ColorBox from './ColorBox';
import CurrentColorContrast from './CurrentColorContrast';
import './App.css';

class App extends React.Component {
  state = {
    hexColor1: '#BD10E0',
    hexColor2: '#4A90E2',
    hexColor3: '#9B9B9B',
    hslColor1hue: 290,
    hslColor1saturation: 87,
    hslColor1lightness: 47,
    hslColor1: 'hsl(290, 87%, 47%)',
    hslColor2hue: 212,
    hslColor2saturation: 72,
    hslColor2lightness: 59,
    hslColor2: 'hsl(212, 72%, 59%)',
    hslColor3hue: 0,
    hslColor3saturation: 0,
    hslColor3lightness: 61,
    hslColor3: 'hsl(0, 0%, 61%)',
  }
  render() {
    return (
      <div className="App">
        <h1>Color Contrast Calculator</h1>
        <ColorBox
          colorNumber={1}
          hexColor1={this.state.hexColor1}
          hslColor1hue={this.state.hslColor1hue}
          hslColor1saturation={this.state.hslColor1saturation}
          hslColor1lightness={this.state.hslColor1lightness}
          hslColor1={this.state.hslColor1}
        />
        <ColorBox
          colorNumber={2}
          hexColor2={this.state.hexColor2}
          hslColor2hue={this.state.hslColor2hue}
          hslColor2saturation={this.state.hslColor2saturation}
          hslColor2lightness={this.state.hslColor2lightness}
          hslColor2={this.state.hslColor2}
        />
        <ColorBox
          colorNumber={3}
          hexColor3={this.state.hexColor3}
          hslColor3hue={this.state.hslColor3hue}
          hslColor3saturation={this.state.hslColor3saturation}
          hslColor3lightness={this.state.hslColor3lightness}
          hslColor3={this.state.hslColor3}
        />
        <CurrentColorContrast />
      </div>
    );
  }
}

export default App;
