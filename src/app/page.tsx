import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className=' z-20'>
        <div className=' px-[30px] md:px-28'>
          <h1 className=' md:mt-2  bg-gradient-to-b from-[#18B4F7] to-[#C8CAD0] text-transparent bg-clip-text text-4xl md:text-6xl font-semibold text-left'>React Hooks With Real Use Cases</h1>
          <p className=' md:mt-1 pt-2 text-left md:text-xl'>React Hooks enables developers to use state and other React features without creating a class component. They offer a method for integrating stateful logic into functional components, facilitating better code reuse and making component state management less complicated.</p>
        </div>
      </div>


      
        <div className='z-10 mx-auto grid-container'>
          {/* useState */}
        <div className="Frame-18">
          <h1 className=' text-[#18B4F7] font-bold text-3xl'>useState</h1>
          <Image  src="/useState.png" width={300} height={300} alt="Picture of the author" />
          <div className=' h-60 mb-2'>
            <p>useState is a React Hook that allows functional components to have state. It returns an array with two elements: the current state value and a function to update the state.</p>
          </div>
          <Link className=" mr-auto btn btn-primary" href={'/usestate'}><button>Learn More</button></Link>
        </div>


        {/* useEffect */}
        <div className="Frame-18">
          <h1 className=' text-[#f94b4b] font-bold text-3xl'>useEffect</h1>
          <Image  src="/useEffect.png" width={300} height={300} alt="Picture of the author" />
          <div className='h-56 mb-2'>
          <p>useEffect is a React Hook that lets you perform actions in functional components after rendering. It&apos;s useful for tasks like fetching data, subscribing to events, or cleaning up resources.</p>
          </div>
          <Link className=" hover:bg-[#C73C3C] hover:border-[#C73C3C] bg-[#f94b4b] border-[#f94b4b] mr-auto btn btn-primary" href={'/useeffect'}><button>Learn More</button></Link>
        </div>


        {/* useContext */}
        <div className="Frame-18">
          <h1 className=' text-[#dc61fb] font-bold text-3xl'>useContext</h1>
          <Image  src="/useContext.png" width={300} height={300} alt="Picture of the author" />
          <div className=' h-56 mb-2'>
          <p>useContext is a React Hook that allows functional components to access shared data or values provided by a parent component, known as the Context, without passing them explicitly as props.</p>
          </div>
          <Link className=" hover:bg-[#C657E1] hover:border-[#C657E1] bg-[#dc61fb] border-[#dc61fb] mr-auto btn btn-primary" href={'/usecontext'}><button>Learn More</button></Link>
        </div>


        {/* useRef */}
        <div className="Frame-18">
          <h1 className=' text-[#fbb461] font-bold text-3xl'>useRef</h1>
          <Image  src="/useRef.png" width={300} height={300} alt="Picture of the author" />
          <div className=' h-56 mb-2'>
          <p>The useRef hook in React allows you to create a mutable reference to a value that persists across renders. It can be used to store and access values without triggering a re-render of the component.</p>
          </div>
          <Link className=" hover:bg-[#E1A257] hover:border-[#E1A257] bg-[#fbb461] border-[#fbb461] mr-auto btn btn-primary" href={'/useref'}><button>Learn More</button></Link>
        </div>



        {/* useMemo */}
        <div className="Frame-18">
          <h1 className=' text-[#f8fb61] font-bold text-3xl'>useMemo</h1>
          <Image  src="/useMemo.png" width={300} height={300} alt="Picture of the author" />
          <div className=' h-56 mb-2'>
          <p>The useRef hook in React allows you to create a mutable reference to a value that persists across renders. It can be used to store and access values without triggering a re-render of the component.</p>
          </div>
          <Link className=" hover:bg-[#DFE157] hover:border-[#DFE157] bg-[#f8fb61] border-[#f8fb61] mr-auto btn btn-primary" href={'/usememo'}><button>Learn More</button></Link>
        </div>


       

        {/* useCallback */}
        <div className="Frame-18">
          <h1 className=' text-[#64fb61] font-bold text-3xl'>useCallback</h1>
          <Image  src="/useCallback.png" width={300} height={300} alt="Picture of the author" />
          <div className=' h-56 mb-2'>
          <p>The useRef hook in React allows you to create a mutable reference to a value that persists across renders. It can be used to store and access values without triggering a re-render of the component.</p>
          </div>
          <Link className=" hover:bg-[#5AE157] hover:border-[#5AE157] bg-[#64fb61] border-[#64fb61] mr-auto btn btn-primary" href={'/usecallback'}><button>Learn More</button></Link>
        </div>



        {/* useReducer */}
        <div className="Frame-18">
          <h1 className=' text-[#618cfb] font-bold text-3xl'>useReducer</h1>
          <Image  src="/useReducer.png" width={300} height={300} alt="Picture of the author" />
          <div className=' h-56 mb-2'>
          <p>The useRef hook in React allows you to create a mutable reference to a value that persists across renders. It can be used to store and access values without triggering a re-render of the component.</p>
          </div>
          <Link className=" hover:bg-[#577EE1] hover:border-[#577EE1] bg-[#618cfb] border-[#618cfb] mr-auto btn btn-primary" href={'/usereducer'}><button>Learn More</button></Link>
        </div>



        {/* useTransition */}
        <div className="Frame-18">
          <h1 className=' text-[#fb61d0] font-bold text-3xl'>useTransition</h1>
          <Image  src="/useTransition.png" width={300} height={300} alt="Picture of the author" />
          <div className=' h-56 mb-2'>
          <p>The useRef hook in React allows you to create a mutable reference to a value that persists across renders. It can be used to store and access values without triggering a re-render of the component.</p>
          </div>
          <Link className=" hover:bg-[#E157BB] hover:border-[#E157BB] bg-[#fb61d0] border-[#fb61d0] mr-auto btn btn-primary" href={'/useref'}><button>Learn More</button></Link>
        </div>



        {/* useDeferredValue */}
        <div className="Frame-18">
          <h1 className=' text-[#61fbd6] font-bold text-3xl'>useDeferredValue</h1>
          <Image  src="/useDeferredValue.png" width={300} height={300} alt="Picture of the author" />
          <div className=' h-56 mb-2'>
          <p>The useRef hook in React allows you to create a mutable reference to a value that persists across renders. It can be used to store and access values without triggering a re-render of the component.</p>
          </div>
          <Link className=" hover:bg-[#4DC8AB] hover:border-[#4DC8AB] bg-[#61fbd6] border-[#61fbd6] mr-auto btn btn-primary" href={'/useref'}><button>Learn More</button></Link>
        </div>
        </div>
        
    </>
  )
}
