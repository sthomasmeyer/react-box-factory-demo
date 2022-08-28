// Import React itself (+) the [useState()] Hook from [node_modules].
import React, { useState } from 'react';
// The [uuid()] function generates a unique identifier string.
import { v4 as uuid } from 'uuid';

// This React component is designed to render an HTML <form> element...
// Note, the [addBox()] function is passed as a prop(erty) from its...
// 'BoxFactory' parent. This is useful because it allows us to update...
// the state of the parent component based on the state its child.
const NewBoxForm = ({ addBox }) => {
  // Create an 'INITIAL_STATE' variable w/ key-value pairs aligned to the...
  // <input> elements in the <form>. In this case, there are three such...
  // elements w/ [name] properties of 'backgroundColor', 'height', and 'width'.
  const INITIAL_STATE = {
    backgroundColor: '',
    height: 0,
    width: 0
  };

  // Declare a new state variable 'formData' w/ the [useState()] Hook.
  const [formData, setFormData] = useState(INITIAL_STATE);

  // Update the local state w/ the current state of the input elements.
  const handleChange = (evt) => {
    // Each <input> element has a [name] property (+) a [value] property aligned...
    // to either: 1) the default initial state, or 2) the info that the user has...
    // chosen to populate the target field with.

    // JavaScript's *object destructuring* syntax makes it possible to unpack specific...
    // properties from objects into unique variables. In this case we are capturing...
    // the [name] (+) [value] properties from the [evt.target] object, or, more...
    // specifically the <input> element that we call this function on.
    const { name, value } = evt.target;

    // Execute the [setFormData()] function to update the current state. Note, the...
    // arbitrarily named 'data' object contains key-value pairs aligned to the...
    // initial state object passed to the [useState()] Hook.
    setFormData((data) => ({
      ...data,
      [name]: value
    }));
  };

  // This function is designed to be called on form submission. It sends all of the...
  // information contained in the form's current state to the parent component.
  const captureInput = (evt) => {
    evt.preventDefault();
    // Execute [addBox()], and use [uuid()] to give each box a unique [id].
    addBox({ ...formData, id: uuid() });
    // Reset the form to its initial state.
    setFormData(INITIAL_STATE);
  };

  return (
    <div className='NewBoxForm'>
      <form onSubmit={captureInput}>
        <div>
          <label htmlFor='backgroundColor'>Background Color: </label>
          <input
            type='text'
            id='backgroundColor'
            name='backgroundColor'
            value={formData.backgroundColor}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='height'>Box-height (in pixels): </label>
          <input
            type='number'
            id='height'
            name='height'
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='width'>Box-width (in pixels): </label>
          <input
            type='number'
            id='width'
            name='width'
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <button>Add Box</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
