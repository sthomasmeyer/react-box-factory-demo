import React from 'react';
import './Box.css';

// This React component is designed to render an HTML <div> element.
const Box = ({ id, backgroundColor, height, width, removeBox }) => {
  // Remember, the [removeBox()] function expects an 'id' attribute to be passed...
  // to it.
  const remove = () => removeBox(id);

  return (
    <div className='Box'>
      <div
        // In this scenario, in-line CSS is necessary bc the specific...
        // style of each box depends on variable user-input.
        style={{
          backgroundColor,
          // Don't forget to specify units -- [px] or [em].
          height: `${height}px`,
          width: `${width}px`
        }}
      />
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Box;
