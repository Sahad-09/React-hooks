import React from 'react'

const usestate = () => {

  return (
    <div>
      <div className=" shadow-md bg-[#060c18] mx-auto w-[56rem] min-h-screen rounded-md ">
        <div className='p-3'>
            <h1 className=' text-4xl border-b-2 border-[#0F1729] text-center bg-gradient-to-b from-[#18B4F7] to-[#C8CAD0] text-transparent bg-clip-text'>useState</h1>


            <p>The useState hook in React adds state to functional components, allowing you to store and manage data. It returns the current state value and a function to update it. useState enables interactivity, form handling, and dynamic UI changes, making it a vital tool in React development.</p>
            <div className=' my-8'>
            <h3 className=' text-[21px]'>1.Toggle state</h3>
            <p>You can utilize the useState hook to toggle the visibility or behavior of UI elements. For example, you can create a toggle button that changes the state of a component, showing or hiding certain content based on user interaction.</p>
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
                {/* hello  */}
          </div>



          <div className="my-8">
            <h3 className=' text-[21px]'>2.Input field state</h3>
            <p>The useState hook is often used to handle form input within React components. It allows you to store and update the values entered by the user, providing a seamless way to manage form state and perform validation.</p>
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
            <p>With the useState hook, you can easily create counters or rating systems that increment or decrement values based on user actions. This is useful for building interactive components like voting systems, rating bars, or progress trackers.</p>
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
