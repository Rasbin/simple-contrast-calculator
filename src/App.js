import React from 'react';
import ColorBox from './ColorBox';
import ColorSuggestion from './ColorSuggestion';
import CurrentColorContrast from './CurrentColorContrast';
import HexToHSL from './utils/HexToHSL';
import HSLToHex from './utils/HSLToHex';
import findClosestAccessibleColor from './utils/color';
import ColorResultComponent from './components/ColorResults';
import { calcContrast } from './utils/ContrastFunc';
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
    newTextColor23: '',

    selectedNumber: ''
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

  updateRadioButtonChange=(selectednum, colorRatio)=>{
    const order = ['1213','1223','1323'];
    if(colorRatio>0){
      if(!this.state.selectedNumber.includes(selectednum)){
        this.setState({
          selectedNumber: Number(this.state.selectedNumber|| 0) > Number(selectednum)
            ?  selectednum + this.state.selectedNumber
            :  this.state.selectedNumber+selectednum
        })
      }
    }else{
      this.setState({
        selectedNumber: this.state.selectedNumber.replace(selectednum,'')
      })
    }
  }

  handleUpdateCR12 = colorRatio12 => {
    this.setState({
      selectedContrastRatio12: colorRatio12,
      cr12status: 'touched',
    })
    this.handleFindColors()
    this.updateRadioButtonChange('12',colorRatio12)
  }

  handleUpdateCR13 = colorRatio13 => {
    this.setState({
      selectedContrastRatio13: colorRatio13,
      cr13status: 'touched',
    })
    this.handleFindColors()
    this.updateRadioButtonChange('13',colorRatio13)
  }

  handleUpdateCR23 = colorRatio23 => {
    this.setState({
      selectedContrastRatio23: colorRatio23,
      cr23status: 'touched',
    })
    this.handleFindColors()
    this.updateRadioButtonChange('23',colorRatio23)
  }

  handleUpdateColorsToChange = colorsToChange => {
    this.setState({
      colorsToChange: colorsToChange
    })
  }

  colorResultTest = (ratio1, ratio2, thirdColor="") => {
    // console.log('selectedColor ',selectedColor)
    const colorArr = this.state.selectedNumber.split('');
    // console.log('colorArr ',colorArr)

    const result_1 = (eval(`this.state.hexColor${colorArr[0]}`).length === 4 || eval(`this.state.hexColor${colorArr[0]}`).length === 7) &&
    (eval(`this.state.hexColor${colorArr[1]}`).length === 4 || eval(`this.state.hexColor${colorArr[1]}`).length === 7) ?
    findClosestAccessibleColor(eval(`this.state.hexColor${colorArr[0]}`), eval(`this.state.hexColor${colorArr[1]}`), ratio1): '';
    // console.log('result_1 ',result_1)

    if(!thirdColor){
      return result_1;
    }
    const result = (result_1.length === 4 || result_1.length === 7) &&
    (thirdColor.length === 4 || thirdColor.length === 7) ?
    findClosestAccessibleColor(result_1, thirdColor, ratio2): '';
    console.log('result 2 ',result)
    return result;
  }

  colorResult = (color1, color2, ratio, ratio2="") => {
    let resultArr = [];
    console.log('Result before loop ', resultArr);
    let i = 0;

    for (i = 0; i < 20; i++) {
      let result = (color1.length === 4 || color1.length === 7) &&
      (color2.length === 4 || color2.length === 7) ?
      findClosestAccessibleColor(color1, color2, ratio): '';
      resultArr.push(result);
      ratio = calcContrast(result, color2) + 0.1;
    }
    console.log('Result after loop ', resultArr);
    return resultArr;
  }

  render() {

    console.log('selectedNumber ',this.state.selectedNumber)
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

    //  find result colr based on selectedNumber

    // 12
    // this.state.colorsToChange // 1,2

    //12 // 2
    let result = [];
    if(this.state.selectedNumber && this.state.selectedNumber.length<=2){
      let hexColor = this.state.selectedNumber;

      if(this.state.colorsToChange && hexColor.charAt(0)!==this.state.colorsToChange.toString()){
        hexColor = hexColor.split("").reverse().join("")

      }      
      result = this.colorResult(
        eval(`this.state.hexColor${this.state.selectedNumber.charAt(0)}`),
        eval(`this.state.hexColor${this.state.selectedNumber.charAt(1)}`),
        eval(`this.state.selectedContrastRatio${this.state.selectedNumber}`)
        )
    }

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

        {/* render based on selectedNumber */}
        <ColorResultComponent
          resultColor={result || this.state.hexColor1}
          selectedNumber={this.state.selectedNumber}
          color1={this.state.hexColor1}
          color2={this.state.hexColor2}
          color3={this.state.hexColor3}
          selectedColor={this.state.colorsToChange.toString()}
        />

      </div>
    );
  }
}

export default App;
