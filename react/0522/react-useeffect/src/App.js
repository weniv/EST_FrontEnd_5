
import React, { useState, useEffect } from 'react';
import NationList from './Components/NationList';

function Time(props) {
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  console.log("렌더링이 됩니다..?");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const t = new Date();
      setToday(t);
    }, 1000);
    return () => {
      // clearInterval : setInterval 함수의 작동을 중단합니다.
      clearInterval(intervalId);
    }
  }, [today]);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <NationList />
    </div>
  );
}

export default App;