import React from "react";
import "./ColorBox.css";

class ColorBox extends React.Component {
  state = {
    hexColor1: '#BD10E0',
    hexColor2: '#4A90E2',
    hexColor3: '#9B9B9B',
  }

  render() {
    let displayColor =  this.props.colorNumber === 1
    ? this.state.hexColor1
    : (this.props.colorNumber === 2
    ? this.state.hexColor2
    : this.state.hexColor3
    );
    
    return (
      <div className="colorBox">
        <h2>Color {this.props.colorNumber}</h2>
        <div
          className="displayColor"
          style={{backgroundColor: displayColor}}>
        </div>
        <p>Hue</p>
        <p>Saturation</p>
        <p>Brightness</p>
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
        />
      </div>
    );
  }
}

export default ColorBox;
