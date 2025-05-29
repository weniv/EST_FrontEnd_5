import { useMouseLocation } from "./useMouseLocation";
import { useScroll } from "./useScroll";
import { useScrollObserver } from "./useScrollObserver";
import { useState } from 'react';
function App() {

  // const mouseLocation = useMouseLocation();

  const isBottom = useScrollObserver();

  return (
    <div className="App" style={{ width: 200, height: 1200, backgroundColor: 'teal' }}>
      hello react
      <Test />
    </div>

  );
}

function Test() {
  const [test, setTest] = useState(0);

  const increment = () => {
    setTest(test + 1);
    setTest(test + 1);
    setTest(test + 1);
    setTest(test + 1);
  }
  console.log(test);
  return <button onClick={increment}>test!</button>
}

export default App;
