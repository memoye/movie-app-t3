import './App.css'
import NavBar from './components/NavBar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
