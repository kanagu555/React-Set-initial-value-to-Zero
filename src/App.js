import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [textfieldValue, setTextfieldValue] = useState(0);

  function handleChange(event) {
    setTextfieldValue(event.target.value);
  }

  // function handleBlur() {
  //   if (textfieldValue === '') {
  //     setTextfieldValue(0);
  //   }
  // }

  return (
    <input
      type="text"
      value={textfieldValue}
      defaultValue={0}
      onChange={handleChange}
      // onBlur={handleBlur}
    />
  );
}
