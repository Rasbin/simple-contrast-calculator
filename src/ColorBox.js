import React from "react";
import "./ColorBox.css";

class ColorBox extends React.Component {
  handleHexColorChange = (e) => {
    this.props.parentCallBackHexColorChange(
      this.props.colorNumber,
      e.target.value,
    );
  };

  handleHSLupdate = (e) => {
    this.props.parentCallBackHslColorChange(
      this.props.colorNumber,
      e.target.id,
      e.target.value,
    );
  };

  render() {
    let displayColor =
      this.props.colorNumber === 1
        ? this.props.hexColor1
        : this.props.colorNumber === 2
          ? this.props.hexColor2
          : this.props.hexColor3;

    const getColorValue = (prop1, prop2, prop3) => {
      return this.props.colorNumber === 1
        ? prop1
        : this.props.colorNumber === 2
          ? prop2
          : prop3;
    };

    const hueValue = getColorValue(
      this.props.hslColor1hue,
      this.props.hslColor2hue,
      this.props.hslColor3hue,
    );
    const saturationValue = getColorValue(
      this.props.hslColor1saturation,
      this.props.hslColor2saturation,
      this.props.hslColor3saturation,
    );
    const lightnessValue = getColorValue(
      this.props.hslColor1lightness,
      this.props.hslColor2lightness,
      this.props.hslColor3lightness,
    );
    const hexValue = getColorValue(
      this.props.hexColor1,
      this.props.hexColor2,
      this.props.hexColor3,
    );

    return (
      <div className="colorBox">
        <h2>Color {this.props.colorNumber}</h2>
        <div
          className="displayColor"
          style={{ backgroundColor: displayColor }}
        ></div>
        <label>Hex Value</label>
        <input
          type="text"
          value={hexValue}
          onChange={this.handleHexColorChange}
          placeholder="#000000"
        />
        <div className="picker">
          <div>
            <div className="pickerLabel">
              <span>Hue</span>
              <span className="pickerValue">{hueValue}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              id="hue"
              value={hueValue}
              onChange={this.handleHSLupdate}
            />
          </div>
          <div>
            <div className="pickerLabel">
              <span>Saturation</span>
              <span className="pickerValue">{saturationValue}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              id="saturation"
              value={saturationValue}
              onChange={this.handleHSLupdate}
            />
          </div>
          <div>
            <div className="pickerLabel">
              <span>Brightness</span>
              <span className="pickerValue">{lightnessValue}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              id="brightness"
              value={lightnessValue}
              onChange={this.handleHSLupdate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ColorBox;
