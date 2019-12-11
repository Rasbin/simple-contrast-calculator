import React from 'react';
import './CurrentColorContrast.css';

class CurrentColorContrast extends React.Component {
  render() {
    return (
      <div className="currentContrastBox">
        <h2>Current color contrast</h2>
        <p>Color 1,  Color 2  :  <span>calcContrast(hexColor1, hexColor2)</span></p>
        <p>Color 1,  Color 3  :  <span>calcContrast(hexColor1, hexColor3)</span></p>
        <p>Color 2,  Color 3  :  <span>calcContrast(hexColor2, hexColor3)</span></p>
      </div>
    );
  }
}

export default CurrentColorContrast;