import React from 'react';

const Inputs = ({ labelTitle, value, setFunction, typeInput }) => {
  return (
    <>
      <label htmlFor=''>{labelTitle}</label>
      <input
        type={typeInput}
        onChange={(e) => {
          e.preventDefault();
          setFunction(e.target.value);
        }}
        value={value}
      />
    </>
  );
};

export default Inputs;
