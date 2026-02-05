import React from "react";
import { calcContrast } from "../utils/ContrastFunc";
import "../ColorResults.css";

const ColorResults = (props) => {
  const {
    resultColor,
    selectedColor = "",
    color1,
    color2,
    color3,
    selectedNumber = "1213",
  } = props;

  const result =
    selectedColor && selectedNumber.includes(selectedColor)
      ? selectedColor
      : "***";

  const getColor = (colorNum) => {
    const colorMap = { 1: color1, 2: color2, 3: color3 };
    return colorMap[colorNum] || "";
  };

  if (!selectedColor || !selectedNumber.includes(selectedColor)) {
    return (
      <div className="colorResultsContainer">
        <div className="resultEmpty">
          <p>
            <span role="img" aria-label="clipboard">
              📋
            </span>{" "}
            Select a color to change and view suggested alternatives
          </p>
        </div>
      </div>
    );
  }

  const resultDiv = resultColor.map((each, i) => {
    const contrastRatio =
      selectedColor === selectedNumber.charAt(0)
        ? calcContrast(each, getColor(selectedNumber.charAt(1)))
        : selectedColor === selectedNumber.charAt(1)
          ? calcContrast(each, getColor(selectedNumber.charAt(0)))
          : 0;

    return (
      <div key={i} className="resultCard">
        <div className="resultHeader">
          <h4>Suggestion {i + 1}</h4>
          <span className="newValue">{each}</span>
        </div>

        <div className="resultInfo">
          <p>
            Change Color {result} to <strong>{each}</strong>
          </p>
          <div className="contrastResultBadge">
            <span className="ratioLabel">New CR</span>
            <span className="ratioValue">{contrastRatio.toFixed(2)}</span>
          </div>
        </div>

        <div className="colorPreview">
          <div className="previewLabel">Preview</div>
          <div className="previewRow">
            <div
              className="previewSwatch"
              style={{
                backgroundColor:
                  selectedColor === "1" && selectedNumber.includes("1")
                    ? each
                    : color1,
                borderColor:
                  selectedColor === "1" && selectedNumber.includes("1")
                    ? "#3b82f6"
                    : "#e2e8f0",
              }}
              title="Color 1"
            >
              {selectedColor === "1" && selectedNumber.includes("1") && (
                <span className="swatchLabel">Color 1 (New)</span>
              )}
            </div>
            <div
              className="previewSwatch"
              style={{
                backgroundColor:
                  selectedColor === "2" && selectedNumber.includes("2")
                    ? each
                    : color2,
                borderColor:
                  selectedColor === "2" && selectedNumber.includes("2")
                    ? "#3b82f6"
                    : "#e2e8f0",
              }}
              title="Color 2"
            >
              {selectedColor === "2" && selectedNumber.includes("2") && (
                <span className="swatchLabel">Color 2 (New)</span>
              )}
            </div>
            <div
              className="previewSwatch"
              style={{
                backgroundColor:
                  selectedColor === "3" && selectedNumber.includes("3")
                    ? each
                    : color3,
                borderColor:
                  selectedColor === "3" && selectedNumber.includes("3")
                    ? "#3b82f6"
                    : "#e2e8f0",
              }}
              title="Color 3"
            >
              {selectedColor === "3" && selectedNumber.includes("3") && (
                <span className="swatchLabel">Color 3 (New)</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="colorResultsContainer">
      <div className="resultsHeader">
        <h3>Suggested Color Alternatives</h3>
        <p className="resultsDescription">
          These colors will meet your contrast requirements
        </p>
      </div>
      <div className="resultsGrid">{resultDiv}</div>
    </div>
  );
};

export default ColorResults;
