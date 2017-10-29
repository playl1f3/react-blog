import React, { Component } from 'react'
import PostForm from '../components/PostForm'
import axios from 'axios'

class PostFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: { status: 0 }
    }
  }

  handleSubmit = (values) => {
    console.log(values);
    var _this = this
    axios.post('http://localhost:8000/polls/blog/', { title: values.Title, content: values.Content })
      .then(function (response) {
        console.log(response)
        _this.setState({ response: response })
        // if(response.status === 201){
        // redirect(context.status, context.url)
        // }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <PostForm onSubmit={this.handleSubmit} response={this.state.response} />
      </div>
    )
  }
}

export default PostFormContainer
