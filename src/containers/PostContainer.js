import React, { Component } from 'react'
import Post from '../components/Post'
import Comments from '../components/Comments'
import CommentForm from '../components/CommentForm'
import data from '../middleware/data'
import axios from 'axios'
import { postComments } from '../middleware/api'

class PostContainer extends Component {
  constructor(props){
    super(props)
    this.state ={
      post: {
        title:'',
        content:'',
        comments:[]
      }
    }
  }
  componentWillMount(){
    var _this = this
    axios.get('http://localhost:8000/polls/blog/' + this.props.match.params.id + '/')
      .then(function (response) {
        console.log(response)
        _this.setState({post:response.data})
        console.log("getcomments")
        console.log(response.data[0])
      })
      .catch(function (error) {
        console.log(error)
      })

    // for(var i = 0; i < data.blog.length; i++){
    //   if(data.blog[i].id == this.props.match.params.id){
    //     this.setState({post:data.blog[i]});
    //   }
    // }
  }
  handleSubmit = (values) => {
    // curl -i -X POST -H 'Content-Type: application/json' -d '{"user": "New user", "content": "New content1"}' http://localhost:8000/polls/blog/comment/3/
    console.log(values)
    var _this = this
    postComments("http://localhost:8000/polls/blog/comment/" + this.props.match.params.id + "/",values)
      .then(function(response) {
        console.log(response)
        console.log(_this.state)
        var post = _this.state.post
        post.comments.push(values)
        _this.setState({post:post})
        _this.props.resetForm()

      })
      .catch(function (error) {
        console.log(error)
      })
  }
  
  render() {
    return (
      <div>
        {/* {this.props.match.params.id} */}
        <Post postContent={this.state.post}></Post>
        <Comments comments={this.state.post.comments}></Comments>
        <CommentForm onSubmit={this.handleSubmit}></CommentForm>
      </div>
    );
  }
}

export default PostContainer;
