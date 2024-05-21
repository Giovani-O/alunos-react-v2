import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://localhost:5001',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': [
      'OPTIONS',
      'POST',
      'PUT',
      'GET',
      'DELETE',
      'PATCH',
    ],
  },
})
