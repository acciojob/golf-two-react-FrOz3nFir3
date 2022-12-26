import React, { Component, useState } from "react";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const handleBall = React.useCallback((event) => {
    if(event.keyCode == 39){
      // Right arrow
      setBallPosition((prevState) => {
        return {
          ...prevState,
          left: `${parseInt(prevState.left)+5}px`
        }
      })
    }else if(event.keyCode == 37){
      // left Arrow
      setBallPosition((prevState) => {
        return {
          ...prevState,
          left: `${parseInt(prevState.left)-5}px`
        }
      })
    }else if(event.keyCode == 38){
      // up arrow
      // setY((y)=>y-5)
      setBallPosition((prevState) => {
        return {
          ...prevState,
          top: `${parseInt(prevState.top) - 5}px`
        }
      })
    }else if(event.keyCode == 40){
      // down arrow
      // setY((y)=>y+5)
      setBallPosition((prevState) => {
        return {
          ...prevState,
          top: `${parseInt(prevState.top)+5}px`
        }
      })
    }
  },[]);

  React.useEffect(() => {
    window.addEventListener("keydown", handleBall, false);

    // removing listener
    return () => window.removeEventListener("keydown", handleBall, false);
  }, []);
  const reset = () => {
    setX(0);
    setY(0)
  };
  const play = () => {
    setRenderBall(true);
  };
  const renderChoice = () => {};

  return (
    <div className="playground">
      {renderBall ? (
        <div style={ballPosition} className="ball"></div>
      ) : (
        <button onClick={play} className="play">
          Play
        </button>
      )}

      <button onClick={reset} className="reset">
        Reset
      </button>

      {renderChoice()}
    </div>
  );
};

export default App;
