import React, { useState, useEffect, useCallback } from 'react';

// 자식 컴포넌트
function LoggerComponent({ title, logFunction, color = "blue" }) {
  console.log(`[${title}] LoggerComponent 리렌더링됨`);

  useEffect(() => {
    console.log(`[${title}] useEffect 실행: logFunction이 변경됨`);
    logFunction();
  }, [logFunction, title]);

  return (
    <div style={{
      border: `2px solid ${color}`,
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      backgroundColor: `${color}11`
    }}>
      <h3 style={{ color: color, margin: '0 0 5px 0' }}>{title}</h3>
      <p style={{ margin: 0, fontSize: '14px' }}>
        이 컴포넌트는 logFunction이 변경될 때만 리렌더링되어야 합니다.
      </p>
    </div>
  );
}

// 부모 컴포넌트
function App() {
  const [text, setText] = useState("안녕하세요");
  const [unrelatedState, setUnrelatedState] = useState(0);

  // useCallback 미사용 - 매번 새로운 함수 생성
  const logWithoutCallback = () => {
    console.log(`[useCallback 미사용] 현재 텍스트: "${text}"`);
  };

  // useCallback 사용 - text가 변경될 때만 새로운 함수 생성
  const logWithCallback = useCallback(() => {
    console.log(`[useCallback 사용] 현재 텍스트: "${text}"`);
  }, [text]); // text가 변경될 때만 함수 재생성

  console.log(' App 컴포넌트 리렌더링됨');

  return (
    <div style={{ padding: '20px' }}>

      <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>

        <div style={{ marginBottom: '10px' }}>
          <label>텍스트: </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>

        <div>
          <label>관련없는 상태: {unrelatedState} </label>
          <button onClick={() => setUnrelatedState(s => s + 1)} style={{ marginLeft: '10px' }}>
            무관한 상태 변경
          </button>
        </div>
      </div>

      <div>
        <h2>useCallback 비교</h2>
        <LoggerComponent
          title="useCallback 미사용"
          logFunction={logWithoutCallback}
          color="red"
        />
        <LoggerComponent
          title="useCallback 사용"
          logFunction={logWithCallback}
          color="green"
        />
      </div>
    </div>
  );
}

export default App;