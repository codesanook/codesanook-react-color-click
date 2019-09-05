import React, { useState } from "react";

function App() {
  const [currentOpacity, setCurrentOpacity] = useState(0);
  const defaultOpacity = 0;
  const maxOpacity = 1;
  const numberOfClickTimes = 10;
  const opacityIncrement = maxOpacity / numberOfClickTimes;

  const style = {
    backgroundColor: `rgba(204,204,204, ${defaultOpacity})`,
    width: "200px",
    height: "200px",
    border: "1px solid #000"
  };

  const handleClick = e => {
    let newOpacity = currentOpacity + opacityIncrement;
    e.target.style.backgroundColor = `rgba(204,204,204, ${newOpacity})`;
    setCurrentOpacity(newOpacity);
  };

  return <div style={style} onClick={handleClick}></div>;
}

export default App;
