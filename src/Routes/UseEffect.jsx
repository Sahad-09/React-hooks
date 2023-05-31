import React from 'react'
import {useState, useEffect} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const UseEffect = () => {

  const fetchData = `useEffect(() => {
    active = true
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      // Do something with the data
    };
    fetchData();
    //CleanUp function
    return() =>{
      active = false
    }
  }, []);`

  const subEvents =`useEffect(() => {
    const handleScroll = () => {
      // Handle scroll event
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      // Clean up by removing the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);`

  const documentTitle = `useEffect(() => {
    document.title = 'New Page Title';
  }, []);`




  
  return (
    <>
      <div className="banner">
      <h1 className="mainHeading">useEffect</h1>
      <p className="paragraph">
      The useEffect hook in React is used for handling side effects in functional components. It allows you to perform certain actions when the component mounts, updates, or unmounts. Here are some common use cases for useEffect:
      </p>
      <div className='example'>
      <h2 className='sideHeading'>1.Fetching data:</h2>
      <p>
      You can use useEffect to fetch data from an API when the component mounts. This is often done using the fetch or axios libraries. For example:
      </p>
      <SyntaxHighlighter language="javascript" style={dark}>                 
      {fetchData}
      </SyntaxHighlighter>
      <span>Practical code with live API: </span><a target='_blank' href='https://codesandbox.io/s/fetch-api-xcopcr'>codesandbox.io/s/fetch-api-xcopcr</a>
      </div>



      <div className='example'>
      <h2 className='sideHeading'>2.Subscribing to events</h2>
      <p>
      useEffect can be used to subscribe to browser events, such as scroll events or keyboard events. This allows you to add event listeners and perform actions when the events occur. For example:
      </p>
      <SyntaxHighlighter language="javascript" style={dark}>
      {subEvents}
      </SyntaxHighlighter>
      <span>Practice the code here: </span><a target='_blank' href='https://codesandbox.io/s/subscribing-to-events-964562'>codesandbox.io/s/subscribing-to-events</a>
      </div> 



      <div className='example'>
      <h2 className='sideHeading'>3.Updating document title:</h2>
      <p>
      useEffect can be used to dynamically update the document title based on the component's state or props. This is achieved by modifying the document.title property. For example:
      </p>
      <SyntaxHighlighter language="javascript" style={dark}>
      {documentTitle}
      </SyntaxHighlighter>
      <span>Practice the code here: </span><a target='_blank' href='https://codesandbox.io/s/updating-document-title-r6s0zj'>codesandbox.io/s/updating-document-title-r6s0zj</a>
      </div> 

      </div>
    </>
  )
}

export default UseEffect
