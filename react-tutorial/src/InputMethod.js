import React, {Component} from 'react';




class handleMethod extends Component {
    
    state = {
        /* message : '', */
        username : '',
        usersay : ''
    }

    /* constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    } */

    handleChange = (e) => {
        this.setState({
           /* message : e.target.value */
           [e.target.name] : e.target.value
        });
    }

    handleClick  = () => {
        
        this.state.username === '' ? alert('값을 입력해주세요') : alert(this.state.username + ":" + this.state.usersay)
        this.setState({
            username : '',
            usersay : ''
        });
    } 


    render() {
        return (
            <div>
                <h1>메서드</h1>
                {/* <input type="text" name="message" value={this.state.message}  placeholder="입력" onChange = {this.handleChange} />
                <button onClick={this.handleClick}>버튼</button>  */}

                <h3>input 이 여러개</h3>
                <input name="username" value={this.state.username} placeholder="" onChange={this.handleChange}/>
                <input name="usersay" value={this.state.usersay} placeholder="" onChange={this.handleChange}/>
                <button onClick={this.handleClick} >확인</button>

               {/* <OtherInput /> */}
            </div>

            
        )
    }
}

export default handleMethod;