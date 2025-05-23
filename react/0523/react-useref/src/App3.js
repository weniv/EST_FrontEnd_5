import { useState, useRef } from "react";

export default function Stopwatch() {
    // 시작한 시간
    // const [startTime, setStartTime] = useState(null);
    const startTime = useRef(0);
    // 현재 시간 
    // const [now, setNow] = useState(0);
    // 인터벌함수의 id
    // const [intervalId, setIntervalId] = useState(null);
    const intervalId = useRef(null);

    const [secondsPassed, setSecondsPassed] = useState(0);

    const [isRunning, setIsRunning] = useState(false);


    function handleStart() {
        // 10시 10분 5초에 시작. 그리고 10초 뒤에 정지
        // 30초 뒤에 재시작. 10시 10분 45초가 현재시간
        // 10시 10분 35초 ==> 시작 시간

        // 새로운 시작 시간을 계산하기
        startTime.current = Date.now() - secondsPassed;


        // 새로운 시작 시간을 바탕으로 흘러간 시간을 계산하기
        intervalId.current = setInterval(() => {
            setSecondsPassed(Date.now() - startTime.current);
        }, 10);

        // setStartTime(Date.now());
        // setNow(Date.now());

        // setIntervalId(setInterval(() => {
        //     setNow(Date.now());
        // }, 10));
        setIsRunning(true);
    }

    function handleStop() {
        clearInterval(intervalId.current);
        setIsRunning(false);
    }

    function handleReset() {
        clearInterval(intervalId.current);
        setSecondsPassed(0);
        setIsRunning(false);
    }

    // let secondsPassed = 0;
    // if (startTime !== null && now !== null) {
    //     secondsPassed = (now - startTime) / 1000; // 기본 단위가 밀리세컨드이기 때문에 초단위로 표현하기 위해서 1000을 나눕니다.
    // }

    return (
        <>
            <h1>Time passed: {(secondsPassed / 1000).toFixed(3)}</h1>
            <button onClick={handleStart} disabled={isRunning}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}
