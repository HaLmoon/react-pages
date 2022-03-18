import React, {useState} from 'react';


// state 는 동적인 값.
function Counter () {
    const [number, setNumber] = useState(0); // 괄호 안의 숫자는 기본값인 처음 시작 숫자를 넣어줌. // state 를 불러오는 방식
    // number 는 변수 이름 setNumber
    // setNumber 는 변하는 number 값을 값에 넣어주기 위함.

    const OnUp = () => {
        setNumber(number + 1);
        // setNumber(prevNumber => prevNumber +1); -> 함수형 업데이트 방식
        
        
    }

    const OnDown = () => {
        setNumber(number -1);
    }


    return (
        <>
            <h3>{number}</h3>
            <button onClick={OnUp}>+1</button>
            <button onClick={OnDown}>-1</button>
        </>
    )
}

export default Counter ; 