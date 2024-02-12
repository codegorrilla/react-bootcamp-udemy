import Header from './components/Header'
import Hero from './components/Hero'
import Items from './components/Items'
import './App.css'
import CartImg from './assets/cart.png'

function App() {
  

  return (
    <>
     <Header />
     <Hero source={CartImg} name="cart" />
     <Items />
    </>
  )
}

export default App
