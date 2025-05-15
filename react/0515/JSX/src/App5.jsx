import React from "react";
const items = [
    { id: 1, name: "Apple", desc: "빨간건 사과" },
    { id: 2, name: "Banana", desc: "바나나는 길어" },
    { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

function DlList() {
    const listItems = items.map((item) => {
        return (
            <React.Fragment key={item.id}>
                <dt>{item.name}</dt>
                <dd>{item.desc}</dd>
            </React.Fragment>
        );
    });

    return <dl>{listItems}</dl>;
}

function App5() {
    return <DlList />;
}

export default App5;
