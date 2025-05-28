import { useMouseLocation } from "./useMouseLocation";
import { useScroll } from "./useScroll";
import { useScrollObserver } from "./useScrollObserver";

function App() {

  // const mouseLocation = useMouseLocation();

  const isBottom = useScrollObserver();

  console.log(isBottom);

  return (
    <div className="App" style={{ width: 200, height: 1200, backgroundColor: 'teal' }}>
      hello react
    </div>
  );
}

export default App;
