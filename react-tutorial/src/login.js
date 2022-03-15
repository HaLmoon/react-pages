import React, {Component} from 'react'
import LoginCss from './login.css'


class Login extends Component {
   

    state = {
        email : "",
        phone : ""
    };

    logonEvent = () => {
        

        const { email, phone } = this.state;
        
        

        if (email === 'null' || phone === 'null') {
            <h1>비었음</h1>
        }
        else {
            <h1>안비었음</h1>
        }
       
    }

    changeData = (e) => {
        const { value, name } = e.target; 
        this.setState({ [name] : value });
    }

 
    render(){

        

        return (
            
            <div className='login-form'>
                
                <form>
                    <input type="text" className='logon-input' onChange={this.changeData} name="email" />
                    <input type="number" className='logon-input' onChange={this.changeData} name="phone"/>
                    <button onClick={()=> {
                        this.setState(prevState => {
                            return {
                                email : prevState.email,
                                phone : prevState.phone
                            },
                            () => {
                                console.log('방금 로그인이 시도되었음.');
                                console.log(this.state);
                            }
                        })
                    }}
                     className='logon-btn' type='submit'>로그인하기</button>
                </form>
            </div>
        )
    }
}

export default Login