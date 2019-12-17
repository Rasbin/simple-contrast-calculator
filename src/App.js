import React from 'react';
import ColorBox from './ColorBox';
import CurrentColorContrast from './CurrentColorContrast';
import HexToHSL from './utils/HexToHSL';
import HSLToHex from './utils/HSLToHex';
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
    selectedContrastRation12: 0,
    selectedContrastRation13: 0,
    selectedContrastRation23: 0,
    colorsToChange: '',
  }

  handleHexColorChange = (colorNumber, hexColorValue) => {
    colorNumber === 1
    ? this.setState({
      hexColor1: hexColorValue,
      hslColor1: HexToHSL(hexColorValue),
    })
    : (colorNumber === 2
    ? this.setState({
      hexColor2: hexColorValue,
      hslColor2: HexToHSL(hexColorValue),
    })
    : this.setState({
      hexColor3: hexColorValue,
      hslColor3: HexToHSL(hexColorValue),
    })
    );
  }

  handleHSLupdate = (colorNumber, hslElement, hslElementValue) => {
    // Update first box HSL Color
    colorNumber === 1
    ? (hslElement === "hue"
        ? this.setState({
            hslColor1hue: hslElementValue
        }) : ((hslElement === "saturation")
        ? this.setState({
            hslColor1saturation: hslElementValue
        })
        : this.setState({
            hslColor1lightness: hslElementValue
        }))
      )
    
    // Update second box HSL color
    : (colorNumber === 2
    ? (hslElement === "hue"
        ? this.setState({
            hslColor2hue: hslElementValue
        }) : ((hslElement === "saturation")
        ? this.setState({
            hslColor2saturation: hslElementValue
        })
        : this.setState({
            hslColor2lightness: hslElementValue
        }))
      )

      // Update third box HSL color
      : (hslElement === "hue"
      ? this.setState({
          hslColor3hue: hslElementValue
      }) : ((hslElement === "saturation")
      ? this.setState({
          hslColor3saturation: hslElementValue
      })
      : this.setState({
          hslColor3lightness: hslElementValue
      }))
    )
    )

    const hslColor1 = 'hsl(' + this.state.hslColor1hue + ", " + this.state.hslColor1saturation + '%, ' + this.state.hslColor1lightness + "%)";
    const hslColor2 = 'hsl(' + this.state.hslColor2hue + ", " + this.state.hslColor2saturation + '%, ' + this.state.hslColor2lightness + "%)";
    const hslColor3 = 'hsl(' + this.state.hslColor3hue + ", " + this.state.hslColor3saturation + '%, ' + this.state.hslColor3lightness + "%)";

    this.setState({
      hslColor1: hslColor1,
      hslColor2: hslColor2,
      hslColor3: hslColor3,
    })

    // Send HSL value to HSLToHexFunction and update HEX value in state
      colorNumber === 1
      ? this.setState({
        hexColor1: HSLToHex(this.state.hslColor1hue, this.state.hslColor1saturation, this.state.hslColor1lightness),
      })
      : (colorNumber === 2
      ? this.setState({
        hexColor2: HSLToHex(this.state.hslColor2hue, this.state.hslColor2saturation, this.state.hslColor2lightness),
      })
      : this.setState({
        hexColor3: HSLToHex(this.state.hslColor3hue, this.state.hslColor3saturation, this.state.hslColor3lightness),
      })
      );
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
          parentCallBackHexColorChange={this.handleHexColorChange}
          parentCallBackHslColorChange={this.handleHSLupdate}
        />
        <ColorBox
          colorNumber={2}
          hexColor2={this.state.hexColor2}
          hslColor2hue={this.state.hslColor2hue}
          hslColor2saturation={this.state.hslColor2saturation}
          hslColor2lightness={this.state.hslColor2lightness}
          hslColor2={this.state.hslColor2}
          parentCallBackHexColorChange={this.handleHexColorChange}
          parentCallBackHslColorChange={this.handleHSLupdate}
        />
        <ColorBox
          colorNumber={3}
          hexColor3={this.state.hexColor3}
          hslColor3hue={this.state.hslColor3hue}
          hslColor3saturation={this.state.hslColor3saturation}
          hslColor3lightness={this.state.hslColor3lightness}
          hslColor3={this.state.hslColor3}
          parentCallBackHexColorChange={this.handleHexColorChange}
          parentCallBackHslColorChange={this.handleHSLupdate}
        />
        <CurrentColorContrast
          hexColor1={this.state.hexColor1}
          hexColor2={this.state.hexColor2}
          hexColor3={this.state.hexColor3}
        />
      </div>
    );
  }
}

export default App;
