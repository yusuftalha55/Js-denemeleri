import { useState } from "react";
import "./App.css";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="about"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
    </div>
  );
}
