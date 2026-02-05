import React from "react";
import "./ColorSuggestion.css";

class ColorSuggestion extends React.Component {
  handleFindColors = () => {
    this.props.parentCallBackFindColors();
  };

  handleContrastRatio12 = (e) => {
    this.props.parentCallBackUpdateCR12(e.target.value);
  };

  handleContrastRatio13 = (e) => {
    this.props.parentCallBackUpdateCR13(e.target.value);
  };

  handleContrastRatio23 = (e) => {
    this.props.parentCallBackUpdateCR23(e.target.value);
  };

  handleColorsToChange = (e) => {
    this.props.parentCallBackUpdateColorsToChange(e.target.value);
  };

  render() {
    return (
      <div className="colorSuggestionContainer">
        <div className="suggestionHeader">
          <h2>Find Accessible Color Combinations</h2>
          <p>
            Define your contrast requirements and discover which colors to
            adjust
          </p>
        </div>

        <div className="suggestionContent">
          <section className="requiredContrastsSection">
            <h3>Required Contrast Ratios</h3>
            <p className="sectionDescription">
              Select the WCAG compliance level for each color pair
            </p>

            <div className="contrastOptionsGrid">
              <div className="contrastOption">
                <label className="optionLabel">Color 1 & 2</label>
                <div className="radioGroup">
                  <label className="radioLabel">
                    <input
                      type="radio"
                      name="contrastRatio12"
                      value={3}
                      onClick={this.handleContrastRatio12}
                    />
                    <span className="radioText">Level AA (3:1)</span>
                  </label>
                  <label className="radioLabel">
                    <input
                      type="radio"
                      name="contrastRatio12"
                      value={4.5}
                      onClick={this.handleContrastRatio12}
                    />
                    <span className="radioText">Level AA (4.5:1)</span>
                  </label>
                  <label className="radioLabel">
                    <input
                      type="radio"
                      name="contrastRatio12"
                      value={0}
                      onClick={this.handleContrastRatio12}
                    />
                    <span className="radioText">No requirement</span>
                  </label>
                </div>
              </div>

              <div className="contrastOption">
                <label className="optionLabel">Color 1 & 3</label>
                <div className="radioGroup">
                  <label className="radioLabel">
                    <input
                      type="radio"
                      name="contrastRatio13"
                      value={3}
                      onClick={this.handleContrastRatio13}
                    />
                    <span className="radioText">Level AA (3:1)</span>
                  </label>
                  <label className="radioLabel">
                    <input
                      type="radio"
                      name="contrastRatio13"
                      value={4.5}
                      onClick={this.handleContrastRatio13}
                    />
                    <span className="radioText">Level AA (4.5:1)</span>
                  </label>
                  <label className="radioLabel">
                    <input
                      type="radio"
                      name="contrastRatio13"
                      value={0}
                      onClick={this.handleContrastRatio13}
                    />
                    <span className="radioText">No requirement</span>
                  </label>
                </div>
              </div>

              <div className="contrastOption">
                <label className="optionLabel">Color 2 & 3</label>
                <div className="radioGroup">
                  <label className="radioLabel">
                    <input
                      type="radio"
                      name="contrastRatio23"
                      value={3}
                      onClick={this.handleContrastRatio23}
                    />
                    <span className="radioText">Level AA (3:1)</span>
                  </label>
                  <label className="radioLabel">
                    <input
                      type="radio"
                      name="contrastRatio23"
                      value={4.5}
                      onClick={this.handleContrastRatio23}
                    />
                    <span className="radioText">Level AA (4.5:1)</span>
                  </label>
                  <label className="radioLabel">
                    <input
                      type="radio"
                      name="contrastRatio23"
                      value={0}
                      onClick={this.handleContrastRatio23}
                    />
                    <span className="radioText">No requirement</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          <section className="colorChangeSection">
            <h3>Which Color to Adjust?</h3>
            <p className="sectionDescription">
              Select which color should be modified to meet requirements
            </p>

            <select
              className="colorSelect"
              onChange={this.handleColorsToChange}
            >
              <option value="">Select a color to modify...</option>
              <option value={1}>Color 1</option>
              <option value={2}>Color 2</option>
              <option value={3}>Color 3</option>
            </select>
          </section>

          <div className="buttonContainer">
            <button className="findButton" onClick={this.handleFindColors}>
              <span className="buttonIcon" role="img" aria-label="search">
                🔍
              </span>
              Find Accessible Colors
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorSuggestion;
