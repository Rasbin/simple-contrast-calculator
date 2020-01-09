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

    hexColor1And2: '',
    hexColor1And3: '',
    hexColor2And3: '',
    
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
    touchedText: '',
    newTextColor12: '',
    newTextColor13: '',
    newTextColor23: ''
  }

  handleFindColors = () => {
    this.setState({
      findColors: 'touched',
    })

    const hexColor1And2 = findClosestAccessibleColor(this.state.hexColor1, this.state.hexColor2, this.state.selectedContrastRatio12)
    const hexColor1And3 = findClosestAccessibleColor(this.state.hexColor1, this.state.hexColor3, this.state.selectedContrastRatio13)
    const hexColor2And3 = findClosestAccessibleColor(this.state.hexColor2, this.state.hexColor3, this.state.selectedContrastRatio23)

    this.setState({
      findColors: 'touched',
      hexColor1And2: hexColor1And2,
      hexColor1And3: hexColor1And3,
      hexColor2And3: hexColor2And3,
    });

    // const x = new Set()
    // // to be moved to state
    // if(this.state.colorsToChange === '12'){
    //   const min = this.state.selectedContrastRatio12;
    //   const max = 21;
    //   for (var i=min; i<=max; i=i+0.01){
    //     const result_12 = findClosestAccessibleColor(this.state.hexColor1, this.state.hexColor2, i);
    //     const result_1213 = findClosestAccessibleColor(result_12, hexColor1And3, this.state.selectedContrastRatio13)
        
    //     x.add(result_1213)
    //   }
    // }

    // find the result color using 2 different colors

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
    this.handleFindColors()
  }

  handleUpdateCR13 = colorRatio13 => {
    this.setState({
      selectedContrastRatio13: colorRatio13,
      cr13status: 'touched',
    })
    this.handleFindColors()
  }

  handleUpdateCR23 = colorRatio23 => {
    this.setState({
      selectedContrastRatio23: colorRatio23,
      cr23status: 'touched',
    })
    this.handleFindColors()
  }

  handleUpdateColorsToChange = colorsToChange => {
    this.setState({
      colorsToChange: colorsToChange
    })
  }

  colorResult1213 = () => {
    console.log('Color Result 1213 is triggered');
    const result_12 = findClosestAccessibleColor(this.state.hexColor1, this.state.hexColor2, this.state.selectedContrastRatio12);
    console.log('Result_12 ', result_12);
    const result_1213 = findClosestAccessibleColor(result_12, this.state.hexColor3, this.selectedContrastRatio13);
    console.log('Result_1213 ', result_1213);
    return result_1213;
  }

  colorResult1223 = () => {
    console.log('Color Result 1223 is triggered');
    const result_12 = findClosestAccessibleColor(this.state.hexColor2, this.state.hexColor1, this.state.selectedContrastRatio12);
    console.log('Result_12 ', result_12);
    const result_1223 = findClosestAccessibleColor(result_12, this.state.hexColor3, this.selectedContrastRatio23);
    console.log('Result_1223 ', result_1223);
    return result_1223;
  }

  render() {
    let touchedText = "";
    touchedText = this.state.selectedContrastRatio12>0 && this.state.selectedContrastRatio13>0 && this.state.selectedContrastRatio23 < 1
      ? '1213'
      :  this.state.selectedContrastRatio12>0 && this.state.selectedContrastRatio23>0 && this.state.selectedContrastRatio13 < 1
        ? '1223'
        :  this.state.selectedContrastRatio13>0 && this.state.selectedContrastRatio23>0 && this.state.selectedContrastRatio12 < 1
          ? '1323'
          : this.state.selectedContrastRatio12>0 && this.state.selectedContrastRatio13<1 && this.state.selectedContrastRatio23<1
            ? '12'
            : this.state.selectedContrastRatio23 >0 && this.state.selectedContrastRatio12<1 && this.state.selectedContrastRatio13<1
            ? '23'
            : this.state.selectedContrastRatio13>0 && this.state.selectedContrastRatio12<1 && this.state.selectedContrastRatio23<1
              ? '13'
              : ''
    
    console.log('Let us check the touched text ', touchedText);
    if (touchedText === '1213') {
      this.colorResult1213()
    }

    const newTextColor12 =
    findClosestAccessibleColor(this.state.hexColor1, this.state.hexColor2, this.state.selectedContrastRatio12);
    const newBackgroundColor12 =
    findClosestAccessibleColor(this.state.hexColor2, this.state.hexColor1, this.state.selectedContrastRatio12);

    const newTextColor13 = 
    findClosestAccessibleColor(this.state.hexColor1, this.state.hexColor3, this.state.selectedContrastRatio13);
    const newBackgroundColor13 =
    findClosestAccessibleColor(this.state.hexColor3, this.state.hexColor1, this.state.selectedContrastRatio13);

    const newTextColor23 =
    findClosestAccessibleColor(this.state.hexColor2, this.state.hexColor3, this.state.selectedContrastRatio23);
    const newBackgroundColor23 =
    findClosestAccessibleColor(this.state.hexColor3, this.state.hexColor2, this.state.selectedContrastRatio23);

    const colorResult12 = (
      <div className="mainColorResultContainer">
        <div className="12changeColor1">
          <p>
            If you change Color 1 to : {newTextColor12}, your CR is
            good enough.
          </p>
          <br />

          <div
            style={{
              display: "inline-block",
              backgroundColor: newTextColor12,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor2,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor3,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
        </div>
      </div>
    );

    const backColorResult12 = (
      <div className="mainColorResultContainer">
        <div className="12changeColor1">
          <p>
            If you change Color 2 to : {newBackgroundColor12}, your CR is
            good enough.
          </p>
          <br />

          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor1,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: newBackgroundColor12,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor3,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
        </div>
      </div>
    );

    const colorResult13 = (
      <div className="mainColorResultContainer">
        <div className="13changeColor1">
          <p>
            If you change Color 1 to : {newTextColor13}, your CR is
            good enough.
          </p>
          <br />

          <div
            style={{
              display: "inline-block",
              backgroundColor: newTextColor13,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor2,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor3,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
        </div>
      </div>
    );

    const backColorResult13 = (
      <div className="mainColorResultContainer">
        <div className="13changeColor1">
          <p>
            If you change Color 3 to : {newBackgroundColor13}, your CR is
            good enough.
          </p>
          <br />

          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor1,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor2,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: newBackgroundColor13,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
        </div>
      </div>
    );

    const colorResult23 = (
      <div className="mainColorResultContainer">
        <div className="13changeColor1">
          <p>
            If you change Color 2 to : {newTextColor23}, your CR is
            good enough.
          </p>
          <br />

          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor1,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: newTextColor23,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor3,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
        </div>
      </div>
    );

    const backColorResult23 = (
      <div className="mainColorResultContainer">
        <div className="13changeColor1">
          <p>
            If you change Color 3 to : {newBackgroundColor23}, your CR is
            good enough.
          </p>
          <br />

          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor1,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor2,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: newBackgroundColor23,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
        </div>
      </div>
    );

    const colorResult1213 = (
      <div className="mainColorResultContainer">
        <div className="12changeColor1">
          <p>
            If you change Color 1 to : {this.colorResult1213()}, your CR is
            good enough.
          </p>
          <br />

          <div
            style={{
              display: "inline-block",
              backgroundColor: newTextColor12,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor2,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor3,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
        </div>
      </div>
    );

    const colorResult1223 = (
      <div className="mainColorResultContainer">
        <div className="12changeColor1">
          <p>
            If you change Color 2 to : {this.colorResult1223()}, your CR is
            good enough.
          </p>
          <br />

          <div
            style={{
              display: "inline-block",
              backgroundColor: newTextColor12,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor2,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: this.state.hexColor3,
              height: "50px",
              width: "250px",
              border: "2px solid grey",
              borderRadius: 5
            }}
          ></div>
        </div>
      </div>
    );

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
        
        {this.state.cr12status === 'touched' &&
        this.state.cr13status === 'touched' &&
        this.state.cr23status === 'touched' &&
        this.state.findColors === 'touched' && 
        this.state.selectedContrastRatio12 > 0 &&
        this.state.selectedContrastRatio13 < 1 &&
        this.state.selectedContrastRatio23 < 1 &&
        this.state.colorsToChange == 1 && colorResult12}

        {this.state.cr12status === 'touched' &&
        this.state.cr13status === 'touched' &&
        this.state.cr23status === 'touched' &&
        this.state.findColors === 'touched' && 
        this.state.selectedContrastRatio12 > 0 &&
        this.state.selectedContrastRatio13 < 1 &&
        this.state.selectedContrastRatio23 < 1 &&
        this.state.colorsToChange == 2 && backColorResult12}

        {this.state.cr12status === 'touched' &&
        this.state.cr13status === 'touched' &&
        this.state.cr23status === 'touched' &&
        this.state.findColors === 'touched' && 
        this.state.selectedContrastRatio13 > 0 &&
        this.state.selectedContrastRatio12 < 1 &&
        this.state.selectedContrastRatio23 < 1 &&
        this.state.colorsToChange == 1 && colorResult13}

        {this.state.cr12status === 'touched' &&
        this.state.cr13status === 'touched' &&
        this.state.cr23status === 'touched' &&
        this.state.findColors === 'touched' && 
        this.state.selectedContrastRatio13 > 0 &&
        this.state.selectedContrastRatio12 < 1 &&
        this.state.selectedContrastRatio23 < 1 &&
        this.state.colorsToChange == 3 && backColorResult13}

        {this.state.cr12status === 'touched' &&
        this.state.cr13status === 'touched' &&
        this.state.cr23status === 'touched' &&
        this.state.findColors === 'touched' && 
        this.state.selectedContrastRatio23 > 0 &&
        this.state.selectedContrastRatio12 < 1 &&
        this.state.selectedContrastRatio13 < 1 &&
        this.state.colorsToChange == 2 && colorResult23}

        {this.state.cr12status === 'touched' &&
        this.state.cr13status === 'touched' &&
        this.state.cr23status === 'touched' &&
        this.state.findColors === 'touched' && 
        this.state.selectedContrastRatio23 > 0 &&
        this.state.selectedContrastRatio12 < 1 &&
        this.state.selectedContrastRatio13 < 1 &&
        this.state.colorsToChange == 3 && backColorResult23}

        {this.state.cr12status === 'touched' &&
        this.state.cr13status === 'touched' &&
        this.state.cr23status === 'touched' &&
        this.state.findColors === 'touched' && 
        this.state.selectedContrastRatio12 > 0 &&
        this.state.selectedContrastRatio13 > 0 &&
        this.state.selectedContrastRatio23 < 1 &&
        this.state.colorsToChange == 1 && colorResult1213}

        {this.state.cr12status === 'touched' &&
        this.state.cr13status === 'touched' &&
        this.state.cr23status === 'touched' &&
        this.state.findColors === 'touched' && 
        this.state.selectedContrastRatio12 > 0 &&
        this.state.selectedContrastRatio13 < 1 &&
        this.state.selectedContrastRatio23 > 0 &&
        this.state.colorsToChange == 2 && colorResult1223}
      </div>
    );
  }
}

export default App;
