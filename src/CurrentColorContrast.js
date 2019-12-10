import React from 'react';
import './CurrentColorContrast.css';

class CurrentColorContrast extends React.Component {
  render() {
    return (
      <div className="currentContrastBox">
        <h2>Current color contrast</h2>
        <p>Color 1,  Color 2  :  <span>Value 1</span></p>
        <p>Color 1,  Color 3  :  <span>Value 2</span></p>
        <p>Color 2,  Color 3  :  <span>Value 3</span></p>

      </div>
    );
  }
}

export default CurrentColorContrast;