import axios from 'axios'

export function request(url) {
  return axios.get(url)
}

export function post(url, data) {
  return axios.post(url,data)
}


// axios.get('http://localhost:8000/polls/blog/')
// .then(function (response) {
//   console.log(response)        
//   _this.setState({ data: response.data })
// })
// .catch(function (error) {
//   console.log(error)
// })