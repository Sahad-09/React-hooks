import React from 'react'

const usestate = () => {

  const toggle = `In the given code snippet, the useState hook is utilized to create and control the isOpen state variable. Initially, this state variable is set to false. The useState function returns an array with two elements: the first element, isOpen, holds the current state value, while the second element, setIsOpen, is a function used to modify this state.

  The toggle function is defined to toggle the value of isOpen whenever it's called. When invoked, it effectively flips the value of isOpen from true to false, or vice versa, using the setIsOpen function. For example, if isOpen is currently false, calling setIsOpen(true) will change it to true. This mechanism allows for easy toggling of the state between open and closed states in response to user interactions or other triggers.`

  const input = `
  The useState hook is used to manage the "inputValue" state variable, initializing it with an empty string. It returns an array with two elements: "inputValue" representing the state value, initially empty, and "setInputValue," a function to modify the state. The "handleChange" function, serving as an event handler for an input field, captures user input with "event.target.value" and updates "inputValue" using "setInputValue." This synchronization ensures the displayed input field text corresponds to the "inputValue" state, offering real-time updates. The current "inputValue" is also shown in a paragraph below the input field ("<p>Value: {inputValue}</p>"), allowing users to view and interact with the changing input value. Overall, "useState" manages local state, responding to user input to maintain dynamic content in the input field and paragraph, enhancing the user experience.` 

  const count = `
  The useState hook in React plays a pivotal role in managing state within functional components. It is specifically used to create and control a state variable named "count." Upon initial rendering of the component, "count" is initialized with a value of 0, as configured by the useState function.

This function returns an array with two critical elements. The first, "count," holds the current state value, starting at 0. The second element, "setCount," is a React-provided function that enables the modification of the "count" state.

The component offers two essential functions, "increment" and "decrement," triggered by respective "Increment" and "Decrement" buttons. In the "increment" function, "setCount" is employed to raise the "count" state by 1, effectively incrementing it. Conversely, the "decrement" function utilizes "setCount" to reduce the "count" state by 1, decrementing its value.

The user interface includes a paragraph element ("<p>Count: {count}</p>") that displays the current "count" state value, ensuring real-time synchronization. Additionally, two buttons activate the "increment" and "decrement" functions when clicked, resulting in state modifications. Overall, the useState hook enables dynamic state management and responsive user interfaces.
  `

  return (
    <div className='bg-[#060c18]'>
      <div className=" shadow-md bg-[#060c18] mx-auto w-[70rem] max-w-full min-h-screen z-50 md:rounded-md ">
        <div className='p-3'>
            <h1 className=' text-[45px] border-b-2 border-[#0F1729] text-center bg-gradient-to-b from-[#18B4F7] to-[#C8CAD0] text-transparent bg-clip-text'>useState</h1>


            <p className='text-[20px]'>The useState hook in React adds state to functional components, allowing you to store and manage data. It returns the current state value and a function to update it. useState enables interactivity, form handling, and dynamic UI changes, making it a vital tool in React development.</p>
            <div className=' my-8'>
            <h3 className=' text-[29px]'>1.Toggle state</h3>
                <div className=' w-[60rem] mx-auto my-5'>
                  <iframe
                  className='mt-1'
                  src="https://codesandbox.io/embed/toggle-state-rofxhk?fontsize=14&hidenavigation=1&theme=dark"
                    style={{
                      width: '100%',
                    height: '400px',
                    border: '0',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}
                    title="Toggle State"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>
                </div>
            <p className=' pb-14 text-[20px]  border-b-2 border-[#0F1729]'>{toggle}</p>
          </div>



          <div className="my-8">
            <h3 className=' text-[29px]'>2.Input field state</h3>
            <div className="w-[60rem] mx-auto my-5">
              <iframe
              className='mt-1'
                  src="https://codesandbox.io/embed/input-field-state-wh0rw1?fontsize=14&hidenavigation=1&theme=dark"
                  style={{
                    width: '100%',
                    height: '400px',
                    border: '0',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}
                  title="Input field state"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
            <p className='  pb-14 text-[20px]  border-b-2 border-[#0F1729]'>{input}</p>
          </div>




          <div className="my-8">
            <h3 className=' text-[29px]'>3.Counter</h3>
            <div className="w-[60rem] mx-auto my-5">
              <iframe
              className='mt-1'
                    src="https://codesandbox.io/embed/counter-e2gztu?fontsize=14&hidenavigation=1&theme=dark"
                    style={{
                      width: '100%',
                      height: '400px',
                      border: '0',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}
                    title="Counter"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  ></iframe>
            </div>
            <p className=' pb-14 text-[20px] '>{count}</p>
        <p className='  border-[#0F1729] border-b-2'></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default usestate
