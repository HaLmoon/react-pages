import React, {Component} from 'react'; 
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';
import Login from './login';
import Input from './Input';
import InputMethod from './InputMethod';
import ReactTest from './ReactTest'
import Wrapper from './Wrapper'; 
import Counter from './Counter'
import InputSample from './InputSample';
import InputSample2 from './InputSample2'
import InputSample3 from './InputSample3';
import UserList from './UserList';






//props 로 전달, 단방향
/* class App extends Component {
  render(){
    const child =[
      {
        name : 'haeywon',
        job : 'student',
      },
      {
        name : "me",
        job : 'developer',
      },
    ]
      
    return (
      <div className='container'>
        <Table childsData={child}/>
      </div>
    )
    
  }
} */


//state 로 전달, 유연한 방향
class App extends Component {
  state = {
    childs : [
      /* {
        name : 'haeywon',
        job : 'student',
      },
      {
        name : "me",
        job : 'developer',
      },
      {
        name : "user",
        job : 'normal',
      }, */
    ],
  }

  removeChild = (index) => {
    const {childs} = this.state
  
      this.setState({
        childs : childs.filter((child, i) => {
          return i !== index
        }),
    })
  }
  
  render () {
    const {childs} = this.state
    return (
      <div className='container'>
          <Table  childsData={childs} removeChild={this.removeChild} />
          <Form handleSubmit={this.handleSubmit} />
          {/* <Login /> */}
          <Input />
          <InputMethod />
          <Wrapper>
            <ReactTest  color="red"/>
            <ReactTest  color="red" name="react" isSpecial/>
          </Wrapper>
          <Counter />
          <InputSample />
          <InputSample2 />
          <InputSample3 />
          <UserList />
      </div>
    )
  }

  handleSubmit = (childs) => {
    this.setState({childs : [...this.state.childs, childs]})
  }

  
}




export default App;


