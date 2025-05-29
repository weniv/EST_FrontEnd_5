
function App() {

  function throttle(callback, delay) {

    let timerId = null;

    return () => {
      if (timerId === null) {
        timerId = setTimeout(() => {

          callback();

          // clearTimeout(timerId);
          timerId = null;
        }, delay)
      }
    }
  }

  const consoleLog = () => {
    console.log('console!!');
  }

  const throttleHandler = throttle(consoleLog, 500);

  window.addEventListener('scroll', throttleHandler);


  return (
    <div className="App" style={{ height: '2000px', width: '1000px' }}>
      hello react
    </div>
  );
}




export default App;
