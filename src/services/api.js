// api.js
import Axios from 'axios'

// membuat instance axios
const api = Axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api
