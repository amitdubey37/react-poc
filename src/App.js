import React, { Component } from 'react';
import CartTotal from './CartTotal'
// import { Label, DropdownButton, MenuItem, Form } from 'react-bootstrap'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'amit'
    }
  }


  render(){
      setTimeout( ()=> {
        this.setState({name:'John'})
      }, 5000);
      return(
          <div>
            {this.state.name}
            <h2>this is some test</h2>
          </div>
      )
  }
}
export default App;
