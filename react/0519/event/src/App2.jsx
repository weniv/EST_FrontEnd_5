import { useState } from "react";

function App2() {
    const [message, setMessage] = useState("");

    const handleMouseEnter = () => {
        setMessage("마우스가 올라갔습니다.");
    };

    const handleMouseLeave = () => {
        setMessage("마우스가 내려갔습니다.");
    };

    return (
        <div className="App">
            <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                마우스를 올려보세요
            </p>
            <p>현재 상태: {message}</p>
        </div>
    );
}

export default App2;
