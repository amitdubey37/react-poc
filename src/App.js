import React, { Component } from 'react';
import ProgressBar from './ProgressBar'
// import { Label, DropdownButton, MenuItem, Form } from 'react-bootstrap'

class App extends Component{
  constructor(props) {
        super(props);

        this.state = {
           progress: 0
        }

        this.increment = this.increment.bind(this);
        this.decrease = this.decrease.bind(this);
     };

      increment(e) {
        var count = (this.state.progress) + (10)
        if(count<=100){
            this.setState({progress: count});
        }

     }

     decrease(e){
       var count = (this.state.progress) - (10)
       if(count>=0){
           this.setState({progress: count});
       }
     }

     render() {
        return (
           <div>
              <ProgressBar progress={this.state.progress}/>
              <button onClick={this.increment}> increase</button>
              <button onClick={this.decrease}> decrease</button>

           </div>
        );
     }
}
export default App;
