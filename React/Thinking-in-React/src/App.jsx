import { useState } from 'react'
import './App.css'

function App() {
  const [click, setClick] = useState(null)

  const buttonClick = () => {
    
    
    if (click === null) {
      setClick("X")
    }
    else if (click === "X") {
      setClick(null)
    }


  }
  

  return (
    <>
      <div className='main'>
        <div className='search-bar'>
          <input id='searchId' type="text" placeholder='Search...'/>
        </div>
        <div className='button'>
          <button id='buttonId' onClick={buttonClick}>{click}</button>
        </div>

        <div className='product-table'>
          <div className='name-price'>
            <h2>Name</h2>
            <h2>Price</h2>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
