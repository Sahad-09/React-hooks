import Image from 'next/image'
export default function Home() {
  return (
    <>
      <div>
        <div className="relative bottom-12 container">
		<span className="react-logo">
			<span className="nucleo"></span>
		</span>
      </div>

            <h1 className=' text-center text-4xl font-semibold'>React hooks with real life use cases (No BS)</h1>
        <div className=' mx-8 mt-4  grid grid-cols-3 gap-6'>
        <button className=" text-2xl  p-10 normal-case btn btn-primary">useState</button>
        <button className=" text-2xl  p-10 normal-case btn btn-primary">useEffect</button>
        <button className=" text-2xl  p-10 normal-case btn btn-primary">useContext</button>
        <button className=" text-2xl  p-10 normal-case btn btn-primary">useRef</button>
        <button className=" text-2xl  p-10 normal-case btn btn-primary">useMemo</button>
        <button className=" text-2xl  p-10 normal-case btn btn-primary">useCallback</button>
        <button className=" text-2xl  p-10 normal-case btn btn-primary">useReducer</button>
        <button className=" text-2xl  p-10 normal-case btn btn-primary">useTransition</button>
        <button className=" text-2xl  p-10 normal-case btn btn-primary">useDeferredValue</button>
        </div>
      </div>
    </>
  )
}
