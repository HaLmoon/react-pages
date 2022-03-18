import React, {Component} from 'react';

class EventInput extends Component {

    //state 사용하여 초기값 설정하기
    state = {
        message : ""
    }
   
    render() {
        return (
            <div>
                <h1>Test</h1>
                <input type="text" placeholder="입력" name="userInput"  value={this.state.message}  
                    onChange = {
                        (e) => { 
                            this.setState({ // this.setState 는 값이 계속 변하는 것을 인지하기 위함.
                                message : e.target.value // 입력한 값
                            })
                        }
                    }    
                />

                
                <button onClick={
                    () => { // 버튼 클릭 시 입력한 값이 alert 로 출력되고 창이 사라지면 input 값이 공백값이 됨.
                        //if 문 삼항연산자로 작성 / ? -> 참일 시, : -> 거짓일 시
                        this.state.message === "" ? alert('값을 입력해주세요') : alert(this.state.message) 
                        this.setState ({
                            message : "" // 값이 있을 경우  alert 창 띄우고 input value 값 초기화 
                        });;
                        
                    }
                }>
                    버튼
                </button>

                    
            </div>
        )
    }
}


export default EventInput;