import React from 'react';
import { calcContrast } from './utils/ContrastFunc';
import './CurrentColorContrast.css';

class CurrentColorContrast extends React.Component {
  render() {

    const color1len = this.props.hexColor1.length;
    const color2len = this.props.hexColor2.length;
    const color3len = this.props.hexColor3.length;
    
    return (
      <div className="currentContrastBox">
        <h4>Current color contrast<span style={{marginLeft: 15}}>3</span><span style={{marginLeft: 15}}>4.5</span></h4>
        <p>Color 1,  Color 2  
          <span style={{marginLeft: 15}}>
            { ((color1len === 4 || color1len === 7) && (color2len === 4 || color2len === 7)) ? calcContrast(this.props.hexColor1, this.props.hexColor2) : ''}
          </span>

          {((color1len === 4 || color1len === 7) && (color2len === 4 || color2len === 7))
          ? calcContrast(this.props.hexColor1, this.props.hexColor2) >= 3
          ? <span style={{marginLeft: 15}}>&#10003;</span> : <span style={{marginLeft: 15}}>&#10007;</span> : ''}

          {((color1len === 4 || color1len === 7) && (color2len === 4 || color2len === 7))
          ? calcContrast(this.props.hexColor1, this.props.hexColor2) >= 4.5
          ? <span style={{marginLeft: 15}}>&#10003;</span> : <span style={{marginLeft: 15}}>&#10007;</span> : ''}
          

        </p>
        <p>Color 1,  Color 3
          <span style={{marginLeft: 15}}>
            { ((color1len === 4 || color1len === 7) && (color3len === 4 || color3len === 7)) ? calcContrast(this.props.hexColor1, this.props.hexColor3) : ''}
          </span>
          {((color1len === 4 || color1len === 7) && (color3len === 4 || color3len === 7))
          ? calcContrast(this.props.hexColor1, this.props.hexColor3) >= 3
          ?<span style={{marginLeft: 15}}>&#10003;</span> : <span style={{marginLeft: 15}}>&#10007;</span> : ''}

          {((color1len === 4 || color1len === 7) && (color3len === 4 || color3len === 7))
          ? calcContrast(this.props.hexColor1, this.props.hexColor3) >= 4.5
          ? <span style={{marginLeft: 15}}>&#10003;</span> : <span style={{marginLeft: 15}}>&#10007;</span> : ''}

        </p>
        <p>Color 2,  Color 3
          <span style={{marginLeft: 15}}>
            { ((color2len === 4 || color2len === 7) && (color3len === 4 || color3len === 7)) ? calcContrast(this.props.hexColor2, this.props.hexColor3) : ''}
          </span>
          {((color2len === 4 || color2len === 7) && (color3len === 4 || color3len === 7))
          ? calcContrast(this.props.hexColor2, this.props.hexColor3) >= 3
          ?<span style={{marginLeft: 15}}>&#10003;</span> : <span style={{marginLeft: 15}}>&#10007;</span> : ''}

          {((color2len === 4 || color2len === 7) && (color3len === 4 || color3len === 7))
          ? calcContrast(this.props.hexColor2, this.props.hexColor3) >= 4.5
          ? <span style={{marginLeft: 15}}>&#10003;</span> : <span style={{marginLeft: 15}}>&#10007;</span> : ''}

        </p>
      </div>
    );
  }
}

export default CurrentColorContrast;