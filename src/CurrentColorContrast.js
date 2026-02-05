import React from "react";
import { calcContrast } from "./utils/ContrastFunc";
import "./CurrentColorContrast.css";

class CurrentColorContrast extends React.Component {
  render() {
    const isValidColor = (len) => len === 4 || len === 7;
    const getContrastRatio = (hex1, hex2) =>
      isValidColor(hex1.length) && isValidColor(hex2.length)
        ? calcContrast(hex1, hex2)
        : null;

    const cr12 = getContrastRatio(this.props.hexColor1, this.props.hexColor2);
    const cr13 = getContrastRatio(this.props.hexColor1, this.props.hexColor3);
    const cr23 = getContrastRatio(this.props.hexColor2, this.props.hexColor3);

    const ContrastPair = ({ label, ratio }) => {
      if (!ratio) return null;
      const passAA = ratio >= 4.5;
      const passAAA = ratio >= 7;

      return (
        <div className="contrastPair">
          <div className="pairLabel">{label}</div>
          <div className="pairContent">
            <span className="ratio">{ratio.toFixed(2)}</span>
            <div className="standards">
              <span className={`standard ${passAA ? "pass" : "fail"}`}>
                AA {passAA ? "✓" : "✗"}
              </span>
              <span className={`standard ${passAAA ? "pass" : "fail"}`}>
                AAA {passAAA ? "✓" : "✗"}
              </span>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="currentContrastBox">
        <div className="contrastHeader">
          <h3>Current Contrast Ratios</h3>
          <p>WCAG 2.1 Compliance Check</p>
        </div>
        <div className="contrastGrid">
          <ContrastPair label="Color 1 & 2" ratio={cr12} />
          <ContrastPair label="Color 1 & 3" ratio={cr13} />
          <ContrastPair label="Color 2 & 3" ratio={cr23} />
        </div>
        <div className="standardsLegend">
          <div className="legendItem">
            <span className="legendDot pass"></span>
            <span>AA: Meets WCAG AA (4.5:1)</span>
          </div>
          <div className="legendItem">
            <span className="legendDot pass"></span>
            <span>AAA: Meets WCAG AAA (7:1)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentColorContrast;
