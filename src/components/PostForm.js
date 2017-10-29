import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

const PostForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, response } = props
  return (
    <div>
      <h2>Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <div>
            <Field
              name="Title"
              component="input"
              type="Text"
              placeholder="Title"
              />
          </div>
        </div>
        <div>
          <label>Blog Content:</label>
          <div>
            <Field 
              name="Content"
              component="textarea"
              placeholder="Blog post"
              />
          </div>
        </div>
        <div>
          <Button type='submit' bsStyle='primary' text='Submit'>Submit</Button>
        </div>
      </form>
      {response.status === 201 &&
        <Redirect to={'post/' + response.data.id}/>
      }
    </div>
  );

}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(PostForm)
// export default PostForm