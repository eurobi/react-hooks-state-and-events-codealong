import React, { useState } from "react";

function Toggle() {
  const [isOn, setState] = useState(false);
  function changeState(){
    setState(!isOn)
  }

  return <button style={isOn? {background: 'red'} : {}} onClick={changeState}>{isOn? "ON" : "OFF"}</button>;
}

export default Toggle;
