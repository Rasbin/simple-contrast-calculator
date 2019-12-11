import React from "react";
import "./ColorBox.css";
import HSLToHex from './utils/HSLToHex';


class ColorBox extends React.Component {
  handleHexColorChange = (e) => {
    e.preventDefault();
    this.props.parentCallBackHexColorChange(this.props.colorNumber, e.target.value);
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

    const hslColor1 = 'hsl(' + this.props.hslColor1hue + ", " + this.props.hslColor1saturation + '%, ' + this.props.hslColor1lightness + "%)";
    const hslColor2 = 'hsl(' + this.props.hslColor2hue + ", " + this.props.hslColor2saturation + '%, ' + this.props.hslColor2lightness + "%)";
    const hslColor3 = 'hsl(' + this.props.hslColor3hue + ", " + this.props.hslColor3saturation + '%, ' + this.props.hslColor3lightness + "%)";

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
    ? this.props.hexColor1
    : (this.props.colorNumber === 2
    ? this.props.hexColor2
    : this.props.hexColor3
    );

    

    let hslColor = this.props.colorNumber === 1
    ? this.props.hslColor1
    : (this.props.colorNumber === 2
    ? this.props.hslColor2
    : this.props.hslColor3
    );

    console.log('HSL Color 1', this.props.hslColor1);

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
                ? this.props.hslColor1hue
                : (this.props.colorNumber === 2
                ? this.props.hslColor2hue
                : this.props.hslColor3hue
                )}
                onChange={this.handleHSLupdate}/><br />
          Saturation <input
                      type="range"
                      min="0" max="100"
                      step="1"
                      id="saturation"
                      value={this.props.colorNumber === 1
                      ? this.props.hslColor1saturation
                      : (this.props.colorNumber === 2
                      ? this.props.hslColor2saturation
                      : this.props.hslColor2saturation
                      )}
                      onChange={this.handleHSLupdate} /><br />
          Brightness <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      id="brightness"
                      value={this.props.colorNumber === 1
                      ? this.props.hslColor1lightness
                      : (this.props.colorNumber === 2
                      ? this.props.hslColor2lightness
                      : this.props.hslColor3lightness
                      )}
                      onChange={this.handleHSLupdate} /><br />
        </div>
        <span>Hex </span>
        <input
          type="text"
          value={
            this.props.colorNumber === 1
            ? this.props.hexColor1
            : (this.props.colorNumber === 2
            ? this.props.hexColor2
            : this.props.hexColor3
            )
          }
          onChange={this.handleHexColorChange}
        />
      </div>
    );
  }
}

export default ColorBox;
