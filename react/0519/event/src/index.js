import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./\bApp5";
import TabNavigation from "./components/TabNavigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <App2 /> */}
        {/* <App3 /> */}
        {/* <App4 /> */}
        {/* <App5 /> */}
        <TabNavigation />
    </React.StrictMode>
);
