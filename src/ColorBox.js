import React from "react";
import "./ColorBox.css";

class ColorBox extends React.Component {
  handleHexColorChange = (e) => {
    this.props.parentCallBackHexColorChange(this.props.colorNumber, e.target.value);
  }

  handleHSLupdate = (e) => {
    this.props.parentCallBackHslColorChange(this.props.colorNumber, e.target.id, e.target.value);
  }

  render() {
    let displayColor =  this.props.colorNumber === 1
    ? this.props.hexColor1
    : (this.props.colorNumber === 2
    ? this.props.hexColor2
    : this.props.hexColor3
    );

    return (
      <div className="colorBox">
        <h2>Color {this.props.colorNumber}</h2>
        <div
          className="displayColor"
          style={{backgroundColor: displayColor}}>
        </div><br />
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
