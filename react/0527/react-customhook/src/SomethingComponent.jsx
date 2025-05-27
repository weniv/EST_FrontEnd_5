import React, { useState } from 'react';
import useInput from './Hook/useInput';

function SomethingComponent() {
    // const [value, setValue] = useState('');
    // function changeText(e) {
    //     setValue(e.target.value);
    // }
    const [value, changeText] = useInput('');
    return (
        <>
            <input type="text" onChange={changeText} />
            <div>
                {value}가 강해졌다 돌격해!
            </div>
        </>
    )
}

export default SomethingComponent;