import React, {Component} from 'react';

export default class CartTotal extends Component{
  constructor(props){
    super(props)
    var item = props.items[0]
    var total = item.price * item.qty
    this.state= {
      totalAmount:total
    }

  }
  // componentDidMount(){
  //   var total = 0
  //   this.props.items.map(function(item){
  //     total = total + (item.price*item.qty)
  //   })
  //   this.setState({
  //     totalAmount:total
  //   })
  // }
  componentWillReceiveProps(nextProp){
    var total = 0
    nextProp.items.map(function(item){
      total = total + (item.price*item.qty)
    })
    this.setState({
      totalAmount:total
    })
  }
  render(){
    return(
      <div className="row">
        <div className="col-xs-3"></div>
        <div className="col-xs-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <span>Total</span>
              <span id="total-amount">
                  {this.state.totalAmount}
              </span>
            </div>

          </div>
        </div>
        <div className="col-xs-3"></div>
      </div>
    )
  }

}
