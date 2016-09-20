import React, { Component } from 'react';

export default class PostList extends Component {

  render(){

    return(
        <ul>
          {
            this.props.posts.map(function(post){
                return(
                    <Post postDetail={post}/>
                  );
                })
          }
        </ul>
    )
  }

}

class Post extends Component{
  render(){
    return(
      <li>{this.props.postDetail.title}
       <p>
          PostedBy: {this.props.postDetail.userId}
       </p>
      </li>
    )

  }
}
