import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  // state ={
  //   age:2
  // }

  // onAgeup =()=>{
  //   this.setState({
  //     age:++this.state.age
  //   })
  // }
  // onAgeDown=()=>{
  //   this.setState({
  //     age:--this.state.age
  //   })
  // }
  render() {
    return (
      <div className="App">
      <div>
        Name:
        <input type="text"></input>
      </div>
      <br></br>
      <div>
        Age:
        <span>{this.props.age}</span>
          <button onClick={this.props.onAgeup}>Age Up</button>
          <button onClick={this.props.onAgeDown}> Age Down</button>
      </div>
      <div>Email:<input type="text"></input></div>
      <hr></hr>
      <div>History:
        <div>
          <ul>
            {this.props.history.map(el=>(
              <li>
                el.age
              </li>
            ))}
          </ul>
        </div>
      </div>

      </div>
      
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    age:state.age,
    history:state.history
  }
}
const mapDispachToProps=(dispach)=>{
return{
  onAgeup:()=>dispach({type:"AGE_UP",value:1}),
  onAgeDown:()=>dispach({type:"AGE_DOWN",value:1})
}
}
export default connect(mapStateToProps,mapDispachToProps)(App);
