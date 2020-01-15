import React from 'react'

const ColorResults=(props)=>{
  const {resultColor, selectedColor="", color1, color2, color3, selectedNumber="1213"} = props; // 12, selectedColor=1
  console.log('resultColor ', resultColor, 'Selected Color ', selectedColor)
  const result= selectedColor && selectedNumber.includes(selectedColor) ? selectedColor: "***"

  const resultDiv = <div className="mainColorResultContainer">
  {
    selectedColor && selectedNumber.includes(selectedColor)
      ? 
  <div className="13changeColor1">
      <p>
        If you change Color {result} to : {resultColor}, your CR is
        good enough.
      </p>
  
    <br />

    {/* {
      arr.map((each, i)=>{
        return(
          <div key={i}>
            <span>{i}</span>
            <span>{each.name}</span>
            <span>{each.name}</span>
          </div>
        )
      })
    } */}

    <div
      style={{
        display: "inline-block",
        backgroundColor: selectedColor=='1' && selectedNumber.includes('1')  ? resultColor:color1,
        height: "50px",
        width: "250px",
        border: "2px solid grey",
        borderRadius: 5
      }}
    ></div>
    <div
      style={{
        display: "inline-block",
        backgroundColor: selectedColor=='2'&& selectedNumber.includes('2')  ? resultColor:color2,
        height: "50px",
        width: "250px",
        border: "2px solid grey",
        borderRadius: 5
      }}
    ></div>
    <div
      style={{
        display: "inline-block",
        backgroundColor: selectedColor=='3'&& selectedNumber.includes('3')  ? resultColor:color3,
        height: "50px",
        width: "250px",
        border: "2px solid grey",
        borderRadius: 5
      }}
    ></div>
  </div>
  : null
  }
</div>

  return (
    resultDiv
  )
}

export default ColorResults;