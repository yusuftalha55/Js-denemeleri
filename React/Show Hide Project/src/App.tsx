import { useState } from 'react'
import './App.css'

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return(
    <div>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="about"
        isActive={activeIndex ===0}
        onShow={()=> setActiveIndex(0)}
      >

      </Panel>

    </div>
  )
}
