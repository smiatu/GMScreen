import React, { useState } from 'react'

const Roller = () => {
  const roll100 = () => {
    setD100(Math.floor(Math.random() * 100));
  }
  const roll10 = () => {
    setD10(Math.floor(Math.random() * 10));
  }
  const roll6 = () => {
    setD6(Math.floor(Math.random() * 6 + 1));
  }
  const [d100, setD100] = useState(0);
  const [d10, setD10] = useState(0);
  const [d6, setD6] = useState(0);
  
  return (
    <div>
      <title>WFRP dice roller</title>
      <div>
        <div>
          Roll d100:
          <button onClick={roll100}>!</button>
          { d100 }
        </div>
        <div>
          Roll d10:
          <button onClick={roll10}>!</button>
          { d10 }
        </div>
        <div>
          Roll d6:
          <button onClick={roll6}>!</button>
          { d6 }
        </div>
      </div>
    </div>
  )
}

export default Roller