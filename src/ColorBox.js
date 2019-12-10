import React from "react";
import "./ColorBox.css";
import HexToHSL from './utils/HexToHSL';
import HSLToHex from './utils/HSLToHex';


class ColorBox extends React.Component {
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

  handleHexColorChange = (e) => {
    e.preventDefault();
    this.props.colorNumber === 1
    ? this.setState({
      hexColor1: e.target.value,
      hslColor1: HexToHSL(e.target.value),
    })
    : (this.props.colorNumber === 2
    ? this.setState({
      hexColor2: e.target.value,
      hslColor2: HexToHSL(e.target.value),
    })
    : this.setState({
      hexColor3: e.target.value,
      hslColor3: HexToHSL(e.target.value),
    })
    );
  }

  handleHSLupdate = (e) => {
    e.preventDefault();
    console.log('Value', e.target.value);
    console.log('ID', e.target.id);

    // Update first box HSL Color
    this.props.colorNumber === 1
    ? (e.target.id === "hue"
        ? this.setState({
            hslColor1hue: e.target.value
        }) : ((e.target.id === "saturation")
        ? this.setState({
            hslColor1saturation: e.target.value
        })
        : this.setState({
            hslColor1lightness: e.target.value
        }))
      )
    
    // Update second box HSL color
    : (this.props.colorNumber === 2
    ? (e.target.id === "hue"
        ? this.setState({
            hslColor2hue: e.target.value
        }) : ((e.target.id === "saturation")
        ? this.setState({
            hslColor2saturation: e.target.value
        })
        : this.setState({
            hslColor2lightness: e.target.value
        }))
      )

      // Update third box HSL color
      : (e.target.id === "hue"
      ? this.setState({
          hslColor3hue: e.target.value
      }) : ((e.target.id === "saturation")
      ? this.setState({
          hslColor3saturation: e.target.value
      })
      : this.setState({
          hslColor3lightness: e.target.value
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
      this.props.colorNumber === 1
      ? this.setState({
        hexColor1: HSLToHex(this.state.hslColor1hue, this.state.hslColor1saturation, this.state.hslColor1lightness),
      })
      : (this.props.colorNumber === 2
      ? this.setState({
        hexColor2: HSLToHex(this.state.hslColor2hue, this.state.hslColor2saturation, this.state.hslColor2lightness),
      })
      : this.setState({
        hexColor3: HSLToHex(this.state.hslColor3hue, this.state.hslColor3saturation, this.state.hslColor3lightness),
      })
      );

  }

  render() {
    let displayColor =  this.props.colorNumber === 1
    ? this.state.hexColor1
    : (this.props.colorNumber === 2
    ? this.state.hexColor2
    : this.state.hexColor3
    );

    

    let hslColor = this.props.colorNumber === 1
    ? this.state.hslColor1
    : (this.props.colorNumber === 2
    ? this.state.hslColor2
    : this.state.hslColor3
    );

    console.log('HSL Color 1', this.state.hslColor1);

    return (
      <div className="colorBox">
        <h2>Color {this.props.colorNumber}</h2>
        <div
          className="displayColor"
          style={{backgroundColor: displayColor}}>
        </div><br />
        <div>
          {hslColor}
        </div>
        <div className="picker">
          <br />
          Hue <input
                type="range"
                min="0"
                max="360"
                step="1"
                id="hue"
                value={this.props.colorNumber === 1
                ? this.state.hslColor1hue
                : (this.props.colorNumber === 2
                ? this.state.hslColor2hue
                : this.state.hslColor3hue
                )}
                onChange={this.handleHSLupdate}/><br />
          Saturation <input
                      type="range"
                      min="0" max="100"
                      step="1"
                      id="saturation"
                      value={this.props.colorNumber === 1
                      ? this.state.hslColor1saturation
                      : (this.props.colorNumber === 2
                      ? this.state.hslColor2saturation
                      : this.state.hslColor2saturation
                      )}
                      onChange={this.handleHSLupdate} /><br />
          Brightness <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      id="brightness"
                      value={this.props.colorNumber === 1
                      ? this.state.hslColor1lightness
                      : (this.props.colorNumber === 2
                      ? this.state.hslColor2lightness
                      : this.state.hslColor3lightness
                      )}
                      onChange={this.handleHSLupdate} /><br />
        </div>
        <p>Hex</p>
        <input
          type="text"
          value={
            this.props.colorNumber === 1
            ? this.state.hexColor1
            : (this.props.colorNumber === 2
            ? this.state.hexColor2
            : this.state.hexColor3
            )
          }
          onChange={this.handleHexColorChange}
        />
      </div>
    );
  }
}

export default ColorBox;
