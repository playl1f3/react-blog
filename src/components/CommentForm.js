import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button} from 'react-bootstrap'

const CommentForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, response } = props
  return (
    <div>
      <h2>Leave A Comment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name='content'
            component='textarea'
            placeholder='Leave a comment' />
        </div>
        <div>
          <Field
            name='user'
            component='input'
            type='text'
            placeholder='Name' />
        </div>
        <div>
          <br/>
          <Button type='submit' bsStyle='primary'>Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(CommentForm)