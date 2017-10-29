import {request, post} from './request'

export function getBlog(url) {
  return request(url)
}

export function postComments(url, data) {
  return post(url, data)
}

