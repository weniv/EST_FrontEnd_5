import React, { useState } from 'react';
import useInput from './Hook/useInput';

function InputComponent() {
    const [value, changeText] = useInput('');

    // const [value, setValue] = useState('');
    // function changeText(e) {
    //     setValue(e.target.value);
    // }
    return (
        <>
            <input type="text" onChange={changeText} />
            <div>
                {value}
            </div>
        </>
    )
}

export default InputComponent;