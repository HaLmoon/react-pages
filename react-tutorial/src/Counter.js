import React from 'react';

function Counter () {
    const OnUp = () => {
        console.log("+1");
    }

    const OnDown = () => {
        console.log('-1');
    }


    return (
        <>
            <h3>0</h3>
            <button onClick={OnUp}>+1</button>
            <button onClick={OnDown}>-1</button>
        </>
    )
}

export default Counter ; 