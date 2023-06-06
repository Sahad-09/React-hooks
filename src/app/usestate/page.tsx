'use client'
import React from 'react'


const usestate = () => {





  return (
    <div>
      <div className=" shadow-md bg-[#060c18] mx-auto w-[56rem] min-h-screen rounded-md ">
        <div className='p-3'>
            <h1 className=' text-4xl border-b-2 border-[#0F1729] text-center bg-gradient-to-b from-[#18B4F7] to-[#C8CAD0] text-transparent bg-clip-text'>useState</h1>


            <p>The useState hook is a fundamental part of the React library and allows you to add state to your functional components. It is commonly used for managing and updating component-level state. Here are some common use cases for useState:</p>
            <div className=' my-8'>
            <h3 className=' text-[21px]'>1.Toggle state</h3>
            <p>You can use useState to create a boolean state that toggles between true and false. This is useful for implementing features like collapsible panels, dropdown menus, or modal dialogs.</p>
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



          <div className="my-8">
            <h3 className=' text-[21px]'>2.Input field state</h3>
            <p>useState can be used to manage the state of input fields. This allows you to capture user input and update the component state accordingly.</p>
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




          <div className="my-8">
            <h3 className=' text-[21px]'>3.Counter</h3>
            <p>useState is commonly used to implement a simple counter that increments or decrements its value.</p>
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

        </div>
      </div>
    </div>
  )
}

export default usestate
