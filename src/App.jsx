
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Card from './components/Card'
import Footer from './components/Footer'
import Features from './components/Features'


function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Pricing/>
      <Card/>
      <Routes>
        <Route index element={<Pricing/>}></Route>
        <Route path='feat'element={<Features/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    <div className="container"></div>
    </>
  )
}
export default App
