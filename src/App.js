import React, { Component } from 'react';
import CartTotal from './CartTotal'
import ReactDOM from 'react-dom'
// import { Label, DropdownButton, MenuItem, Form } from 'react-bootstrap'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'amit'
    }
  }
  handleClick(color){
    var div = document.getElementById('content')
    ReactDOM.findDOMNode(div).style.color = color;
  }

  render(){
      return(
          <div id='content'>

            <h2>this is some test</h2>
              <button onClick={this.handleClick.bind(this,'green')}>green</button>
              <button onClick={this.handleClick.bind(this,'red')}>red</button>
              <button onClick={this.handleClick.bind(this,'blue')}>blue</button>
          </div>

      )
  }
}
export default App;
