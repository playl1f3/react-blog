import React, { Component } from 'react'
import Content from '../components/Content'
import axios from 'axios'
import data from '../middleware/data.json'
import { Button } from 'react-bootstrap'
import { getBlog } from '../middleware/getBlog'

class Home extends Component {
  constructor(props){
    super(props)
    this.state ={
      data: [{title :'',
              content:''}]
    }
  }
  componentWillMount() {
    // this.setState({ data: data });
    var _this = this
    // axios.get('http://localhost:8000/polls/data')
    //   .then(function (response) {
    //     // _this.setState({ data: response.data });
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })

    getBlog('http://localhost:8000/polls/blog/')
      .then(function (response) {
        // console.log(response)        
        _this.setState({ data: response.data })
      })
      .catch(function (error) {
        // console.log(error)
      })
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <Content data={this.state.data} />
        <Button id='btn' bsStyle='primary' href='/postform' >Add Blog Post</Button>
      </div>
    )
  }
}

export default Home;