import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.css'; 
import App from './App'   
  
   
 

 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


/* class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>헬로, React!</h1>
      </div> 
    )
  } 
} */

ReactDOM.render(
  <App />, document.getElementById('root')
 
);   
