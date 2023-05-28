import React from 'react'
// import {useState, useEffect} from 'react'
// import '../../index.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import {CopyToClipboard} from 'react-copy-to-clipboard';


const UseState = () => {

  const toggleState = `import React, { useState } from 'react';

  function App() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <button onClick={toggle}>Toggle</button>
        {isOpen && <div>Content</div>}
      </div>
    );
  }`

  const inputStateField = `import React, { useState } from 'react';

  function Example() {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>Value: {inputValue}</p>
      </div>
    );
  }`

  const counter = `import React, { useState } from 'react';

  function Example() {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }`

  // const [boolean, setBoolean] = useState(false)

  // function clicked(){
  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       setBoolean(false);
  //     }, 2000);
  
  //     return () => clearTimeout(timeout);
  //   }, []);
  // }

    // useEffect(() => {
    //   const timeoutId = setTimeout(() => {
    //     // Run your function here

    //   }, 1000); // Set the time duration in milliseconds (e.g., 5000 milliseconds = 5 seconds)
  
    //   return () => {
    //     clearTimeout(timeoutId); // Stop the function when the component unmounts
    //   };
    // }, []); 





  return (
    <>
      <div className="banner">
      <h1 className="mainHeading">useState</h1>
      <p className="paragraph">
        The useState hook is a fundamental part of the React library and allows you to add state to your functional components. It is commonly used for managing and updating component-level state. Here are some common use cases for useState:
      </p>
      <div className='example'>
      <h2 className='sideHeading'>1.Toggle state:</h2>
      <p>
       You can use useState to create a boolean state that toggles between true and false. This is useful for implementing features like collapsible panels, dropdown menus, or modal dialogs.
      </p>
      <SyntaxHighlighter language="javascript" style={dark}>
      {toggleState}
      </SyntaxHighlighter>
      <span>Practice the code here: </span><a target='_blank' href='https://codesandbox.io/s/toggle-state-rofxhk'>codesandbox.io/s/toggle-state-rofxhk</a>
      </div>



      <div className='example'>
      <h2 className='sideHeading'>2.Input field state:</h2>
      <p>
        useState can be used to manage the state of input fields. This allows you to capture user input and update the component state accordingly.
      </p>
      <SyntaxHighlighter language="javascript" style={dark}>
      {inputStateField}
      </SyntaxHighlighter>
      <span>Practice the code here: </span><a target='_blank' href='https://codesandbox.io/s/input-field-state-wh0rw1'>codesandbox.io/s/input-field-state-wh0rw1</a>
      </div> 



      <div className='example'>
      <h2 className='sideHeading'>3.Counter:</h2>
      <p>
        useState is commonly used to implement a simple counter that increments or decrements its value.
      </p>
      <SyntaxHighlighter language="javascript" style={dark}>
      {counter}
      </SyntaxHighlighter>
      <span>Practice the code here: </span><a target='_blank' href='https://codesandbox.io/s/counter-e2gztu'>codesandbox.io/s/counter-e2gztu</a>
      </div> 
      {/* <CopyToClipboard text={toggleState}>
        <button onClick={clicked}>Copy to clipboard</button>
      </CopyToClipboard>
      {boolean && <span>Copied!!</span>} */}

      </div>
      </>



  )
}

export default UseState


