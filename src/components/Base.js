import React, { useState } from 'react';
import Component from './Component.js';

const styleInputAddress = {
  height: '22px',
  width: '10rem',
  padding: '2px 2px'
}

const styleInputLines = {
  height: '22px',
  width: '50px',
  padding: '2px 2px'
}

const styleButtom = {
  height: '30px',
  width: '30px',
  padding: '2px 2px'
}

function Base() {
  const [displayLines, setDisplayLines] = useState(1);
  const [address, setAddress] = useState('777 Brockton Avenue, Abington MA 32423');

  const handleChangeInputAddress = ({ target }) => {
    if (target.value.length > 0) {
      setAddress(target.value)
    }
  }

  const setValidateDisplayLines = (lines) => {     
    if (lines>= 1 && lines<=3) {
      setDisplayLines(lines)
    }
  }
  const handleChangeInputNumber = ({ target }) => setValidateDisplayLines(target.value)  
  const arrowUp = () => setValidateDisplayLines(displayLines + 1)
  const arrowDown = () => setValidateDisplayLines(displayLines - 1)

  return (
    <div>
      <form style={{marginBottom : '4rem'}}>
        <label>
          <span style={{paddingTop : '4rem'}}>address : </span>
          <input style={styleInputAddress} type="text" name="address" value={address} onChange={(event) => handleChangeInputAddress(event)}/>
        </label>
        <div></div>
        <label>
          <span style={{paddingTop : '4rem'}}>displayLines : </span>
          <input style={styleInputLines} type="number" name="displayLines" value={displayLines} onChange={(event) => handleChangeInputNumber(event)}/>
        </label>
        <button type='button' style={styleButtom} onClick={() => arrowUp()}>&uarr;</button>
        <button type='button' style={styleButtom} onClick={() => arrowDown()}>&darr;</button>
      </form>

      <Component address={address} displayLines={displayLines} />
    </div>
  );
}

export default Base