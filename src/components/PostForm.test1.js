// import React from 'react'
// import ReactDOM from 'react-dom'
// import { shallow, mount } from 'enzyme'
// import PostForm from './PostForm'
// import sinon from 'sinon'

// describe('PostForm', () => {
//   let subject = null
// 	let submitting, touched, error, reset, onSave, onSaveResponse, handleSubmit
//   let status
//   let postForm  
//   beforeEach(() => {
//     submitting = false
// 		touched = false
// 		error = null
// 		reset = sinon.spy()
// 		onSaveResponse = Promise.resolve()
//     // handleSubmit = fn => fn
//     status = null
//   })
//   const buildSubject = () => {
//     handleSubmit = sinon.stub().returns(onSaveResponse)
// 		const props = {
// 			submitting: submitting,
// 			handleSubmit,
//       reset,
//       response: {status: status}
// 		}
// 		return shallow(<PostForm {...props}/>)
//   }

//   it('renders button', () => {
//     subject = buildSubject()
//     console.log(subject.debug())
//     expect(subject.find('Button[type="submit"]').text()).toEqual('Submit')
//   })

//   it('renders Blog Post title', () => {
//     subject = buildSubject()
//     expect(subject.find('h2').text()).toEqual('Blog Post')
//   })

//   it('calls handle submit on submit', () => {
//     subject = buildSubject()
//     subject.find('form').simulate('submit')
// 		expect(handleSubmit.callCount).toEqual(1)
//   })
// })
