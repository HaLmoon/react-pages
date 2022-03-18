import React, { Component } from "react";


class OtherInput extends Component  {
    state = {
        username : '',
        usersay : ''

    }

    handleChages = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClicks = () => {
        alert(this.target.username);
        this.setState({
            username : '',
            usersay : ''
        })
    }
    

    render() {
        return (
            <div>
                <h3>input 이 여러개</h3>
                <input name="username" value={this.state.username} placeholder="" onChange={this.handleChages}/>
                <input name="usersay" value={this.state.usersay} placeholder="" onChange={this.handleChages}/>
                <button onClick={this.handleClicks} >확인</button>
                
                
            </div>
        )
    }
}

export default OtherInput;