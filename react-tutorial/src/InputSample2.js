import React  from 'react';
//input 여러개 값 관리하기 - 보류

function InputSample2 () {
   /*  const [Inputs, setInputs] = useState({
        name : '',
        nickname : ''
    }); */

    
    const onChange2 = (e) => {
        

    }

    const onReset2 = () => {

    }

    return (
        <div>
            <input name='name' onChange={onChange2} placeholder='이름'/>
            <input name='nickname'  onChange={onChange2} placeholder='닉네임'/>
            <button onClick={onReset2} >초기화</button>
            <h3>값 : </h3>

        </div>
    )
}

export default InputSample2 ;   