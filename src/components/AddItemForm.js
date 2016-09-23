import React, {Component} from 'react';


export default class AddItemForm extends Component{
    render(){
        return(
            <form action="" className="form" onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" value={this.props.item} placeholder="Enter item and price separated by a - (hyphen)" onChange={this.props.onChange}/>
                </div>
            </form>
        )
    }
}