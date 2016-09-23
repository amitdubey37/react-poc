/**
 * Created by Amit Dubey on 12/9/16.
 */
import React, {Component} from 'react';

export default class ListItem extends Component {
    render() {
        var item = this.props.item
        return (
            <div className="row list-group-item list-group-item-action list-group-item-success" >
                <div className="col-xs-3">
                    <span>
                            {item.title}
                    </span>
                </div>
                <div className="col-xs-1">
                        {item.qty}
                </div>

                <div className="col-xs-3">
                    {item.qty * item.price}
                </div>

                <div className="col-xs-1" onClick={this.props.decrementQty.bind(this, item)}>
                    <i className="glyphicon glyphicon-minus bt" ></i>
                </div>
                <div className="col-xs-1" onClick={this.props.incrementQty.bind(this, item)}>
                    <i className="glyphicon glyphicon-plus bt"></i>
                </div>

                <div className="col-xs-3">
                    <span id="deleteItem" className='glyphicon glyphicon-remove-circle' onClick={this.props.deleteItem.bind(this, item)}></span>
                </div>
            </div>
        )
    }
}