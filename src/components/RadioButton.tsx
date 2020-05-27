import React from 'react';

interface Input {
  categoryName: string;
  label: string;
}
const RadioButton = ({categoryName, label}: Input) => {
  return (
    <>
      <label htmlFor={categoryName}>{label}</label>
      <input type="radio" id={categoryName} name={categoryName} value={categoryName} />
    </>
  );
}

export default RadioButton;
