import React from 'react'
import { calcContrast } from '../utils/ContrastFunc';


const ColorResults=(props)=>{
  const {resultColor, selectedColor="", color1, color2, color3, selectedNumber="1213"} = props;
  console.log('Color 2 received : ------', color2);
  // 12, selectedColor=1
  // console.log('resultColor ', resultColor, 'Selected Color ', selectedColor)
  // console.log('Selected Number is ', selectedNumber);
  const secondColorToCheckCR = selectedNumber.charAt(1) == '1' ?
  color1
  : selectedNumber.charAt(1) == '2'
  ? color2
  : color3
  ;

  const result= selectedColor && selectedNumber.includes(selectedColor) ? selectedColor: "***"

  const resultDiv = 
  resultColor.map((each, i) =>
    (
    <div key={i} className="mainColorResultContainer">
  {
    selectedColor && selectedNumber.includes(selectedColor)
      ? 
  <div className="13changeColor1">
      <p>
        If you change Color {result} to : {each}, your CR will be {
            (selectedColor == selectedNumber.charAt(0)) ?
            calcContrast(each, eval(`color${selectedNumber.charAt(1)}`))
            : (selectedColor == selectedNumber.charAt(1)) ?
            calcContrast(each, eval(`color${selectedNumber.charAt(0)}`))
            : ''
        } TESTING PURPOSE CR with
        {each} AND...  
        {
          (selectedColor == selectedNumber.charAt(0)) ?
          eval(`color${selectedNumber.charAt(1)}`)
          : eval(`color${selectedNumber.charAt(0)}`)
        }
      </p>
    <br />

    <div
      style={{
        display: "inline-block",
        backgroundColor: selectedColor=='1' && selectedNumber.includes('1')  ? each:color1,
        height: "50px",
        width: "250px",
        border: "2px solid grey",
        borderRadius: 5
      }}
    ></div>
    <div
      style={{
        display: "inline-block",
        backgroundColor: selectedColor=='2'&& selectedNumber.includes('2')  ? each:color2,
        height: "50px",
        width: "250px",
        border: "2px solid grey",
        borderRadius: 5
      }}
    ></div>
    <div
      style={{
        display: "inline-block",
        backgroundColor: selectedColor=='3'&& selectedNumber.includes('3')  ? each:color3,
        height: "50px",
        width: "250px",
        border: "2px solid grey",
        borderRadius: 5
      }}
    ></div>
  </div>
  : null
  }
  </div>)
  )
  

  return (
    resultDiv
  )
}

export default ColorResults;