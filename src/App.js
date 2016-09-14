import React, { Component } from 'react';
import CartTotal from './CartTotal'
// import { Label, DropdownButton, MenuItem, Form } from 'react-bootstrap'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      'list': [{
        title:'mango',
        qty:1,
        price:30
      }],
      item:''

    }
  }

  handleChange(e){
    var inputValue = e.target.value
    this.setState({
      item:inputValue
    })
  }

  deleteItem(item){
    var newState = []
    this.state.list.map(function(it){
      if(item.title===it.title){

      }
      else{
        newState.push(it)
      }
    })
    this.setState({list:newState})
    console.log(item);
  }

  handleSubmit(e){
    e.preventDefault();
    var newState =[]
    this.state.list.map(function(item){
      newState.push(item)
    })
    var title = this.state.item.split('-')[0]
    var price = this.state.item.split('-')[1]
    newState.push({title:title,qty:1,price:price})
    this.setState({
      item:'',
      list:newState
    })
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
  incrementQty(item){
    var newList = this.state.list
    console.log(item);
    var newState = []
    item.qty+=1
    this.state.list.map(function(i){
      if(item.title === i.title){
        newState.push(item)
      }
      else{
        newState.push(i)
      }
    })
    newList.push(item)
    this.setState({list:newState})
  }

  decrementQty(item){
    if(item.qty>1){
      var newList = this.state.list
      console.log(item);
      var newState = []
      item.qty-=1
      this.state.list.map(function(i){
        if(item.title === i.title){
          newState.push(item)
        }
        else{
          newState.push(i)
        }
      })
      newList.push(item)
      this.setState({list:newState})
    }

  }
  render(){
    var _this = this;
    var hStyle = {
      width:'200px'
    }
    var users = this.state.list.map(function(item,index){
      return (
          <div className="row list-group-item list-group-item-action list-group-item-success" key={index}>
            <div className="col-xs-3">
              <span>
                {item.title}
              </span>
            </div>
            <div className="col-xs-1">
              {item.qty}
            </div>

            <div className="col-xs-3">
                {item.qty*item.price}
            </div>

            <div className="col-xs-1" onClick={_this.decrementQty.bind(_this,item)}>
              <i className="glyphicon glyphicon-minus bt" ></i>
            </div>
            <div className="col-xs-1" onClick={_this.incrementQty.bind(_this,item)}>
                <i className="glyphicon glyphicon-plus bt"></i>
            </div>

            <div className="col-xs-3">
              <span id="deleteItem" className='glyphicon glyphicon-remove-circle' onClick={_this.deleteItem.bind(_this,item)}></span>
            </div>
          </div>
      )
    })
    return(
      <div className="container">
      <div className="row">
        <div className='col-xs-3'></div>
        <div className="col-xs-6">
        <h3>Todos</h3>
        <form action="" className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input type="text" className="form-control" value={this.state.item} placeholder="Enter item" onChange={this.handleChange.bind(this)}/>
          </div>
        </form>
        <div className="list-group">
          {users}
        </div>
        </div>
        <div className='col-xs-3'></div>
      </div>
      <CartTotal items={this.state.list}/>


    </div>
    )
  }
}
export default App;
