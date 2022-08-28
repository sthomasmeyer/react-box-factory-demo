import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxFactory = () => {
  const [boxes, setBoxes] = useState([]);

  // This function is meant to be passed to the [NewBoxForm()] child of this...
  // [BoxFactory()] parent component.
  const addBox = (boxObject) => {
    // The following [console.log()] commands are meant to illustrate the nature...
    // of this [addBox()] function, and the data that is being transmitted from...
    // child to parent.
    console.log(`unique id of box to be added: ${boxObject.id}`);
    console.log(
      `background color of box to be added: ${boxObject.backgroundColor}`
    );
    console.log(`height of box to be added: ${boxObject.height}`);
    console.log(`width of box to be added: ${boxObject.width}`);

    // When this function is executed, it will update the current state of this...
    // 'BoxFactory' component based on the state of its child -- 'NewBoxForm'.
    setBoxes((boxes) => [...boxes, boxObject]);
  };

  // This function is meant to be passed to the [Box()] child of this...
  // [BoxFactory()] parent component.
  const removeBox = (id) => {
    console.log(`Box #${id} is about to disappear.`);
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  // Use JavaScript's [map()] method to cycle through each and every...
  // one of the box objects that is held in this component's current...
  // state (+) render a unique <div> component for each one.
  const boxComponents = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      backgroundColor={box.backgroundColor}
      height={box.height}
      width={box.width}
      removeBox={removeBox}
    />
  ));

  return (
    <div className='BoxFactory'>
      <h1>The Box Factory</h1>
      <NewBoxForm addBox={addBox} />
      {boxComponents}
    </div>
  );
};

export default BoxFactory;
