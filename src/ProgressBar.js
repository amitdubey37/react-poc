import React, { Component } from 'react';

export default class ProgressBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      progress: props.progress
    }
  }
  componentWillReceiveProps(nextProp){
    this.setState({progress:nextProp.progress})
  }

  render(){
    var currentPorgress = {
      width:this.state.progress+'%'
    }
    return(
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={currentPorgress}>
          {this.state.progress}%
        </div>
      </div>
    )
  }

}
