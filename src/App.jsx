import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      {/* Components */}
      <Navbar />
      <Home />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
