function NoName() {
    return <>이름이 없습니다!</>;
}

function Hello({ name }) {
    if (name) {
        return <div>내 이름은 {name}</div>;
    }
    return <NoName />;
}

function Hello2({ name }) {
    return <div>{name ? `내 이름은 ${name}` : <NoName />}</div>;
}

export default function App5() {
    return (
        <>
            <Hello name="zeezee" />
            <Hello2 name="rosy" />
            <Hello />
            <Hello2 />
        </>
    );
}
