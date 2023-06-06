import Image from 'next/image'
import Link from 'next/link';
export default function Home() {
  return (
    <>
    <div className=' flex'>
      <div className=" self-center relative container">
		    <span className="react-logo">
			<span className="nucleo"></span>
		    </span>
      </div>
      <div className='self-center mr-48'>
        <h1 className=' bg-gradient-to-b from-[#18B4F7] to-[#C8CAD0] text-transparent bg-clip-text text-left text-[4rem] leading-1 font-semibold '>React hooks with <br /> real use cases</h1>
      </div>
    </div>
      <div>
        <div className=' mx-8 mt-4  grid grid-cols-3 gap-6'>
        <Link className=" text-2xl  p-10 normal-case btn btn-primary"  href={'/usestate'}><button>useState</button></Link>
        <Link className=" text-2xl  p-10 normal-case btn btn-primary" href={'/useeffect' }><button>useEffect</button></Link>
        <Link className=" text-2xl  p-10 normal-case btn btn-primary" href={'/usecontext'}><button>useContext</button></Link>
        <Link className=" text-2xl  p-10 normal-case btn btn-primary" href={'/useref'}><button>useRef</button></Link>
        <Link className=" text-2xl  p-10 normal-case btn btn-primary" href={'/usememo'}><button>useMemo</button></Link>
        <Link className=" text-2xl  p-10 normal-case btn btn-primary" href={'/usecallback'}><button>useCallback</button></Link>
        <Link className=" text-2xl  p-10 normal-case btn btn-primary" href={'/usereducer'}><button>useReducer</button></Link>
        <Link className=" text-2xl  p-10 normal-case btn btn-primary" href={'/usetransition'}><button>useTransition</button></Link>
        <Link className=" text-2xl  p-10 normal-case btn btn-primary" href={'/usedeferredvalue'}><button>useDeferredValue</button></Link>

        </div>
      </div>
    </>
  )
}
