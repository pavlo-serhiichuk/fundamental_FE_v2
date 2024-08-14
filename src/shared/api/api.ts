import axios from 'axios'
import { AUTH_USER_DATA } from 'shared/const/localStorage'

export const $api = axios.create({
  baseURL: __API__,
  // baseURL: 'http://localhost:8000',
  headers: {
    authorization: localStorage.getItem(AUTH_USER_DATA) || ''
  }
})
