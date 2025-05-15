import React from "react";
import "./App4.css";

function Component1() {
    return (
        <React.Fragment className="my-fragment">
            <h1>안녕, 라이캣 1호!</h1>
            <h2>안녕, 라이캣 2호!</h2>
        </React.Fragment>
    );
}

function Component2() {
    return (
        <>
            <h1>안녕, 라이캣 1호!</h1>
            <h2>안녕, 라이캣 2호!</h2>
        </>
    );
}

function App4() {
    return (
        <React.Fragment>
            <Component1 />
            <Component2 />
        </React.Fragment>
    );
}

function App5() {
    return (
        <div>
            <div>
                <h1>안녕, 라이캣 1호!</h1>
                <h2>안녕, 라이캣 2호!</h2>
            </div>
            <div>
                <h1>안녕, 라이캣 1호!</h1>
                <h2>안녕, 라이캣 2호!</h2>
            </div>
        </div>
    );
}

export default App4;
