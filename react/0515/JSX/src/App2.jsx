function App2() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    return (
        <dl>
            <dt>년: </dt>
            <dd>
                <time datetime={year}>{year}</time>
            </dd>
            <dt>월/일: </dt>
            <dd>
                <time datetime={month + 1 + "-" + date}>
                    {month + 1}/{date}
                </time>
            </dd>
            <dt>시간: </dt>
            <dd>
                <time datetime={hour + ":" + minute + ":" + second}>
                    {hour}시 {minute}분 {second}초
                </time>
            </dd>
        </dl>
    );
}

export default App2;
