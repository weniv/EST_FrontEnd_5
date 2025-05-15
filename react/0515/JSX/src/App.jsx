import "./App.css";

function App() {
    // 일반 JS 주석
    // 컴포넌트의 최상위 부모 요소는 단일해야 함
    // return (
    //         <h1>안녕 라이캣!</h1>
    //         <h1>안녕 라이캣!</h1>
    // );
    const name = "라이캣";
    function 함수() {
        return 100;
    }
    const 값 = true;
    const style = { width: "100px", height: "200px", backgroundColor: "blue" };
    return (
        <div>
            {100 + 1}
            {"hello" + "world"}
            {[1, 2, 3].map((x) => x ** 2)}
            {함수()}
            {값 ? "one" : "two"}
            {/* JSX 주석 */}
            <h1>안녕 {name}!</h1>
            <h1>안녕 {name}!</h1>
            {/* 태그는 무조건 닫아줘야 함 */}
            {/* <h1>안녕 */}
            <div />
            {/* 'class'속성은 'className'으로 사용해야 함 */}
            <div className="newClass" />
            {/* 인라인 스타일은 객체 형태로 사용 */}
            {/* 스타일 정의할때 "-"는 사용하지 않고 camelCase로 사용 */}
            <div style={{ width: "100px", height: "200px", backgroundColor: "blue" }} />
            <div style={style} />
        </div>
    );
}

export default App;
