import React, {useState} from 'react';


function InputSample () {
    const [text, setText] = useState(''); // 기본값 설정
    const onChange = (e) => {
        setText(e.target.value); // input 에 값 입력 시 해당 input의 value 가 변경되도록. -> e.target.value를 조회하면 현재 input의 value 값을 조회할 수 있다.
    }

    const onReset = () => {
        setText(''); // input의 value 값이 초기화 되도록.
    }

    return (
        <div>
            <input name='' onChange={onChange} value={text}  placeholder='값 입력'/> {/* input 의 onChange 기능을 사용하면 해당 input 객체의 이벤트 객체 e 를 파라미터로 받아올 수 있다. */}
            <button onClick={onReset}>초기화</button>
            <h3>값: {text}</h3>
        </div>
    )
}

export default InputSample ; 