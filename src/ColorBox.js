import React from "react";
import "./ColorBox.css";

class ColorBox extends React.Component {
  state = {
    hexColor1: '#BD10E0',
    hexColor2: '#4A90E2',
    hexColor3: '#9B9B9B',
    hslColor1hue: 290,
    hslColor1saturation: 87,
    hslColor1lightness: 47,
    hslColor2hue: 212,
    hslColor2saturation: 72,
    hslColor2lightness: 59,
    hslColor3hue: 0,
    hslColor3saturation: 0,
    hslColor3lightness: 61,
  }

  handleColorChange = (e) => {
    e.preventDefault();
    this.props.colorNumber === 1
    ? this.setState({
      hexColor1: e.target.value
    })
    : (this.props.colorNumber === 2
    ? this.setState({
      hexColor2: e.target.value
    })
    : this.setState({
      hexColor3: e.target.value
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
  }

  render() {
    let displayColor =  this.props.colorNumber === 1
    ? this.state.hexColor1
    : (this.props.colorNumber === 2
    ? this.state.hexColor2
    : this.state.hexColor3
    );

    const hslColor1 = 'hsl(' + this.state.hslColor1hue + ", " + this.state.hslColor1saturation + '%, ' + this.state.hslColor1lightness + "%)";
    const hslColor2 = 'hsl(' + this.state.hslColor2hue + ", " + this.state.hslColor2saturation + '%, ' + this.state.hslColor2lightness + "%)";
    const hslColor3 = 'hsl(' + this.state.hslColor3hue + ", " + this.state.hslColor3saturation + '%, ' + this.state.hslColor3lightness + "%)";


    let hslColor = this.props.colorNumber === 1
    ? hslColor1
    : (this.props.colorNumber === 2
    ? hslColor2
    : hslColor3
    );

    return (
      <div className="colorBox">
        <h2>Color {this.props.colorNumber}</h2>
        <div
          className="displayColor"
          style={{backgroundColor: displayColor}}>
        </div><br />
        <div
          className="displayColor"
          style={{backgroundColor: hslColor}}>
        </div>
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
                onChange={this.handleHSLupdate}/><br />
          Saturation <input
                      type="range"
                      min="0" max="100"
                      step="1"
                      id="saturation"
                      onChange={this.handleHSLupdate} /><br />
          Brightness <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      id="brightness"
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
          onChange={this.handleColorChange}
        />
      </div>
    );
  }
}

export default ColorBox;
