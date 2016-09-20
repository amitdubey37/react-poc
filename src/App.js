import React, { Component } from 'react';
import PostList from './PostList'
// import { Label, DropdownButton, MenuItem, Form } from 'react-bootstrap'

class App extends Component{
  constructor(props) {
        super(props);

        this.state = {
           posts: []
        }
     };

     componentDidMount(){
       console.log('cl');
       var _this = this;
       $.ajax({
         url: "http://jsonplaceholder.typicode.com/posts/",
         success: function(result){
           console.log(result);
           _this.setState({posts:result})
         }
       });
     }


     render() {
        return (
           <div>
              <h1>Posts</h1>
              <PostList posts={this.state.posts}/>
           </div>
        );
     }
}
export default App;
