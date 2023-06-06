import React from 'react'

const useeffect = () => {
  return (
    <div>
            <div className=" shadow-md bg-[#060c18] mx-auto w-[56rem] min-h-screen rounded-md ">
        <div className='p-3'>
            <h1 className=' text-4xl border-b-2 border-[#0F1729] text-center bg-gradient-to-b from-[#18B4F7] to-[#C8CAD0] text-transparent bg-clip-text'>useEffect</h1>


            <p>The useEffect hook in React is used for handling side effects in functional components. It allows you to perform certain actions when the component mounts, updates, or unmounts. Here are some common use cases for useEffect:</p>
            <div className=' my-8'>
            <h3 className=' text-[21px]'>1.Fetching data</h3>
            <p>You can use useEffect to fetch data from an API when the component mounts. This is often done using the fetch or axios libraries.</p>
            <iframe
      src="https://codesandbox.io/embed/fetch-api-xcopcr?fontsize=14&hidenavigation=1&theme=dark"
      title="Fetch Api"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      style={{
        width: '100%',
        height: '400px',
        border: '0',
        borderRadius: '4px',
        overflow: 'hidden',

        //hello

      }}
    />
          </div>



          <div className="my-8">
            <h3 className=' text-[21px]'>2.Subscribing to events</h3>
            <p>useEffect can be used to subscribe to browser events, such as scroll events or keyboard events. This allows you to add event listeners and perform actions when the events occur.</p>
            <iframe
      src="https://codesandbox.io/embed/subscribing-to-events-964562?fontsize=14&hidenavigation=1&theme=dark"
      title="Subscribing to events"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      style={{
        width: '100%',
        height: '400px',
        border: '0',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    />
          </div>





          <div className="my-8">
            <h3 className=' text-[21px]'>3.Updating document title</h3>
            <p>useEffect can be used to dynamically update the document title based on the components state or props. This is achieved by modifying the document.title property</p>
            <iframe
      src="https://codesandbox.io/embed/updating-document-title-r6s0zj?fontsize=14&hidenavigation=1&theme=dark"
      title="Updating document title"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      style={{
        width: '100%',
        height: '400px',
        border: '0',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    />
          </div>

        </div>
      </div>
    </div>
  )
}

export default useeffect
