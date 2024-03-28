import './App.css'
import Navbar from './components/Navbar'



function App({cart}) {
  

  return (
   <>
      <div>
        <Navbar cart={cart}/>

        <h1>Welcome to the shop!</h1>
      </div>
    
      
    </>
  )
}

export default App
