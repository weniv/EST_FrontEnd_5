import React, { useState, useCallback, useEffect } from 'react';

export default function SimpleApp() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [logs, setLogs] = useState([]);

    console.log('SimpleApp 렌더링됨');

    // TODO: useCallback을 사용해서 아래 함수들을 최적화하세요

    // 카운트 증가 함수
    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    // 카운트 감소 함수  
    const decrement = useCallback(() => {
        setCount(prev => prev - 1);
    }, []);

    // 로그 추가 함수
    const addLog = useCallback((message) => {
        const timestamp = new Date().toLocaleTimeString();
        setLogs(prev => [...prev, `${timestamp}: ${message}`]);
    }, []);

    // useEffect에서 함수들을 의존성으로 사용
    useEffect(() => {
        console.log('increment 함수가 변경됨 - useEffect 실행');
        addLog('increment 함수 변경됨');
    }, [increment, addLog]);

    useEffect(() => {
        console.log('decrement 함수가 변경됨 - useEffect 실행');
        addLog('decrement 함수 변경됨');
    }, [decrement, addLog]);

    return (
        <div style={{ padding: '20px' }}>
            <h1>useCallback 실습 (useEffect 버전)</h1>

            <div style={{ marginBottom: '20px' }}>
                <h2>카운트: {count}</h2>
                <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>
                    증가
                </button>
                <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>
                    감소
                </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>이름: {name}</h2>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름을 입력하세요"
                    style={{ padding: '8px', fontSize: '16px' }}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h3>로그 (최근 5개)</h3>
                <div style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    height: '100px',
                    overflowY: 'auto',
                    backgroundColor: '#f9f9f9'
                }}>
                    {logs.slice(-5).map((log, index) => (
                        <div key={index} style={{ fontSize: '12px', marginBottom: '2px' }}>
                            {log}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}