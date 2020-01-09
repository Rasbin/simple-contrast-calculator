import React from 'react';
import "./ColorSuggestion.css";

class ColorSuggestion extends React.Component {
  handleFindColors = () => {
    this.props.parentCallBackFindColors();
  }

  handleContrastRatio12 = (e) => {
    this.props.parentCallBackUpdateCR12(e.target.value);
  }

  handleContrastRatio13 = (e) => {
    this.props.parentCallBackUpdateCR13(e.target.value);
  }

  handleContrastRatio23 = (e) => {
    this.props.parentCallBackUpdateCR23(e.target.value);
  }

  handleColorsToChange = (e) => {
    this.props.parentCallBackUpdateColorsToChange(e.target.value);
  }

  render() {
    return (
      <div>
        <br />
        <h2>Find colors that match contrasts requirements</h2>
        <h3>Required color contrasts</h3>
        <div>
          <p>
            Color 1,  Color 2
            <input type="radio" name="contrastRatio12" value={3} onClick={this.handleContrastRatio12}/> 3 
            <input type="radio" name="contrastRatio12" value={4.5} onClick={this.handleContrastRatio12}/> 4.5 
            <input type="radio" name="contrastRatio12" value={0} onClick={this.handleContrastRatio12}/> Doesn't matter
          </p>
          <p>
            Color 1, Color 3
            <input type="radio" name="contrastRatio13" value={3} onClick={this.handleContrastRatio13}/> 3 
            <input type="radio" name="contrastRatio13" value={4.5} onClick={this.handleContrastRatio13}/> 4.5 
            <input type="radio" name="contrastRatio13" value={0} onClick={this.handleContrastRatio13}/> Doesn't matter
          </p>
          <p>
            Color 2, Color 3
            <input type="radio" name="contrastRatio23" value={3} onClick={this.handleContrastRatio23}/> 3 
            <input type="radio" name="contrastRatio23" value={4.5} onClick={this.handleContrastRatio23}/> 4.5 
            <input type="radio" name="contrastRatio23" value={0} onClick={this.handleContrastRatio23}/> Doesn't matter 
          </p>
          <br />
          <h3>What colors to change?</h3>
          <select onChange={this.handleColorsToChange}>
            <option>Select color</option>
            <option value={1}>Color 1</option>
            <option value={2}>Color 2</option>
            <option value={3}>Color 3</option>
            <option value={12}>Color 1 and 2</option>
            <option value={13}>Color 1 and 3</option>
            <option value={23}>Color 2 and 3</option>
          </select>
          <br />
          <br />
          <input type="submit" onClick={()=>this.props.parentCallBackFindColors()} value="Find colors"/>
        </div>
      </div>
    );
  }
}

export default ColorSuggestion;