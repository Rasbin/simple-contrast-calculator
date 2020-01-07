import React from 'react';
import ColorBox from './ColorBox';
import ColorSuggestion from './ColorSuggestion';
import CurrentColorContrast from './CurrentColorContrast';
import HexToHSL from './utils/HexToHSL';
import HSLToHex from './utils/HSLToHex';
import findClosestAccessibleColor from './utils/color';
import './App.css';

class App extends React.Component {
  state = {
    hexColor1: '#000000',
    hexColor2: '#000000',
    hexColor3: '#000000',
    hslColor1hue: 0,
    hslColor1saturation: 0,
    hslColor1lightness: 0,
    hslColor1: 'hsl(0, 0%, 0%)',
    hslColor2hue: 0,
    hslColor2saturation: 0,
    hslColor2lightness: 0,
    hslColor2: 'hsl(0, 0%, 0%)',
    hslColor3hue: 0,
    hslColor3saturation: 0,
    hslColor3lightness: 0,
    hslColor3: 'hsl(0, 0%, 0%)',
    selectedContrastRatio12: 0,
    selectedContrastRatio13: 0,
    selectedContrastRatio23: 0,
    colorsToChange: 0,
    findColors: 'untouched',
    cr12status: 'untouched',
    cr13status: 'untouched',
    cr23status: 'untouched',
  }

  handleFindColors = () => {
    this.setState({
      findColors: 'touched'
    })
  }

  handleHexColorChange = (colorNumber, hexColorValue) => {
    colorNumber === 1
    ? this.setState({
      hexColor1: hexColorValue,
      hslColor1: HexToHSL(hexColorValue),
      hslColor1hue: HexToHSL(hexColorValue).split(',')[0].split('(')[1],
      hslColor1saturation: HexToHSL(hexColorValue).split(',')[1].split('%')[0],
      hslColor1lightness: HexToHSL(hexColorValue).split(',')[2].split('%')[0]

    })
    : (colorNumber === 2
    ? this.setState({
      hexColor2: hexColorValue,
      hslColor2: HexToHSL(hexColorValue),
      hslColor2hue: HexToHSL(hexColorValue).split(',')[0].split('(')[1],
      hslColor2saturation: HexToHSL(hexColorValue).split(',')[1].split('%')[0],
      hslColor2lightness: HexToHSL(hexColorValue).split(',')[2].split('%')[0]
    })
    : this.setState({
      hexColor3: hexColorValue,
      hslColor3: HexToHSL(hexColorValue),
      hslColor3hue: HexToHSL(hexColorValue).split(',')[0].split('(')[1],
      hslColor3saturation: HexToHSL(hexColorValue).split(',')[1].split('%')[0],
      hslColor3lightness: HexToHSL(hexColorValue).split(',')[2].split('%')[0]
    })
    );
  }

  handleHSLupdate = (colorNumber, hslElement, hslElementValue) => {
    // Update first box HSL Color
    colorNumber === 1
    ? (hslElement === "hue"
        ? this.setState({
            hslColor1hue: hslElementValue,
            hslColor1: 'hsl(' + hslElementValue + ', ' + this.state.hslColor1saturation + '%, ' + this.state.hslColor1lightness + '%)',
            hexColor1: HSLToHex(hslElementValue, this.state.hslColor1saturation, this.state.hslColor1lightness),
        }) : ((hslElement === "saturation")
        ? this.setState({
            hslColor1saturation: hslElementValue,
            hslColor1: 'hsl(' + this.state.hslColor1hue + ', ' + hslElementValue + '%, ' + this.state.hslColor1lightness + '%)',
            hexColor1: HSLToHex(this.state.hslColor1hue, hslElementValue, this.state.hslColor1lightness),
        })
        : this.setState({
            hslColor1lightness: hslElementValue,
            hslColor1: 'hsl(' + this.state.hslColor1hue + ', ' + this.state.hslColor1saturation + '%, ' + hslElementValue + '%)',
            hexColor1: HSLToHex(this.state.hslColor1hue, this.state.hslColor1saturation, hslElementValue),
        }))
      )
    
    // Update second box HSL color
    : (colorNumber === 2
    ? (hslElement === "hue"
        ? this.setState({
            hslColor2hue: hslElementValue,
            hslColor2: 'hsl(' + hslElementValue + ', ' + this.state.hslColor2saturation + '%, ' + this.state.hslColor2lightness + '%)',
            hexColor2: HSLToHex(hslElementValue, this.state.hslColor2saturation, this.state.hslColor2lightness),
        }) : ((hslElement === "saturation")
        ? this.setState({
            hslColor2saturation: hslElementValue,
            hslColor2: 'hsl(' + this.state.hslColor2hue + ', ' + hslElementValue + '%, ' + this.state.hslColor2lightness + '%)',
            hexColor2: HSLToHex(this.state.hslColor2hue, hslElementValue, this.state.hslColor2lightness),
        })
        : this.setState({
            hslColor2lightness: hslElementValue,
            hslColor2: 'hsl(' + this.state.hslColor2hue + ', ' + this.state.hslColor2saturation + '%, ' + hslElementValue + '%)',
            hexColor2: HSLToHex(this.state.hslColor2hue, this.state.hslColor2saturation, hslElementValue),
        }))
      )

      // Update third box HSL color
      : (hslElement === "hue"
      ? this.setState({
          hslColor3hue: hslElementValue,
          hslColor3: 'hsl(' + hslElementValue + ', ' + this.state.hslColor3saturation + '%, ' + this.state.hslColor3lightness + '%)',
          hexColor3: HSLToHex(hslElementValue, this.state.hslColor3saturation, this.state.hslColor3lightness),
      }) : ((hslElement === "saturation")
      ? this.setState({
          hslColor3saturation: hslElementValue,
          hslColor3: 'hsl(' + this.state.hslColor3hue + ', ' + hslElementValue + '%, ' + this.state.hslColor3lightness + '%)',
          hexColor3: HSLToHex(this.state.hslColor3hue, hslElementValue, this.state.hslColor3lightness),
      })
      : this.setState({
          hslColor3lightness: hslElementValue,
          hslColor3: 'hsl(' + this.state.hslColor3hue + ', ' + this.state.hslColor3saturation + '%, ' + hslElementValue + '%)',
          hexColor3: HSLToHex(this.state.hslColor3hue, this.state.hslColor3saturation, hslElementValue),
      }))
    )
    )
  }

  handleUpdateCR12 = colorRatio12 => {
    this.setState({
      selectedContrastRatio12: colorRatio12,
      cr12status: 'touched',
    })
  }

  handleUpdateCR13 = colorRatio13 => {
    this.setState({
      selectedContrastRatio13: colorRatio13,
      cr13status: 'touched',
    })
  }

  handleUpdateCR23 = colorRatio23 => {
    this.setState({
      selectedContrastRatio23: colorRatio23,
      cr23status: 'touched',
    })
  }

  handleUpdateColorsToChange = colorsToChange => {
    this.setState({
      colorsToChange: colorsToChange
    })
  }

  render() {
    console.log('Colors to change ', this.state.colorsToChange);
    console.log('Find Colors Click Status : ', this.state.findColors);
    console.log('CR12 status : ', this.state.cr12status);
    console.log('CR13 status : ', this.state.cr13status);
    console.log('CR23 status : ', this.state.cr23status);

    const newTextColor =
    findClosestAccessibleColor(this.state.hexColor1, this.state.hexColor2, this.state.selectedContrastRatio12);

    const newBackgroundColor =
    findClosestAccessibleColor(this.state.hexColor2, this.state.hexColor1, this.state.selectedContrastRatio12);

    const newTextColor13 = findClosestAccessibleColor(this.state.hexColor1, this.state.hexColor3, this.state.selectedContrastRatio13);
    const newBackgroundColor13 =
    findClosestAccessibleColor(this.state.hexColor3, this.state.hexColor1, this.state.selectedContrastRatio13);

    const newTextColor23 = findClosestAccessibleColor(this.state.hexColor2, this.state.hexColor3, this.state.selectedContrastRatio23);
    const newBackgroundColor23 =
    findClosestAccessibleColor(this.state.hexColor3, this.state.hexColor2, this.state.selectedContrastRatio23);

    const colorResult = 
    <div className="mainColorResultContainer">
          <div className="12changeColor1">
            <p>Color 12 : If you change Color 1 to : {newTextColor}, your CR is good enough.</p>
            <div
              style={{display: 'inline-block', backgroundColor: newTextColor, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
            <div
              style={{display: 'inline-block', backgroundColor: this.state.hexColor2, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
            <div
              style={{display: 'inline-block', backgroundColor: this.state.hexColor3, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
          </div>

          <div className="12changeColor2">
            <p>Color 12 : If you change background color to : {newBackgroundColor}, your CR is good enough.</p>
            <div
              style={{display: 'inline-block', backgroundColor: this.state.hexColor1, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
            <div
              style={{display: 'inline-block', backgroundColor: newBackgroundColor, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
            <div
              style={{display: 'inline-block', backgroundColor: this.state.hexColor3, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
          </div>

          {/* <div className="13changeColor1">
            <p>Color 13 : If you change text color to : {newTextColor13}, your CR is good enough.</p>
            <div
              style={{display: 'inline-block', backgroundColor: newTextColor13, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
            <div
              style={{display: 'inline-block', backgroundColor: this.state.hexColor2, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
            <div
              style={{display: 'inline-block', backgroundColor: this.state.hexColor3, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
          </div>

          <div className="13changeColor2">
            <p>Color 13 : If you change background color to : {newBackgroundColor13}, your CR is good enough.</p>
            <div
              style={{display: 'inline-block', backgroundColor: this.state.hexColor1, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
            <div
              style={{display: 'inline-block', backgroundColor: this.state.hexColor2, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
            <div
              style={{display: 'inline-block', backgroundColor: newBackgroundColor, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
          </div>

          <div className="23changeColor1">
            <p>Color 23 : If you change text color to : {newTextColor23}, your CR is good enough.</p>
            <div
              style={{display: 'inline-block', backgroundColor: this.state.hexColor1, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
            <div
              style={{display: 'inline-block', backgroundColor: newTextColor23, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
            <div
              style={{display: 'inline-block', backgroundColor: this.state.hexColor3, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
          </div>

          <div className="23changeColor2">
            <p>Color 23 : If you change background color to : {newBackgroundColor23}, your CR is good enough.</p>
            <div
              style={{display: 'inline-block', backgroundColor: this.state.hexColor1, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
            <div
              style={{display: 'inline-block', backgroundColor: this.state.hexColor2, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
            <div
              style={{display: 'inline-block', backgroundColor: newBackgroundColor23, height: '50px', width: '250px', border: '2px solid grey', borderRadius: 5}}
            ></div>
          </div> */}
        </div>

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
        <ColorSuggestion
          selectedContrastRatio12={this.state.selectedContrastRatio12}
          parentCallBackUpdateCR12={this.handleUpdateCR12}
          selectedContrastRatio13={this.state.selectedContrastRatio13}
          parentCallBackUpdateCR13={this.handleUpdateCR13}
          selectedContrastRatio23={this.state.selectedContrastRatio23}
          parentCallBackUpdateCR23={this.handleUpdateCR23}
          parentCallBackUpdateColorsToChange={this.handleUpdateColorsToChange}
          parentCallBackFindColors={this.handleFindColors}
        />
        <br />
        
        {this.state.findColors === 'touched' && this.state.cr12status === 'touched' && colorResult}
      </div>
    );
  }
}

export default App;
