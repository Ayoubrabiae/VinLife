import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="container">
            <h1 className="logo"><Link to="/">#VANLIFE</Link></h1>
            <ul className='nav'>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/vans">Vans</Link></li>
            </ul>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
      </Routes>
      
      <footer>
        <p>Ⓒ {new Date().getFullYear()} #VANLIFE</p>
      </footer>
    </BrowserRouter>
  )
}