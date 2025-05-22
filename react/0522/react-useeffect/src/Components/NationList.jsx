import { useState, useEffect } from 'react'
import styled from 'styled-components'

const ItemList = styled.div`
    margin: 60px auto;

    ul{
        padding: 10px;
    }

    li{
        padding: 10px;
        margin: 20px 0;
        border: 1px solid #e4e4e4;
        box-shadow: 4px 4px 6px rgba(0,0,0, 0.05);
        list-style: none;
        border-radius: 10px;
    }

    .options{
        display: flow-root;
    }

    button{
        float:right;
        padding: 10px;
        border-radius: 10px;
        border:1px solid black;
        background-color: #fff;
    }
`

export default function NationList() {

    const [nations, setNations] = useState([]);
    const [url, setUrl] = useState("http://localhost:3000/nations");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('네크워크 응답에 문제가 있습니다.');
                }

                const json = await response.json();
                setNations(json);
            } catch (error) {
                console.error(error);
            }

            // .then(response => {

            //     if (!response.ok) {
            //         throw new Error('네크워크 응답에 문제가 있습니다.');
            //     }
            //     return response.json()
            // })
            // .then(json => setNations(json))
            // .catch(error => console.error('데이터를 가져오는데 문제가 생겼습니다.', error))
        }

        fetchData();
    }, [url])



    return (
        <ItemList>
            <h2>나라 목록</h2>
            <ul>
                {
                    nations.map(nation =>
                        <li key={nation.id}>
                            <h3>{nation.title}</h3>
                            <p>{nation.population}</p>
                        </li>
                    )
                }

            </ul>
            <div className="options">
                <button onClick={() => setUrl('http://localhost:3000/nations?loc=europe')}>유럽 목록</button>
                <button onClick={() => setUrl('http://localhost:3000/nations')}>전체 목록</button>
            </div>
        </ItemList>
    )
}