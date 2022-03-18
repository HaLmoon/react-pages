import React, {useState, useRef} from 'react';

function InputSample3 () {
    const [text, setText] = useState('');
    const nameInput = useRef(null); // 특정 DOM 선택 변수 useRef(null) 필수

    const onChange3 = (e) => {
        setText(e.target.text);
    }

    const onReset3 = () => {
        setText('');
        nameInput.current.focus(); //특정 DOM 에 포커스를 맞추고 싶을 때 current.focus() 해주기
    }

    return (
        <div>
            <input value={text} name='name' ref={(nameInput)} onChange={onChange3} placeholder="이름"/>
            <input value={text} name='nickname' placeholder='닉네임' onChange={onChange3} />
            <button onClick={onReset3}>초기화.포커스</button>
        </div>
    )
}

export default InputSample3 ;