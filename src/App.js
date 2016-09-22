import React, { Component } from 'react';
import CartTotal from './CartTotal'

class App extends Component {

        constructor(props){
            super(props)
            this.state =  { searchString: '' };
            this.handleChange = this.handleChange.bind(this)
        }

        handleChange(e){
            console.log('handle change')
            this.setState({searchString:e.target.value});
        }

        render(){
            var libraries = this.props.items , searchString = this.state.searchString.trim().toLowerCase();
            if(searchString.length > 0){

                libraries = libraries.filter(function(l){
                    return l.name.toLowerCase().match( searchString );
                });
            }

            return (
                <div>
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />

                <ul>

                        { libraries.map(function(l){
                            return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                        }) }

                </ul>

            </div>

            )
        }

}
export default App;
