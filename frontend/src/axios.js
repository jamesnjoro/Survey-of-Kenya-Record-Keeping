import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:5000/api'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
})