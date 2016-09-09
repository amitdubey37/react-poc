import React, { Component } from 'react';
// import { Label, DropdownButton, MenuItem, Form } from 'react-bootstrap'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      'users': [
        {
          'name':'Amit',
          age:25,
          profession:'Engineer',
          status:'Active'
        },
        {
          name:'Sachin',
          age:30,
          profession:'Tech-Lead',
          status:'Active'
        },
        {
          name:'Ajay',
          age:25,
          profession:'SSE',
          status:'Active'
        },
        {
          name:'John',
          age:25,
          profession:'Manager',
          status:'Active'
        },
      ]
    }
  }
  deleteUser(user){
    console.log(user);
  }
  handleClick(user){
    user.status==='Active'?(user.status='Disabled'):(user.status='Active')
    var newState =[]

    this.state.users.map(function(u){
      if(user.name!==u.name){
        newState.push(u);
      }
      else{
        newState.push(user)
      }
    })
    this.setState({
      users:newState
    })
  }
  render(){
    var _this = this;
    var hStyle = {
      width:'200px'
    }
    var users = this.state.users.map(function(user,index){
      return (
        <tr key={index} className={user.status}>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.profession}</td>
          <td>{user.status}</td>
          <td><a className='btn btn-success' onClick={_this.handleClick.bind(_this,user)}>{user.status==='Active'?'Disable':'Enable'}</a>
            <a className='btn btn-danger' onClick={_this.deleteUser.bind(_this,user)}>delete</a>
          </td>
        </tr>
      )
    })
    return(
      <div className="container">
      <h2>Basic user list</h2>
      <table className="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Profession</th>
      <th style={hStyle}>Status</th>
      <th style={hStyle}>Action</th>
    </tr>
  </thead>
  <tbody>
    {users}
  </tbody>
</table>
      </div>
    )
  }
}
export default App;
