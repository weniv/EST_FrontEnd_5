import { useState } from 'react';

function useInput(initState) {
    const [value, setValue] = useState(initState);
    function changeText(e) {
        setValue(e.target.value);
    }
    return [value, changeText];
}

export default useInput;