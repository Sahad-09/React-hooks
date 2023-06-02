import UseState from './Routes/UseState';
import UseEffect from './Routes/UseEffect';
import Home from './Home';
import { BrowserRouter, Route, Routes   } from 'react-router-dom'

function App() {

  return (
    <>

    {/* BrowserRouer allows the user to navigate to multiple pages in a single-page application */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/useState' element={<UseState />}/>
      <Route path='/useEffect' element={<UseEffect />}/>

      
    </Routes>
    </BrowserRouter>

  </>
  )
}

export default App
