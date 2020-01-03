import React from 'react';
import "./ColorSuggestion.css";

class ColorSuggestion extends React.Component {
  render() {
    return (
      <div>
        <br />
        <h2>Find colors that match contrasts requirements</h2>
        <h3>Required color contrasts</h3>
        <div>
          <p>
            Color 1, Color 2
            <input type="radio" name="contrastRatio12" value={3} /> 3 
            <input type="radio" name="contrastRatio12" value={4.5}/> 4.5 
            <input type="radio" name="contrastRatio12" value={0}/> Doesn't matter 

          </p>
          <p>
            Color 1, Color 3
            <input type="radio" name="contrastRatio13" value={3}/> 3 
            <input type="radio" name="contrastRatio13" value={4.5}/> 4.5 
            <input type="radio" name="contrastRatio23" value={0}/> Doesn't matter
          </p>
          <p>
            Color 2, Color 3
            <input type="radio" name="contrastRatio23" value={3}/> 3 
            <input type="radio" name="contrastRatio23" value={4.5}/> 4.5 
            <input type="radio" name="contrastRatio23" value={0}/> Doesn't matter 
          </p>
        </div>
      </div>
    );
  }
}

export default ColorSuggestion;