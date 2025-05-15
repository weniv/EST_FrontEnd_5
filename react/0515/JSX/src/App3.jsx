import "./App3.css";

const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

function Item(props) {
    console.log(props);

    return <li className={props.data.visited && "visited"}>{props.data.area}</li>;
}
function App3() {
    const items = list.map((item) => {
        return <Item key={item.no} data={item} />;
    });
    return (
        <ul>
            {items}
            {/* <Item data={list[0]} />
            <Item />
            <Item />
            <Item /> */}
        </ul>
    );
}

export default App3;
