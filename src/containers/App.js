import React, { Component } from 'react';
import CartTotal from '../components/CartTotal'
import ListItem from '../components/ListItem'
import AddItemForm from '../components/AddItemForm'
// import { Label, DropdownButton, MenuItem, Form } from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'list': [{
                title: 'mango',
                qty: 1,
                price: 30
            }],
            item: ''

        };
        this.deleteItem = this.deleteItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.incrementQty =  this.incrementQty.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        var inputValue = e.target.value;
        this.setState({
            item: inputValue
        })
    }

    deleteItem(item) {
        var newState = [];
        this.state.list.map(function (it) {
            if (item.title !== it.title) {
                newState.push(it)
            }

        });
        this.setState({list: newState});
    }

    handleSubmit(e) {
        e.preventDefault();

        var title = this.state.item.split('-')[0];
        var price = this.state.item.split('-')[1];
        if(isNaN(price)){
            this.setState({
                error:'Invalid input'
            })

        }else{
            var newState = [];
            this.state.list.map(function (item) {
                newState.push(item)
            });
            newState.push({title: title, qty: 1, price: price});
            this.setState({
                item: '',
                list: newState,
                error:''
            })
        }

    }

    incrementQty(item) {
        var newList = this.state.list;
        var newState = [];
        item.qty += 1;
        this.state.list.map(function (i) {
            if (item.title === i.title) {
                newState.push(item)
            }
            else {
                newState.push(i)
            }
        });
        newList.push(item);
        this.setState({list: newState})
    }

    decrementQty(item) {
        if (item.qty > 1) {
            var newList = this.state.list;
            var newState = [];
            item.qty -= 1;
            this.state.list.map(function (i) {
                if (item.title === i.title) {
                    newState.push(item)
                }
                else {
                    newState.push(i)
                }
            });
            newList.push(item);
            this.setState({list: newState})
        }

    }

    render() {

        var items = this.state.list.map( (item, index) => {
            return (
                    <ListItem item={item} deleteItem={this.deleteItem} decrementQty={this.decrementQty} incrementQty={this.incrementQty} key={index}/>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    <div className='col-xs-3'></div>
                    <div className="col-xs-6">
                        <h3>My Cart</h3>
                        <AddItemForm item={this.state.item} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                        <p className="error">{this.state.error}</p>
                        <div className="list-group">
                            {items}
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
